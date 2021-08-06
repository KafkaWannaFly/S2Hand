import userJson from "../data/users.json";
import { User } from "../models";

export class UsersService {
  getUsers(): User[] {
    const rawUsers = userJson as any[];
    return rawUsers.map((rawUser) => new User(rawUser));
  }
}
