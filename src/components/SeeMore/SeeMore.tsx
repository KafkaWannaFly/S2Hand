import React from "react";
import { DivProps } from "react-html-props";
import { strings } from "../../data";
import styles from "./SeeMore.module.scss";

interface Props extends DivProps {}

const SeeMore = (props: Props) => {
  return (
    <button className={`${styles.seemore__button} ${props.className}`}>
      {strings.seeMore}
    </button>
  );
};

export default SeeMore;
