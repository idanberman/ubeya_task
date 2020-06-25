import { User } from "./User";

export interface UserRepository {
  addUser(name: string): User;
}
