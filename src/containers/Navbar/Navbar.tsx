import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/logos/logo.svg";
import { Searchbar, NavItemPage, NavItemAction } from "../../components";
import { Link } from "react-router-dom";
import { pageNavigations, actionNavigations } from "./render";
import { DivProps } from "react-html-props";
import { Routes } from "../../routings";
import { useAppSelector } from "../../hooks";

interface Props extends DivProps {}

const Navbar = ({ className, ...props }: Props) => {
  const cart = useAppSelector((state) => state.cart);
  let numItems = 0;
  if (cart.items.length)
    cart.items.forEach((item) => (numItems += item.quantity ?? 0));

  return (
    <nav className={`${styles.navbar} ${className}`} {...props}>
      <div className={styles.navbar__container}>
        <Link to={Routes.HOME} className={styles.navbar__logo__container}>
          <img src={Logo} alt="S2Hand Logo" className={styles.navbar__logo} />
        </Link>
        <div className={styles.navbar__nav__container}>
          <div className={styles.nav__searchbar__container}>
            <Searchbar className={styles.nav__searchbar} />
          </div>
          <div className={styles.nav__container}>
            <ul className={styles.nav__page}>
              {pageNavigations.map(({ icon, label, to }) => (
                <li key={label} className={`${styles.nav__item}`}>
                  {to === Routes.CART ? (
                    <NavItemPage
                      to={to}
                      icon={icon}
                      label={label}
                      badge={numItems ? numItems.toString() : undefined}
                    />
                  ) : (
                    <NavItemPage to={to} icon={icon} label={label} />
                  )}
                </li>
              ))}
            </ul>
            <ul className={styles.nav__action}>
              {actionNavigations.map(({ icon, label, to }) => (
                <li key={label} className={`${styles.nav__item}`}>
                  <NavItemAction to={to} icon={icon} label={label} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
