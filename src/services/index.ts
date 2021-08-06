import { ProductsService } from "./productsService";
import { UsersService } from "./usersService";
import { CategoriesService } from "./categoriesService";

export const productsService = new ProductsService();
export const userService = new UsersService();
export const categoriesService = new CategoriesService();
