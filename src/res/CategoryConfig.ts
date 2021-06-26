import BookTimg from "../assets/images/book-category.png";
import ClothesTimg from "../assets/images/clothes-category.png";
import EletronicTimg from "../assets/images/electronic-eletronic.png";
import HouseholdTimg from "../assets/images/household-category.png";
import PersonalTimg from "../assets/images/personal-category.png";
import SchoolSupplyTimg from "../assets/images/school-supply-category.png";
import * as Strings from "./StringsConfig";

export interface CategoryItemType {
  thumbnail: string;
  title: string;
  to: string;
  name: string;
}

const route = "/category?category=";
export const CategoryList: CategoryItemType[] = [
  {
    thumbnail: BookTimg,
    title: Strings.categoryTitles.book,
    to: route + "sach",
    name: "sach"
  },
  {
    thumbnail: SchoolSupplyTimg,
    title: Strings.categoryTitles.schoolSupply,
    to: route + "school-supply",
    name: "school-supply"
  },
  {
    thumbnail: HouseholdTimg,
    title: Strings.categoryTitles.household,
    to: route + "household",
    name: "household"
  },
  {
    thumbnail: PersonalTimg,
    title: Strings.categoryTitles.personal,
    to: route + "personal",
    name: "personal"
  },
  {
    thumbnail: ClothesTimg,
    title: Strings.categoryTitles.clothes,
    to: route + "clothes",
    name: "clothes"
  },
  {
    thumbnail: EletronicTimg,
    title: Strings.categoryTitles.electronic,
    to: route + "electronic",
    name: "electronic"
  }
];
