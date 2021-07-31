import productJson from "../data/products.json";
import { Product } from "../models";

export class ProductService {
  getProducts(): Product[] {
    const rawData = productJson as any[];
    return rawData.map((product) => {
      return new Product(product);
    });
  }
}
