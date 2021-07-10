import React from "react";
import Styles from "./Navbar.module.scss";
import Logo from "../../assets/logos/logo.svg";
import { Searchbar, NavItemPage, NavItemAction } from "../../components";
import { Link } from "react-router-dom";
import { navActionItems, navPageItems } from "../../ui/data";
import { DivProps } from "react-html-props";
import { roots } from "../../routings";

interface Props extends DivProps {}

const Navbar: React.FC<Props> = (props) => {
  const navPages = navPageItems.map(({ icon, label, to }) => {
    return (
      <NavItemPage
        to={to}
        icon={icon}
        label={label}
        key={label}
        className={`${Styles.nav__item}`}
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
        className={`${Styles.nav__item}`}
      />
    );
  });

  return (
    <nav className={`${Styles.navbar} ${props.className}`}>
      <div className={Styles.navbar__container}>
        <Link to={roots.home} className={Styles.navbar__logo__container}>
          <img src={Logo} alt="S2Hand Logo" className={Styles.navbar__logo} />
        </Link>
        <div className={Styles.navbar__nav__container}>
          <div className={Styles.nav__searchbar__container}>
            <Searchbar className={Styles.nav__searchbar} />
          </div>
          <div className={Styles.nav__container}>
            <ul className={Styles.nav__page}>{navPages}</ul>
            <ul className={Styles.nav__action}>{navActions}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
