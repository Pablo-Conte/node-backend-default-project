import { container, delay } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/infra/IUsersRepository";

import { UsersRepository } from "../../modules/accounts/infra/repositories/UsersRepository";
import { UserTokenRepository } from "../../modules/accounts/infra/repositories/UsersTokenRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  delay(() => UsersRepository)
);

container.registerSingleton<UserTokenRepository>(
  "UserTokenRepository",
  delay(() => UserTokenRepository)
);
