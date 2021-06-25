import React from "react";
import { DivProps } from "react-html-props";
import { NavItemType } from "../res";
import { NavLink } from "react-router-dom";
import { Icon } from "./Icon";
import Styles from "./NavItem.module.scss";

interface Props extends DivProps, NavItemType {
  option: string; //page or action
}

export const NavItem: React.FC<Props> = (props) => {
  return (
    <NavLink
      to={props.to}
      className={`${
        props.option === "page"
          ? Styles.nav__item__page
          : Styles.nav__item__action
      } ${props.className}`}
      activeClassName={Styles.active}
      exact={props.to === "/" ? true : false}
    >
      <Icon className={Styles.nav__item__icon} icon={props.icon} />
      <span className={Styles.nav__item__text}>{props.text}</span>
    </NavLink>
  );
};
