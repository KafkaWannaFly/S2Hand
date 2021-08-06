import React from "react";
import { DivProps } from "react-html-props";
import styles from "./CategoryCard.module.scss";
import { Link } from "react-router-dom";
import { Category } from "../../models";

interface Props extends DivProps {
  item: Category;
}

const CategoryCard = ({ item, className, ...props }: Props) => {
  return (
    <div className={`${className} ${styles.category__card}`} {...props}>
      <div className={styles.category__card__container}>
        <Link to={`${item.name}`} className={styles.category__card__link}>
          <img
            src={item.thumbnail}
            alt={item.title}
            className={styles.category__card__thumbnail}
          />
          <div className={styles.category__card__title__container}>
            <p className={styles.category__card__title}>{item.title}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
