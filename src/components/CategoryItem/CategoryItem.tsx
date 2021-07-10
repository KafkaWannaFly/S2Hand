import React from "react";
import { DivProps } from "react-html-props";
import styles from "./CategoryItem.module.scss";
import { Link } from "react-router-dom";
import { CategoryItemType } from "../../ui/types";

interface Props extends DivProps, CategoryItemType {}

const CategoryItem = (props: Props) => {
  return (
    <div className={`${props.className} ${styles.category__item}`}>
      <div className={styles.category__item__container}>
        <Link to={props.to} className={styles.category__item__link}>
          <img
            src={props.thumbnail}
            alt={props.name}
            className={styles.category__item__thumbnail}
          />
          <div className={styles.category__item__title__container}>
            <p className={styles.category__item__title}>{props.label}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
