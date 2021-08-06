import { ProductsService } from "./productsService";
import { UserService } from "./userService";
import { CategoriesService } from "./categoriesService";

export const productsService = new ProductsService();
export const userService = new UserService();
export const categoriesService = new CategoriesService();
