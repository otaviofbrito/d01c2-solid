import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const getUser = this.usersRepository.findById(user_id);
    if (!getUser) {
      throw new Error("User does not exists!");
    }

    this.usersRepository.turnAdmin(getUser);

    return getUser;
  }
}

export { TurnUserAdminUseCase };
