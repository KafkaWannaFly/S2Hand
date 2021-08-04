import React from "react";
import styles from "./Dashboard.module.scss";
import { DivProps } from "react-html-props";
import { DashboardList } from "../../containers";

interface Props extends DivProps {}

const Dashboard = (props: Props) => {
  return (
    <div className={`${styles.dashboard} ${props.className}`}>
      <div className={styles.dashboard__container}>
        <DashboardList className={styles.dashboard__list} />
      </div>
    </div>
  );
};

export default Dashboard;
