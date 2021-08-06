import { FaBell, FaClipboardList, FaShoppingBag } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiAccountCircleFill, RiHome4Fill } from "react-icons/ri";
import { NavItemProps } from "../../components";
import * as strings from "../../data/strings";
import { roots } from "../../routings";

const contents = strings.navigations;

export const pageNavigations: NavItemProps[] = [
  { icon: RiHome4Fill, label: contents.home, to: roots.home },
  {
    icon: FaClipboardList,
    label: contents.dashboard,
    to: roots.dashboard
  },
  { icon: FaBell, label: contents.nofi, to: roots.nofi },
  { icon: FaShoppingBag, label: contents.cart, to: roots.cart }
];

export const actionNavigations: NavItemProps[] = [
  { icon: FiEdit, label: contents.post, to: roots.post },
  { icon: RiAccountCircleFill, label: contents.login, to: roots.login }
];
