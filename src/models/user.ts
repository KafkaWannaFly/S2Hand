import { Product } from ".";

export class User {
  id?: number;
  email?: string;
  password?: string;
  name?: string;
  postedItems?: Product[];
  purchasedItems?: Product[];

  constructor(data: any) {
    this.id = data.id;
    this.email = data.email;
    this.password = data.password;
    this.name = data.name;
    this.postedItems = data.postedItems;
    this.purchasedItems = data.purchasedItems;
  }
}
