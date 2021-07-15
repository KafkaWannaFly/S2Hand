import BookTimg from "../../assets/images/book-category.png";
import ClothesTimg from "../../assets/images/clothes-category.png";
import EletronicTimg from "../../assets/images/electronic-eletronic.png";
import HouseholdTimg from "../../assets/images/household-category.png";
import PersonalTimg from "../../assets/images/personal-category.png";
import SchoolSupplyTimg from "../../assets/images/school-supply-category.png";
import * as strings from "../../data/strings";
import { CategoryItemProps } from "../../components";
import { queryCategories } from "../../routings";

export const categoryItems: CategoryItemProps[] = [
  {
    thumbnail: BookTimg,
    label: strings.categoryLabels.book,
    to: queryCategories + "book",
    name: "sach"
  },
  {
    thumbnail: SchoolSupplyTimg,
    label: strings.categoryLabels.schoolSupply,
    to: queryCategories + "school-supply",
    name: "school-supply"
  },
  {
    thumbnail: HouseholdTimg,
    label: strings.categoryLabels.household,
    to: queryCategories + "household",
    name: "household"
  },
  {
    thumbnail: PersonalTimg,
    label: strings.categoryLabels.personal,
    to: queryCategories + "personal",
    name: "personal"
  },
  {
    thumbnail: ClothesTimg,
    label: strings.categoryLabels.clothes,
    to: queryCategories + "clothes",
    name: "clothes"
  },
  {
    thumbnail: EletronicTimg,
    label: strings.categoryLabels.electronic,
    to: queryCategories + "electronic",
    name: "electronic"
  }
];
