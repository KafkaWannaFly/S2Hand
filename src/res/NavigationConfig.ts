import { IconType } from "react-icons";
import { FaBell, FaClipboardList } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiAccountCircleFill, RiHome4Fill } from "react-icons/ri";

export interface NavItemType {
  icon: IconType;
  text: string;
  to: string;
}

export const NavListPages: NavItemType[] = [
  { icon: RiHome4Fill, text: "Trang chủ", to: "/" },
  { icon: FaClipboardList, text: "Quản lý tin", to: "/dashboard" },
  { icon: FaBell, text: "Thông báo", to: "/nofi" },
  { icon: IoBagHandle, text: "Giỏ hàng", to: "/cart" }
];

export const NavListActions: NavItemType[] = [
  { icon: FiEdit, text: "Đăng tin", to: "/post" },
  { icon: RiAccountCircleFill, text: "Đăng nhập", to: "/login" }
];
