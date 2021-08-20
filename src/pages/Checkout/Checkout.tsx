import React from "react";
import styles from "./Checkout.module.scss";
import { DivProps } from "react-html-props";
import { CheckoutForm } from "../../containers";

interface Props extends DivProps {}

const Checkout = (props: Props) => {
  return (
    <div className={`${styles.checkout} ${props.className}`}>
      <div className={styles.checkout__container}>
        <CheckoutForm className={styles.checkout__form} />
      </div>
    </div>
  );
};

export default Checkout;
