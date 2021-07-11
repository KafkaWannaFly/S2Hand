import { Product } from "../models";
import ProductPlaceholder from "../assets/images/product-placeholder.png";

let products: Product[] = [
  {
    name: "Tên sản phẩm ngắn",
    thumbnail: ProductPlaceholder,
    price: "Giá ngắn VND",
    location: "Tên địa điểm ngắn",
    duration: "Thời gian ngắn"
  },
  {
    name: "Tên sản phẩm dài: Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    thumbnail: ProductPlaceholder,
    price:
      "Giá dài: Lorem ipsum dolor sit amet, consectetur adipiscing elit VND",
    location:
      "Tên địa điểm dài: Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    duration:
      "Thời gian dài: Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
];

for (let i = 0; i < 2; i++) products = [...products, ...products];

export default products;
