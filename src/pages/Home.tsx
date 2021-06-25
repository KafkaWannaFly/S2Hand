import React from "react";
import { CategoryPanel } from "../components";
import Styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={Styles.home}>
      <div className={Styles.home__container}>
        <CategoryPanel />
        <h1>Home Page</h1>
      </div>
    </div>
  );
};
