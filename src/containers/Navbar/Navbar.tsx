import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/logos/logo.svg";
import { Searchbar, NavItemPage, NavItemAction } from "../../components";
import { Link } from "react-router-dom";
import { navActionItems, navPageItems } from "./render";
import { DivProps } from "react-html-props";
import { roots } from "../../routings";

interface Props extends DivProps {}

const Navbar = (props: Props) => {
  const navPages = navPageItems.map(({ icon, label, to }) => {
    return (
      <NavItemPage
        to={to}
        icon={icon}
        label={label}
        key={label}
        className={`${styles.nav__item}`}
      />
    );
  });

  const navActions = navActionItems.map(({ icon, label, to }) => {
    return (
      <NavItemAction
        to={to}
        icon={icon}
        label={label}
        key={label}
        className={`${styles.nav__item}`}
      />
    );
  });

  return (
    <nav className={`${styles.navbar} ${props.className}`}>
      <div className={styles.navbar__container}>
        <Link to={roots.home} className={styles.navbar__logo__container}>
          <img src={Logo} alt="S2Hand Logo" className={styles.navbar__logo} />
        </Link>
        <div className={styles.navbar__nav__container}>
          <div className={styles.nav__searchbar__container}>
            <Searchbar className={styles.nav__searchbar} />
          </div>
          <div className={styles.nav__container}>
            <ul className={styles.nav__page}>{navPages}</ul>
            <ul className={styles.nav__action}>{navActions}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
