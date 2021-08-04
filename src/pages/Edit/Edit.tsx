import React from "react";
import styles from "./Edit.module.scss";
import { DivProps } from "react-html-props";
import { EditForm } from "../../containers";

interface Props extends DivProps {}

const Edit = (props: Props) => {
  return (
    <div className={`${styles.edit} ${props.className}`}>
      <div className={styles.edit__container}>
        <EditForm className={styles.edit__form} />
      </div>
    </div>
  );
};

export default Edit;
