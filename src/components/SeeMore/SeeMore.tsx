import React from "react";
import { ButtonProps } from "react-html-props";
import { strings } from "../../data";
import styles from "./SeeMore.module.scss";

interface Props extends ButtonProps {}

const SeeMore = ({ className, ...props }: Props) => {
  return (
    <button className={`${styles.seemore__button} ${className}`} {...props}>
      {strings.seeMore}
    </button>
  );
};

export default SeeMore;
