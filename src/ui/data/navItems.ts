import { FaBell, FaClipboardList, FaShoppingBag } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiAccountCircleFill, RiHome4Fill } from "react-icons/ri";
import { NavItemType } from "../types";
import * as strings from "../../data/strings";
import { roots } from "../../routings";

export const navPageItems: NavItemType[] = [
  { icon: RiHome4Fill, label: strings.navTitles.home, to: roots.home },
  {
    icon: FaClipboardList,
    label: strings.navTitles.dashboard,
    to: roots.dashboard
  },
  { icon: FaBell, label: strings.navTitles.nofi, to: roots.nofi },
  { icon: FaShoppingBag, label: strings.navTitles.cart, to: roots.cart }
];

export const navActionItems: NavItemType[] = [
  { icon: FiEdit, label: strings.navTitles.post, to: roots.post },
  { icon: RiAccountCircleFill, label: strings.navTitles.login, to: roots.login }
];
