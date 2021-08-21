import { Cart } from "../models";

export class CartService {
  getCart(): Cart {
    return new Cart();
  }
}
