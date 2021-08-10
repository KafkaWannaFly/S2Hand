import React from "react";
import { DivProps } from "react-html-props";
import styles from "./ProductPanel.module.scss";
import { strings } from "../../data";
import { Product } from "../../models";
import { ProductCard } from "../../components";
import { getTimeDuration } from "../../utils";
import Panel from "../Panel/Panel";

interface Props extends DivProps {
  items: Product[];
}

const ProductPanel = ({ items, className, ...props }: Props) => {
  const contents = strings.productPanel;

  items = items.map((item) => {
    if (!item.thumbnail && item.images?.length) item.thumbnail = item.images[0];
    if (!item.duration && item.time)
      item.duration = getTimeDuration(new Date(item.time), new Date());
    return item;
  });

  return (
    <Panel
      className={`${styles.product__panel} ${className}`}
      title={contents.title}
      {...props}
    >
      <div className={styles.product__list__container}>
        {items.length ? (
          items.map((item) => (
            <ProductCard
              item={item}
              className={styles.product__list__item}
              key={item.id}
            />
          ))
        ) : (
          <p className={styles.product__list__empty}>{contents.empty}</p>
        )}
      </div>
    </Panel>
  );
};

export default ProductPanel;
