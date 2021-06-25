import BookTimg from "../assets/images/book-category.png";
import ClothesTimg from "../assets/images/clothes-category.png";
import EletronicTimg from "../assets/images/electronic-eletronic.png";
import HouseholdTimg from "../assets/images/household-category.png";
import PersonalTimg from "../assets/images/personal-category.png";
import SchoolSupplyTimg from "../assets/images/school-supply-category.png";

export interface CategoryItemType {
  thumbnail: string;
  title: string;
  to: string;
  name: string;
}

const route = "/category?category=";
export const CategoryList: CategoryItemType[] = [
  { thumbnail: BookTimg, title: "Sách", to: route + "sach", name: "sach" },
  {
    thumbnail: SchoolSupplyTimg,
    title: "Dụng cụ học tập",
    to: route + "school-supply",
    name: "school-supply"
  },
  {
    thumbnail: HouseholdTimg,
    title: "Đồ gia dụng",
    to: route + "household",
    name: "household"
  },
  {
    thumbnail: PersonalTimg,
    title: "Đồ dùng cá nhân",
    to: route + "personal",
    name: "personal"
  },
  {
    thumbnail: ClothesTimg,
    title: "Quần áo",
    to: route + "clothes",
    name: "clothes"
  },
  {
    thumbnail: EletronicTimg,
    title: "Đồ điện tử",
    to: route + "electronic",
    name: "electronic"
  }
];
