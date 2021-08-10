import React, { useState, useEffect } from "react";
import { CategoryPanel } from "../../containers";
import styles from "./Home.module.scss";
import { SeeMore } from "../../components";
import { DivProps } from "react-html-props";
import { ProductPanel } from "../../containers";
import { useAppSelector } from "../../hooks";
import { Product } from "../../models";

interface Props extends DivProps {}

const CAPACITY = 24;

const Home = ({ className, ...props }: Props) => {
  const categories = useAppSelector((state) => state.categories);
  const products = useAppSelector((state) => state.products);

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
        <CategoryPanel className={styles.category__panel} items={categories} />
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

export default Home;
