import React from "react";
import { CategoryItem } from "../../components";
import { DivProps } from "react-html-props";
import Styles from "./CategoryPanel.module.scss";
import { categoryItems } from "../../ui/data";
import { strings } from "../../data";

interface Props extends DivProps {}

const CategoryPanel: React.FC<Props> = (props) => {
  const title = strings.categoryPanelTitle;

  const Categories = categoryItems.map(({ thumbnail, label, to, name }) => {
    return (
      <CategoryItem
        key={name}
        thumbnail={thumbnail}
        label={label}
        to={to}
        name={name}
        className={Styles.category__list__item}
      />
    );
  });

  return (
    <div className={`${Styles.category__panel} ${props.className}`}>
      <div className={Styles.category__panel__container}>
        <h1 className={Styles.category__panel__title}>{title}</h1>
        <hr className={Styles.hr} />
        <div className={Styles.category__list__container}>{Categories}</div>
      </div>
    </div>
  );
};

export default CategoryPanel;
