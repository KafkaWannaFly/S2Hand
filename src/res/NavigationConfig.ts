import { IconType } from "react-icons";
import { TiHome } from "react-icons/ti";
import { HiClipboardList } from "react-icons/hi";
import { FaBell } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";

export interface NavItemType {
  icon: IconType;
  text: string;
  to: string;
}

export const NavListPages: NavItemType[] = [
  { icon: TiHome, text: "Trang chủ", to: "/" },
  { icon: HiClipboardList, text: "Quản lý tin", to: "/dashboard" },
  { icon: FaBell, text: "Thông báo", to: "/nofi" },
  { icon: IoBagHandle, text: "Giỏ hàng", to: "/cart" }
];

export const NavListActions: NavItemType[] = [
  { icon: FiEdit, text: "Đăng tin", to: "/post" },
  { icon: RiAccountCircleFill, text: "Đăng nhập", to: "/login" }
];
