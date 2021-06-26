import { IconType } from "react-icons";
import { FaBell, FaClipboardList } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { RiAccountCircleFill, RiHome4Fill } from "react-icons/ri";
import * as Strings from "./StringsConfig";

export interface NavItemType {
  icon: IconType;
  text: string;
  to: string;
}

export const NavListPages: NavItemType[] = [
  { icon: RiHome4Fill, text: Strings.navPages.home, to: "/" },
  { icon: FaClipboardList, text: Strings.navPages.dashboard, to: "/dashboard" },
  { icon: FaBell, text: Strings.navPages.nofi, to: "/nofi" },
  { icon: IoBagHandle, text: Strings.navPages.cart, to: "/cart" }
];

export const NavListActions: NavItemType[] = [
  { icon: FiEdit, text: Strings.navActions.post, to: "/post" },
  { icon: RiAccountCircleFill, text: Strings.navActions.login, to: "/login" }
];
