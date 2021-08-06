import CategoryJson from "../data/categories.json";
import { Category } from "../models";

export class CategoriesService {
  getCategories(): Category[] {
    const rawData = CategoryJson as any[];
    return rawData.map((item) => new Category(item));
  }
}
