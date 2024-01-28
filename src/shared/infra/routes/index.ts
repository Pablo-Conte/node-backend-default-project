import { Router } from "express";
import { usersRouter } from "./accounts/users.routes";

const router = Router();

router.use(usersRouter);

export { router };
