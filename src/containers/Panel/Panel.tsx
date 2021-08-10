import React from "react";
import { DivProps } from "react-html-props";
import styles from "./Panel.module.scss";

interface Props extends DivProps {
  title: string;
}

const Panel = ({ title, className, children, ...props }: Props) => {
  return (
    <div className={`${styles.panel} ${className}`} {...props}>
      <div className={styles.panel__container}>
        <h1 className={styles.panel__title}>{title}</h1>
        <hr className={styles.hr} />
        <div className={styles.panel__content__container}>{children}</div>
      </div>
    </div>
  );
};

export default Panel;
