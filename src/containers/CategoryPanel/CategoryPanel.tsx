import React from "react";
import { CategoryCard } from "../../components";
import { DivProps } from "react-html-props";
import styles from "./CategoryPanel.module.scss";
import { strings } from "../../data";
import { Category } from "../../models";

interface Props extends DivProps {
  items: Category[];
}

const CategoryPanel = ({ items, className, ...props }: Props) => {
  const contents = strings.categoryPanel;

  return (
    <div className={`${styles.category__panel} ${className}`} {...props}>
      <div className={styles.category__panel__container}>
        <h1 className={styles.category__panel__title}>{contents.title}</h1>
        <hr className={styles.hr} />
        <div className={styles.category__list__container}>
          <div className={styles.category__list__overflow}>
            {items.map((item) => (
              <CategoryCard
                key={item.id}
                item={item}
                className={styles.category__list__item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPanel;
