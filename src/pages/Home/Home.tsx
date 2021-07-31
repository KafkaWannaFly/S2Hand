import React from "react";
import { CategoryPanel } from "../../containers";
import styles from "./Home.module.scss";
import { SeeMore } from "../../components";
import { DivProps } from "react-html-props";
import { HomeProductPanel } from "../../containers";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

interface Props extends DivProps {}

const Home = (props: Props) => {
  const items = useSelector((state: RootState) => state.home);
  console.log(JSON.stringify(items, null, 2));

  const users = useSelector((state: RootState) => state.users);
  console.log(JSON.stringify(users, null, 2));

  return (
    <div className={`${styles.home} ${props.className}`}>
      <div className={styles.home__container}>
        <CategoryPanel className={styles.category__panel} />
        <HomeProductPanel className={styles.product__panel} />
        <SeeMore className={styles.seemore__btn} />
      </div>
    </div>
  );
};

export default Home;
