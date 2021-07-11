import React, { useState } from "react";
import styles from "./ProductItem.module.scss";
import { DivProps } from "react-html-props";
import { Link } from "react-router-dom";
import { Product } from "../../models";
import Icon from "../Icon/Icon";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

interface Props extends DivProps, Product {}

const ProductItem = (props: Props) => {
  const [bookmark, setBookmark] = useState(false);

  return (
    <div className={`${styles.product__item} ${props.className}`}>
      <div className={styles.product__item__container}>
        <Link to="/" className={styles.product__item__link}>
          <img
            src={props.thumbnail}
            alt=""
            className={styles.product__item__thumbnail}
          />
          <p className={styles.product__item__name}>{props.name}</p>
          <div className={styles.product__item__des}>
            <div className={styles.product__item__price__container}>
              <p className={styles.product__item__price}>{props.price}</p>
              <button
                className={styles.product__item__bookmark}
                onClick={() => setBookmark(!bookmark)}
              >
                {bookmark ? (
                  <Icon
                    icon={BsBookmarkFill}
                    className={styles.bookmark__icon}
                  />
                ) : (
                  <Icon icon={BsBookmark} className={styles.bookmark__icon} />
                )}
              </button>
            </div>
            <div className={styles.product__item__location__container}>
              <Icon icon={MdLocationOn} className={styles.location__icon} />
              <p className={styles.product__item__location}>{props.location}</p>
            </div>
            <p className={styles.product__item__duration}>{props.duration}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
