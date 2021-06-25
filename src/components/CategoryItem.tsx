import React from "react";
import { DivProps } from "react-html-props";
import Styles from "./CategoryItem.module.scss";
import { Link } from "react-router-dom";
import { CategoryItemType } from "../res";

type Props = DivProps & CategoryItemType;

export const CategoryItem: React.FC<Props> = (props) => {
  return (
    <div className={`${props.className} ${Styles.category__item}`}>
      <div className={Styles.category__item__container}>
        <Link to={props.to} className={Styles.category__item__link}>
          <img
            src={props.thumbnail}
            alt={props.name}
            className={Styles.category__item__thumbnail}
          />
          <div className={Styles.category__item__title__container}>
            <p className={Styles.category__item__title}>{props.title}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
