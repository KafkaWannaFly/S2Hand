import React from "react";
import { CategoryItem } from "../../components";
import { DivProps } from "react-html-props";
import styles from "./CategoryPanel.module.scss";
import { categoryItems } from "../../ui/data";
import { strings } from "../../data";

interface Props extends DivProps {}

const CategoryPanel = (props: Props) => {
  const title = strings.categoryPanelTitle;

  const Categories = categoryItems.map(({ thumbnail, label, to, name }) => {
    return (
      <CategoryItem
        key={name}
        thumbnail={thumbnail}
        label={label}
        to={to}
        name={name}
        className={styles.category__list__item}
      />
    );
  });

  return (
    <div className={`${styles.category__panel} ${props.className}`}>
      <div className={styles.category__panel__container}>
        <h1 className={styles.category__panel__title}>{title}</h1>
        <hr className={styles.hr} />
        <div className={styles.category__list__container}>{Categories}</div>
      </div>
    </div>
  );
};

export default CategoryPanel;
