export class Category {
  id: string;
  name: CategoryName;
  thumbnail: string;
  title: CategoryTitle;

  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.thumbnail = data.thumbnail;
    this.title = data.title;
  }
}

export enum CategoryName {
  BOOK = "sach",
  SCHOOL_SUPPLY = "dodunghoctap",
  CLOTHES = "quanao",
  ELECTRONIC = "dodientu",
  HOUSEHOLD = "dogiadung",
  PERSONAL = "dodungcanhan",
  OTHER = "khac"
}

export enum CategoryTitle {
  BOOK = "Sách",
  SCHOOL_SUPPLY = "Dụng cụ học tập",
  CLOTHES = "Quần áo",
  ELECTRONIC = "Đồ điện tử",
  HOUSEHOLD = "Đồ gia dụng",
  PERSONAL = "Đồ dùng cá nhân",
  OTHER = "Khác"
}
