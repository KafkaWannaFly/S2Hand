import userJson from "../data/users.json";
import { User } from "../models";

export class UsersService {
  getUsers(): User[] {
    const rawUsers = userJson as any[];
    return rawUsers.map((rawUser) => new User(rawUser));
  }
  getUserByLogin(email: string, password: string): User | undefined {
    const users = this.getUsers();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    return user;
  }
}
