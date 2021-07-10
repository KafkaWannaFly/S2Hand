import React from "react";
import { DivProps } from "react-html-props";
import { NavItemType } from "../../ui/types";
import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";
import Styles from "./NavItemPage.module.scss";

interface Props extends DivProps, NavItemType {}

const NavItemPage: React.FC<Props> = (props) => {
  return (
    <NavLink
      to={props.to}
      className={`${Styles.nav__item__page} ${props.className}`}
      activeClassName={Styles.active}
      exact={props.to === "/" ? true : false}
    >
      <Icon className={Styles.nav__item__icon} icon={props.icon} />
      <span className={Styles.nav__item__text}>{props.label}</span>
    </NavLink>
  );
};

export default NavItemPage;
