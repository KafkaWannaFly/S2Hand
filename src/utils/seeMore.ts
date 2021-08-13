import { Product } from "../models";

export class SeeMore {
  seeMoreProducts(productList: Product[], capacity: number): Product[] {
    if (productList.length > capacity) return productList.slice(0, capacity);
    return productList;
  }
}
