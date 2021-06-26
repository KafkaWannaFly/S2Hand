import React from "react";
import { CategoryItem } from "./CategoryItem";
import { DivProps } from "react-html-props";
import Styles from "./CategoryPanel.module.scss";
import { CategoryList } from "../res";
import { Strings } from "../res";

type Props = DivProps;

export const CategoryPanel: React.FC<Props> = (props) => {
  const title = Strings.categoryPanelTitle;

  const Categories = CategoryList.map(({ thumbnail, title, to, name }) => {
    return (
      <CategoryItem
        key={name}
        thumbnail={thumbnail}
        title={title}
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
