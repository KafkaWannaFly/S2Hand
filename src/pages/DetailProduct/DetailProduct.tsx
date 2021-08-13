import React, { useState } from "react";
import styles from "./DetailProduct.module.scss";
import { DivProps } from "react-html-props";
import { useAppSelector } from "../../hooks";
import { useEffect } from "react";
import Panel from "../../containers/Panel/Panel";
import { strings } from "../../data";
import { Product } from "../../models";
import { useParams } from "react-router-dom";
import { Icon } from "../../components";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { getTimeDuration } from "../../utils";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoBagAdd } from "react-icons/io5";
import { ImagesSlider } from "../../containers";

interface Props extends DivProps {}

interface ParamProps {
  id: string;
}

const DetailProduct = ({ className, ...props }: Props) => {
  const contents = strings.product;

  const [bookmark, setBookmark] = useState(false);

  const { id } = useParams<ParamProps>();

  const products = useAppSelector((state) => state.products);

  const [product, setProduct] = useState<Product | undefined>(undefined);
  if (!product?.duration && product?.time)
    product.duration = getTimeDuration(new Date(product.time), new Date());

  useEffect(() => {
    window.scrollTo(0, 0);
    if (products.length) setProduct(products.find((item) => item.id === id));
  }, [products]);

  return (
    <div className={`${styles.detail__product} ${className}`} {...props}>
      <div className={styles.detail__product__container}>
        {product ? (
          <>
            <Panel
              className={styles.general__container}
              title={contents.generalSession.title}
            >
              <div className={styles.general__content__container}>
                <div className={styles.images}>
                  <ImagesSlider
                    items={product.images}
                    className={styles.images__slider}
                  />
                </div>
                <div className={styles.general__content}>
                  <button
                    className={styles.bookmark}
                    onClick={() => setBookmark(!bookmark)}
                  >
                    {bookmark ? (
                      <Icon
                        icon={BsBookmarkFill}
                        className={styles.bookmark__icon}
                      />
                    ) : (
                      <Icon
                        icon={BsBookmark}
                        className={styles.bookmark__icon}
                      />
                    )}
                  </button>
                  <p className={styles.name}>{product.name}</p>
                  <p
                    className={styles.category}
                  >{`${contents.generalSession.fields.category.title}: ${product.category}`}</p>
                  <p className={styles.date}>{`${
                    contents.generalSession.fields.date.title
                  }: ${format(new Date(product.time), "dd, MMMM, yyyy", {
                    locale: vi
                  })}`}</p>
                  <p className={styles.duration}>{product.duration}</p>
                  <p className={styles.price}>{`${parseInt(
                    product.price
                  ).toLocaleString("da-DK")} đ`}</p>

                  <div className={styles.user__container}>
                    <Icon
                      icon={IoPersonCircleSharp}
                      className={styles.avatar}
                    />
                    <div className={styles.right}>
                      <p className={styles.user__name}>
                        {product.author?.name
                          ? product.author.name
                          : contents.generalSession.fields.user.name}
                      </p>
                      <p className={styles.num__posted}>{`${
                        contents.generalSession.fields.user.posted
                      }: ${
                        product.author?.postedItems?.length
                          ? product.author?.postedItems?.length
                          : 1
                      }`}</p>
                    </div>
                  </div>

                  <div className={styles.actions__container}>
                    <button className={styles.add__to__cart}>
                      <Icon icon={IoBagAdd} className={styles.cart__icon} />
                      {contents.actions.addToCart}
                    </button>
                    <button className={styles.buy__now}>
                      {contents.actions.buyNow}
                    </button>
                  </div>
                </div>
              </div>
            </Panel>

            <Panel
              className={styles.detail__container}
              title={contents.detailSession.title}
            >
              <div className={styles.detail__content__container}>
                <div className={styles.detail__row}>
                  <p className={styles.detail__title}>
                    {`${contents.detailSession.fields.newPercentage.title}:`}
                  </p>
                  <p className={styles.detail__content}>{`${
                    product.newPercentage
                      ? product.newPercentage
                      : contents.detailSession.fields.newPercentage.content
                  } %`}</p>
                </div>

                <div className={styles.detail__row}>
                  <p className={styles.detail__title}>
                    {`${contents.detailSession.fields.state.title}:`}
                  </p>
                  <p className={styles.detail__content}>
                    {product.state
                      ? product.state
                      : contents.detailSession.fields.state.content}
                  </p>
                </div>

                <div className={styles.detail__row}>
                  <p className={styles.detail__title}>
                    {`${contents.detailSession.fields.address.title}:`}
                  </p>
                  <p className={styles.detail__content}>{`${
                    product.street ||
                    product.ward ||
                    product.district ||
                    product.city
                      ? `${product.street ? product.street : ""}  ${
                          product.ward ? product.ward : ""
                        } ${product.district ? product.district : ""}  ${
                          product.city ? product.city : ""
                        }`
                      : contents.detailSession.fields.address.content
                  }`}</p>
                </div>
              </div>
            </Panel>

            <Panel
              className={styles.description__container}
              title={contents.description.title}
            >
              <div className={styles.description__content__container}>
                <p className={styles.description}>
                  {product.description
                    ? product.description
                    : contents.description.content}
                </p>
              </div>
            </Panel>
          </>
        ) : (
          <div className={styles.empty__container}>
            <p className={styles.empty__text}>{contents.empty}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailProduct;
