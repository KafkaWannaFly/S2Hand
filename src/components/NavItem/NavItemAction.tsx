import React from "react";
import { DivProps } from "react-html-props";
import { NavItemType } from "../../ui/types";
import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";
import styles from "./NavItemAction.module.scss";

interface Props extends DivProps, NavItemType {}

const NavItemAction = (props: Props) => {
  return (
    <NavLink
      to={props.to}
      className={`${styles.nav__item__action} ${props.className}`}
      activeClassName={styles.active}
      exact={props.to === "/" ? true : false}
    >
      <Icon className={styles.nav__item__icon} icon={props.icon} />
      <span className={styles.nav__item__text}>{props.label}</span>
    </NavLink>
  );
};

export default NavItemAction;
