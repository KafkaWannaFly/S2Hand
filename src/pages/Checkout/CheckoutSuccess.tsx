import React from "react";
import styles from "./CheckoutSuccess.module.scss";
import { DivProps } from "react-html-props";
import { useEffect, useState } from "react";
import { strings } from "../../data";
import { Icon } from "../../components";
import { FaCheck } from "react-icons/fa";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { useHistory } from "react-router-dom";
import { Routes } from "../../routings";
import { cartActions } from "../../redux/slices";

interface Props extends DivProps {}

const CheckoutSuccess = (props: Props) => {
  const contents = strings.checkout.success;

  const cart = useAppSelector((state) => state.cart);

  const [price] = useState(cart.totalPrice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(cartActions.resetCart());
  }, []);

  const history = useHistory();

  return (
    <div className={`${styles.checkout__success} ${props.className}`}>
      <div className={styles.checkout__success__container}>
        <div className={styles.checkout__success__body}>
          <h3 className={styles.title}>{contents.title}</h3>
          <Icon icon={FaCheck} className={styles.icon} />
          <div className={styles.des}>
            <p className={styles.des__title}>{contents.des.title}</p>
            <div className={styles.cart__des}>
              <p className={styles.price__label}>{contents.des.price}</p>
              <p className={styles.price__value}>
                {price.toLocaleString("da-DK")}đ
              </p>
            </div>
          </div>

          <div className={styles.actions__btn}>
            <button
              className={styles.continue__btn}
              onClick={() => history.replace(Routes.HOME)}
            >
              {contents.action.seemore}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
