import React from "react";
import { CategoryCard } from "../../components";
import { DivProps } from "react-html-props";
import styles from "./CategoryPanel.module.scss";
import { strings } from "../../data";
import { Category } from "../../models";
import Panel from "../Panel/Panel";

interface Props extends DivProps {
  items: Category[];
}

const CategoryPanel = ({ items, className, ...props }: Props) => {
  const contents = strings.categoryPanel;

  return (
    <Panel title={contents.title} className={styles.category__panel}>
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
    </Panel>
  );
};

export default CategoryPanel;
