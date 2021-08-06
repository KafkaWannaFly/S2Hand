import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";
import styles from "./NavItemAction.module.scss";
import Props from "./props";

const NavItemAction = ({ to, label, icon, className }: Props) => {
  return (
    <NavLink
      to={to}
      className={`${styles.nav__item__action} ${className}`}
      activeClassName={styles.active}
      exact={to === "/" ? true : false}
    >
      <Icon className={styles.nav__item__icon} icon={icon} />
      <span className={styles.nav__item__text}>{label}</span>
    </NavLink>
  );
};

export default NavItemAction;
