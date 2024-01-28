import { DTOUserProfile } from "@modules/accounts/dtos/DTOUserProfile";
import { IUsersRepository } from "@modules/accounts/infra/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class UserProfileUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    async execute({ myId }: DTOUserProfile) {
        const user = await this.usersRepository.findUserById({ id: myId });

        if (!user) throw new AppError("User not found!", 404);
        return user;
    }
}

export { UserProfileUseCase };
