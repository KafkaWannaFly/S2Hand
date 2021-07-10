import React from "react";
import { DivProps } from "react-html-props";
import Styles from "./CategoryItem.module.scss";
import { Link } from "react-router-dom";
import { CategoryItemType } from "../../ui/types";

interface Props extends DivProps, CategoryItemType {}

const CategoryItem: React.FC<Props> = (props) => {
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
            <p className={Styles.category__item__title}>{props.label}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
