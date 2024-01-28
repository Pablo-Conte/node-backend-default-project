import { Request, Response } from "express";
import { UserProfileUseCase } from "./UserProfileUseCase";
import { container } from "tsyringe";

class UserProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_e: myId } = request.user;

    const readUserUseCase = container.resolve(UserProfileUseCase);

    const userData = await readUserUseCase.execute({ myId });

    return response.status(200).json(userData);
  }
}

export { UserProfileController };
