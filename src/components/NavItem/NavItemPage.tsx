import React from "react";
import Props from "./props";
import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";
import styles from "./NavItemPage.module.scss";

const NavItemPage = ({ to, icon, label, badge, className }: Props) => {
  return (
    <NavLink
      to={to}
      className={`${styles.nav__item__page} ${className}`}
      activeClassName={styles.active}
      exact={to === "/" ? true : false}
    >
      <Icon className={styles.nav__item__icon} icon={icon} />
      <span className={styles.nav__item__text}>{label}</span>
      {badge && <span className={styles.nav__item__badge}>{badge}</span>}
    </NavLink>
  );
};

export default NavItemPage;
