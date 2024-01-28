import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body as unknown as {
      name: string;
      email: string;
      password: string;
    };
    const createUserUseCase = container.resolve(CreateUserUseCase);

    const newUser = await createUserUseCase.execute({
      name,
      email,
      password,
    });

    return response.status(201).json(newUser);
  }
}

export { CreateUserController };
