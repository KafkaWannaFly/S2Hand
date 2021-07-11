import React from "react";
import { DivProps } from "react-html-props";
import styles from "./HomeProductPanel.module.scss";
import { strings } from "../../data";
import { ProductItem } from "../../components";
import { products } from "../../data";

interface Props extends DivProps {}

const HomeProductPanel = (props: Props) => {
  const title = strings.productPanelTitle;

  const Products = products.map(
    ({ name, thumbnail, price, location, duration }) => {
      return (
        <ProductItem
          className={styles.product__list__item}
          thumbnail={thumbnail}
          name={name}
          key={name}
          price={price}
          location={location}
          duration={duration}
        />
      );
    }
  );

  return (
    <div className={`${styles.product__panel} ${props.className}`}>
      <div className={styles.product__panel__container}>
        <h1 className={styles.product__panel__title}>{title}</h1>
        <hr className={styles.hr} />
        <div className={styles.product__list__container}>{Products}</div>
      </div>
    </div>
  );
};

export default HomeProductPanel;
