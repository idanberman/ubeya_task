import { UsersRepository } from "../../domain/user/UsersRepository";
import { User } from "../../domain/user";

export class TypeormUserRepository implements UsersRepository {
  addUser(name: string): User {
    throw new Error("Method not implemented.");
  }
}
