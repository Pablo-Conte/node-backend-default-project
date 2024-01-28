import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import auth from "../../../settings/auth";
import { AppError } from "../../errors/AppError";

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
      throw new Error("Token is missing");
    }

    const [, token] = authHeader.split(" ");

    try {
      const userData = verify(token, auth.secret_token);

      request.user = {
        id_e: userData.sub,
        email: userData.email,
      };

      next();
    } catch (error) {
      throw new AppError("Invalid token", 401);
    }
  } catch (error) {
    return response.status(401).json({ error: "Unauthorized" });
  }
}
