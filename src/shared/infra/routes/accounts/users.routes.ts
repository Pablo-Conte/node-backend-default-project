import { AuthenticateUserController } from "../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import Router from "express";
import { UserProfileController } from "../../../../modules/accounts/useCases/readUser/UserProfileController";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticated";

const usersRouter = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const userProfileController = new UserProfileController();

usersRouter.post("/users/create", createUserController.handle);
usersRouter.post("/users/login", authenticateUserController.handle);
usersRouter.get("/users/profile",
ensureAuthenticated, 
userProfileController.handle);

export { usersRouter };
