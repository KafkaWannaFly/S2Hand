import React, { useState, useEffect } from "react";
import styles from "./CategoryDetail.module.scss";
import { SeeMore } from "../../components";
import { DivProps } from "react-html-props";
import { ProductPanel } from "../../containers";
import { useAppSelector } from "../../hooks";
import { Product } from "../../models";

interface Props extends DivProps {}

const CAPACITY = 24;

const CategoryDetail = ({ className, ...props }: Props) => {
  let products = useAppSelector((state) => state.products);
  const path = window.location.pathname;
  switch (path) {
    case "/sach":
      products = products.filter((product) => product.category === "Sách");
      break;
    case "/dodunghoctap":
      products = products.filter(
        (product) => product.category === "Dụng cụ học tập"
      );
      break;
    case "/quanao":
      products = products.filter((product) => product.category === "Quần áo");
      break;
    case "/dodientu":
      products = products.filter(
        (product) => product.category === "Đồ điện tử"
      );
      break;
    case "/dogiadung":
      products = products.filter(
        (product) => product.category === "Đồ gia dụng"
      );
      break;
    case "/khac":
      products = products.filter((product) => product.category === "Khác");
      break;
  }

  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [seeMore, setSeeMore] = useState(0);

  useEffect(() => {
    // setDisplayProducts(products.slice(0, CAPACITY));
    window.scrollTo(0, 0);
    setSeeMore(1);
  }, [products]);

  useEffect(() => {
    setDisplayProducts(products.slice(0, CAPACITY * seeMore));
  }, [seeMore, products]);

  return (
    <div className={`${styles.home} ${className}`} {...props}>
      <div className={styles.home__container}>
        <ProductPanel
          className={styles.product__panel}
          items={displayProducts}
        />
        {products.length > displayProducts.length ? (
          <SeeMore
            className={styles.seemore__btn}
            onClick={() => setSeeMore(seeMore + 1)}
          />
        ) : undefined}
      </div>
    </div>
  );
};

export default CategoryDetail;
