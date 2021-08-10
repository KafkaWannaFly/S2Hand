import React, { useState } from "react";
import styles from "./ProductCard.module.scss";
import { DivProps } from "react-html-props";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { Product } from "../../models";
import Placeholder from "../../assets/images/product-placeholder.png";
import { Routes } from "../../routings";

interface Props extends DivProps {
  item: Product;
}

const ProductCard = ({ item, className, ...props }: Props) => {
  const [bookmark, setBookmark] = useState(false);

  return (
    <div className={`${styles.product__card} ${className}`} {...props}>
      <div className={styles.product__card__container}>
        <Link
          to={Routes.PRODUCT.replace(":id", item.id)}
          className={styles.product__card__link}
        >
          <img
            src={item.thumbnail ? item.thumbnail : Placeholder}
            alt=""
            className={styles.product__card__thumbnail}
          />
          <p className={styles.product__card__name}>{item.name}</p>
          <div className={styles.product__card__des}>
            <div className={styles.product__card__price__container}>
              <p className={styles.product__card__price}>
                {parseFloat(item.price).toLocaleString("da-DK")}đ
              </p>
              <button
                className={styles.product__card__bookmark}
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
            <div className={styles.product__card__location__container}>
              <Icon icon={MdLocationOn} className={styles.location__icon} />
              <p
                className={styles.product__card__location}
              >{`${item.district} ${item.city}`}</p>
            </div>
            <p className={styles.product__card__duration}>{item.duration}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
