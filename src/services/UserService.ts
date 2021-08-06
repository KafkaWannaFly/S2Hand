import userJson from "../data/users.json";
import { User } from "../models";

export class UserService {
  getUsers(): User[] {
    const rawUsers = userJson as any[];
    return rawUsers.map((rawUser) => new User(rawUser));
  }
}
