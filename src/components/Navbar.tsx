import React from "react";
import Styles from "./Navbar.module.scss";
import Logo from "../assets/logos/logo.svg";
import { Searchbar } from "./Searchbar";
import { Link } from "react-router-dom";
import { NavListPages, NavListActions } from "../res";
import { NavItem } from "./NavItem";

export const Navbar = () => {
  const NavPages = NavListPages.map(({ icon, text, to }) => {
    return (
      <NavItem
        to={to}
        icon={icon}
        text={text}
        option="page"
        key={text}
        className={`${Styles.nav__item}`}
      />
    );
  });

  const NavActions = NavListActions.map(({ icon, text, to }) => {
    return (
      <NavItem
        to={to}
        icon={icon}
        text={text}
        option="action"
        key={text}
        className={`${Styles.nav__item}`}
      />
    );
  });

  return (
    <nav className={Styles.navbar}>
      <div className={Styles.navbar__container}>
        <Link to="/" className={Styles.nav__logo__container}>
          <img src={Logo} alt="S2Hand Logo" className={Styles.nav__logo} />
        </Link>
        <div className={Styles.navbar__nav__container}>
          <div className={Styles.nav__searchbar__container}>
            <Searchbar className={Styles.nav__searchbar} />
          </div>
          <div className={Styles.nav__container}>
            <ul className={Styles.nav__page}>{NavPages}</ul>
            <ul className={Styles.nav__action}>{NavActions}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
