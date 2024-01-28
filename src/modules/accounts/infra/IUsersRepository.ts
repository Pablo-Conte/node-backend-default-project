import { TCreateUser } from "../types/TCreateUser";
import { TFindUserByEmail } from "../types/TFindUserByEmail";
import { TFindUserById } from "../types/TFindUserById";
import { UserEntity } from "./entities/UserEntity";

interface IUsersRepository {
  createUser({ name, email, password }: TCreateUser): Promise<UserEntity>;
  findUserById({ id }: TFindUserById): Promise<Partial<UserEntity>>;
  findUserByEmail({ email }: TFindUserByEmail): Promise<Partial<UserEntity>>;
}

export { IUsersRepository };
