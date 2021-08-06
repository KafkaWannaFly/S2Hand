import productJson from "../data/products.json";
import { Product } from "../models";

export class ProductsService {
  getProducts(): Product[] {
    const rawData = productJson as any[];
    return rawData.map((product) => new Product(product));
  }
}
