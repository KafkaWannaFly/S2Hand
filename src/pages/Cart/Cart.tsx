import React from "react";
import styles from "./Cart.module.scss";
import { DivProps } from "react-html-props";
import { useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { CartList } from "../../containers";
import { strings } from "../../data";

interface Props extends DivProps {}

const Cart = (props: Props) => {
  const contents = strings.cart;

  const cart = useAppSelector((state) => state.cart);
  let numItems = 0;
  cart.items.forEach((item) =>
    item.quantity ? (numItems += item.quantity) : 0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cart]);

  return (
    <div className={`${styles.cart} ${props.className}`}>
      <div className={styles.cart__container}>
        <CartList className={styles.cart__list} items={cart.items} />
        <div className={styles.cart__info}>
          <div className={styles.num__container}>
            <p className={styles.num__label}>{`${contents.numItems}:`}</p>
            <p className={styles.num}>{numItems}</p>
          </div>

          <div className={styles.total__container}>
            <p className={styles.total__label}>{`${contents.total}:`}</p>
            <p className={styles.total}>{`${cart.totalPrice.toLocaleString(
              "da-DK"
            )} đ`}</p>
          </div>
        </div>
        {!!numItems && (
          <div className={styles.cart__actions}>
            <button className={styles.checkout__button}>
              {contents.actions.checkout}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
