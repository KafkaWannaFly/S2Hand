import React from "react";

import { DivProps } from "react-html-props";
import styles from "./ProductPanel.module.scss";
import { strings } from "../../data";

interface Props extends DivProps {}

const ProductPanel = (props: Props) => {
  const title = strings.productPanelTitle;

  return (
    <div className={`${styles.product__panel} ${props.className}`}>
      <div className={styles.product__panel__container}>
        <h1 className={styles.product__panel__title}>{title}</h1>
        <hr className={styles.hr} />
        <div className={styles.product__panel__list__container}></div>
      </div>
    </div>
  );
};

export default ProductPanel;
