import { ProductsService } from "./productsService";
import { UsersService } from "./usersService";
import { CategoriesService } from "./categoriesService";
import { LocationsService } from "./locationsService";
import { CartService } from "./cartService";

export const productsService = new ProductsService();
export const userService = new UsersService();
export const categoriesService = new CategoriesService();
export const locationsService = new LocationsService();
export const cartService = new CartService();
