import React from "react";
import { DivProps } from "react-html-props";
import { NavItemType } from "../res";
import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import Styles from "./NavItem.module.scss";

interface Props extends DivProps, NavItemType {
  option: string;
}

export const NavItem: React.FC<Props> = (props) => {
  return (
    <Link to={props.to} className={props.className}>
      <Icon
        className={`${
          props.option === "page"
            ? Styles.nav__item__icon__page
            : Styles.nav__item__icon__action
        }`}
        icon={props.icon}
      />
      {props.text}
    </Link>
  );
};
