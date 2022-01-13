import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const listUsers = this.listAllUsersUseCase.execute({
        user_id: String(request.headers.user_id),
      });

      return response.status(200).json(listUsers);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}

export { ListAllUsersController };
