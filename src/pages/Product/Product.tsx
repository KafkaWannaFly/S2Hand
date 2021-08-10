import React from "react";
import styles from "./Product.module.scss";
import { DivProps } from "react-html-props";
import { useAppSelector } from "../../hooks";
import { useEffect } from "react";

interface Props extends DivProps {}

const Product = ({ className, ...props }: Props) => {
  const products = useAppSelector((state) => state.products);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [products]);

  return (
    <div className={`${styles.product} ${className}`} {...props}>
      <div className={styles.product__container}>Product</div>
    </div>
  );
};

export default Product;
