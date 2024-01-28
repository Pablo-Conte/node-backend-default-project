import { TCreateUserToken } from "@modules/accounts/types/TCreateUserToken";
import { prisma } from "../../../../database/PrismaClient";
import { injectable } from "tsyringe";
import { IUserTokenRepository } from "../IUserTokenRepository";
import { TDeleteAllTokensByUserId } from "@modules/accounts/types/TDeleteAllTokensByUserId";
import { UserTokenEntity } from "../entities/UserTokenEntity";

@injectable()
class UserTokenRepository implements IUserTokenRepository {
  constructor() {}
  async createUserToken({ count, user_id, expires_date }: TCreateUserToken) {
    const userToken = await prisma.userToken.create({
      data: {
        count,
        user_id,
        expires_date,
      },
    });

    return userToken;
  }
  async deleteAllTokensByUserId({
    user_id,
  }: TDeleteAllTokensByUserId): Promise<void> {
    await prisma.userToken.deleteMany({
      where: {
        user_id,
      },
    });
  }
}

export { UserTokenRepository };
