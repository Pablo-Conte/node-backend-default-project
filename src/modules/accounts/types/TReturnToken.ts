import { UserEntity } from "../infra/entities/UserEntity";

type TReturnToken = {
  token: string;
  user: Partial<UserEntity>;
};

export { TReturnToken };
