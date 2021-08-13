import React from "react";
import styles from "./Dashboard.module.scss";
import { DivProps } from "react-html-props";
import { DashboardList } from "../../containers";
import { useAppSelector } from "../../hooks";
import { useEffect } from "react";

interface Props extends DivProps {}

const Dashboard = (props: Props) => {
  const postedProducts = useAppSelector((state) => state.user.postedItems);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postedProducts]);

  return (
    <div className={`${styles.dashboard} ${props.className}`}>
      <div className={styles.dashboard__container}>
        <DashboardList
          className={styles.dashboard__list}
          items={postedProducts ? postedProducts : []}
        />
      </div>
    </div>
  );
};

export default Dashboard;
