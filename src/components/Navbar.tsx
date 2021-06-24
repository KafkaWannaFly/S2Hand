import React from "react";
import Styles from "./Navbar.module.scss";
import Logo from "../assets/logos/logo.svg";
import { Searchbar } from "./Searchbar";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className={Styles.navbar}>
      <div className={Styles.navbar__container}>
        <Link to="/">
          <img src={Logo} alt="S2Hand Logo" className={Styles.navbar__logo} />
        </Link>
        <Searchbar className={Styles.navbar__searchbar} />
      </div>
    </nav>
  );
};
