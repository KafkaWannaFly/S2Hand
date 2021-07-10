import React from "react";
import { CategoryPanel } from "../../containers";
import styles from "./Home.module.scss";
import { SeeMore } from "../../components";
import { DivProps } from "react-html-props";

interface Props extends DivProps {}

const Home = (props: Props) => {
  return (
    <div className={`${styles.home} ${props.className}`}>
      <div className={styles.home__container}>
        <CategoryPanel className={styles.category__panel} />
        <SeeMore className={styles.seemore__btn} />
      </div>
    </div>
  );
};

export default Home;
