import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const checkUser = this.usersRepository.findById(user_id);
    if (checkUser.admin === false || !checkUser) {
      throw new Error("Permission denied!");
    }
    const listUsers = this.usersRepository.list();

    return listUsers;
  }
}

export { ListAllUsersUseCase };
