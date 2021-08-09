import { FaBell, FaClipboardList, FaShoppingBag } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiAccountCircleFill, RiHome4Fill } from "react-icons/ri";
import { NavItemProps } from "../../components";
import * as strings from "../../data/strings";
import { Routes } from "../../routings";

const contents = strings.navigations;

export const pageNavigations: NavItemProps[] = [
  { icon: RiHome4Fill, label: contents.home, to: Routes.HOME },
  {
    icon: FaClipboardList,
    label: contents.dashboard,
    to: Routes.DASHBOARD
  },
  { icon: FaBell, label: contents.nofi, to: Routes.NOFI },
  { icon: FaShoppingBag, label: contents.cart, to: Routes.CART }
];

export const actionNavigations: NavItemProps[] = [
  { icon: FiEdit, label: contents.post, to: Routes.POST },
  { icon: RiAccountCircleFill, label: contents.login, to: Routes.LOGIN }
];
