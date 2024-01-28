import { DTOAuthenticateUser } from "@modules/accounts/dtos/DTOAuthenticateUser";
import { IUsersRepository } from "@modules/accounts/infra/IUsersRepository";
import { inject, injectable } from "tsyringe";

import { compare } from "bcrypt";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserTokenRepository } from "@modules/accounts/infra/IUserTokenRepository";
import { sign } from "jsonwebtoken";
import auth from "../../../../settings/auth";
import { TReturnToken } from "@modules/accounts/types/TReturnToken";
import dayjs from "dayjs";

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("UserTokenRepository")
    private userTokenRepository: IUserTokenRepository
  ) {}
  async execute({
    email,
    password,
  }: DTOAuthenticateUser): Promise<TReturnToken> {
    const { secret_token } = auth;
    const expires_date = 1;
    const userExists = await this.usersRepository.findUserByEmail({ email });

    if (!userExists) {
      throw new AppError("Email or password incorrect!", 401);
    }

    await this.userTokenRepository.deleteAllTokensByUserId({
      user_id: userExists.id_e,
    });

    const comparePassword = await compare(password, userExists.password);

    if (!comparePassword) {
      throw new AppError("Email or password incorrect!", 401);
    }

    const newToken = sign(
      {
        email: userExists.email.toLowerCase(),
      },
      secret_token,
      {
        subject: userExists.id_e,
        expiresIn: "1h",
      }
    );

    const calculatedExpiresDate = dayjs().add(expires_date).toDate();

    await this.userTokenRepository.createUserToken({
      count: 0,
      user_id: userExists.id_e,
      expires_date: calculatedExpiresDate,
    });

    delete userExists.password;
    const returnUser = {
      ...userExists,
    };

    const tokenReturn = {
      token: newToken,
      user: returnUser,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
