import { Product } from "./product";
export class Cart {
  items: Product[];
  totalPrice: number;

  constructor() {
    this.items = [];
    this.totalPrice = 0;
  }
}
