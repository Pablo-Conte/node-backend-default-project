import { TCreateUserToken } from "../types/TCreateUserToken";
import { TDeleteAllTokensByUserId } from "../types/TDeleteAllTokensByUserId";

interface IUserTokenRepository {
  createUserToken({ count, user_id, expires_date }: TCreateUserToken);
  deleteAllTokensByUserId({ user_id }: TDeleteAllTokensByUserId);
}

export { IUserTokenRepository };
