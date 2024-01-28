import { TCreateUser } from "@modules/accounts/types/TCreateUser";
import { UserEntity } from "../entities/UserEntity";
import { prisma } from "../../../../database/PrismaClient";
import { TFindUserByEmail } from "@modules/accounts/types/TFindUserByEmail";
import { TFindUserById } from "@modules/accounts/types/TFindUserById";

class UsersRepository {
  async createUser({
    name,
    email,
    password,
  }: TCreateUser): Promise<UserEntity> {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return newUser;
  }

  async findUserById({ id }: TFindUserById): Promise<Partial<UserEntity>> {
    const userFound = await prisma.user.findUnique({
      where: {
        id_e: id,
      },
      select: {
        id_e: true,
        email: true,
        name: true,
      }
    });
    return userFound;
  }

  async findUserByEmail({
    email,
  }: TFindUserByEmail): Promise<Partial<UserEntity>> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id_e: true,
        email: true,
        name: true,
        password: true,
      },
    });
    return user;
  }
}

export { UsersRepository };
