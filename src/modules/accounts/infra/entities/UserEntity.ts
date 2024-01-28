import { User } from "@prisma/client";

class UserEntity implements User {
  readonly id_i: number;
  readonly id_e: string;
  email: string;
  name: string;
  password: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export { UserEntity };
