import React, { useState, useEffect } from "react";
import { DivProps } from "react-html-props";
import styles from "./QuantityInput.Cart.module.scss";
import Icon from "../Icon/Icon";
import { MdAdd, MdRemove } from "react-icons/md";

interface Props extends DivProps {
  start?: number;
  step?: number;
  min?: number;
  max?: number;
  onQuantityChange: Function;
}

const QuantityInputCart = ({
  start = 0,
  step = 1,
  min = 0,
  max = 10,
  onQuantityChange,
  className,
  ...props
}: Props) => {
  const [quantity, setQuantity] = useState(start);
  useEffect(() => {
    setQuantity(start);
  }, [start]);

  useEffect(() => {
    onQuantityChange(quantity);
  }, [quantity]);

  const onIncrease = () => {
    if (quantity < max) setQuantity(quantity + step);
  };

  const onDecrease = () => {
    if (quantity > min) setQuantity(quantity - step);
  };

  return (
    <div className={`${styles.quantity} ${className}`} {...props}>
      <div className={styles.quantity__container}>
        <button className={styles.btn__remove} onClick={onDecrease}>
          <Icon icon={MdRemove} className={styles.icon__remove} />
        </button>
        <input
          type="text"
          className={styles.quantity__input}
          value={quantity}
          readOnly
        />
        <button className={styles.btn__add} onClick={onIncrease}>
          <Icon icon={MdAdd} className={styles.icon__add} />
        </button>
      </div>
    </div>
  );
};

export default QuantityInputCart;
