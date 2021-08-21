import React, { useState } from "react";
import { DivProps } from "react-html-props";
import { Product } from "../../models";
import styles from "./CartList.module.scss";
import { strings } from "../../data";
import Panel from "../Panel/Panel";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { Routes } from "../../routings";
import ThumbnailPlaceholder from "../../assets/images/product-placeholder.png";
import { Icon } from "../../components";
import { FaTrashAlt } from "react-icons/fa";
import DeleteCartDialog from "../DeleteCartDialog/DeleteCartDialog";
import { cartActions } from "../../redux/slices";
import { QuantityInputCart } from "../../components";

interface Props extends DivProps {
  items: Product[];
}

const CartList = ({ items, className, ...props }: Props) => {
  const contents = strings.cart;

  const dispatch = useAppDispatch();

  const history = useHistory();

  const [focusItem, setFocusItem] = useState<Product | undefined>(undefined);
  const [deleteDialog, setDeleteDialog] = useState(false);

  const columns = [
    contents.table.stt,
    contents.table.image,
    contents.table.name,
    contents.table.price,
    contents.table.quantity,
    contents.table.action
  ];

  const renderHeader = (
    <tr className={styles.cart__table__header}>
      {columns.map((column) => (
        <th key={column} className={styles.header}>
          {column}
        </th>
      ))}
    </tr>
  );

  const navigateProduct = (item: Product) =>
    history.push(Routes.PRODUCT.replace(":id", item.id));

  const renderRows = items.map((item, index) => (
    <tr className={styles.cart__table__data} key={item.id}>
      <td className={styles.data} onClick={() => navigateProduct(item)}>
        {(index + 1).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false
        })}
      </td>
      <td className={styles.data} onClick={() => navigateProduct(item)}>
        <img
          src={item.images.length ? item.images[0] : ThumbnailPlaceholder}
          className={styles.cart__thumbnail}
        />
      </td>
      <td className={styles.data} onClick={() => navigateProduct(item)}>
        {item.name}
      </td>
      <td className={styles.data} onClick={() => navigateProduct(item)}>
        {item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ
      </td>
      <td className={styles.data}>
        <QuantityInputCart
          start={item.quantity}
          min={1}
          max={10}
          onQuantityChange={(num: number) => {
            if (item.quantity)
              dispatch(
                cartActions.updateItemToCart({
                  product: item,
                  quantity: -item.quantity + num
                })
              );
          }}
        />
      </td>

      <td className={styles.data}>
        <div className={styles.actions__container}>
          <button
            className={styles.action__delete}
            onClick={() => {
              setFocusItem(item);
              setDeleteDialog(true);
            }}
          >
            <Icon icon={FaTrashAlt} className={styles.icon__delete} />
          </button>
        </div>
      </td>
    </tr>
  ));

  return (
    <div className={`${styles.cart} ${className}`} {...props}>
      <DeleteCartDialog
        open={deleteDialog}
        onConfirm={() => {
          if (focusItem && focusItem.quantity) {
            dispatch(
              cartActions.updateItemToCart({
                product: focusItem,
                quantity: -focusItem.quantity
              })
            );
          }
          setDeleteDialog(false);
        }}
        onCancel={() => setDeleteDialog(false)}
      />
      <Panel className={styles.cart__container} title={contents.title}>
        <div className={styles.cart__list__container}>
          {items.length ? (
            <div className={styles.table__overflow}>
              <table className={styles.cart__table}>
                {renderHeader}
                {renderRows}
              </table>
            </div>
          ) : (
            <p className={styles.cart__list__empty}>{contents.empty}</p>
          )}
        </div>
      </Panel>
    </div>
  );
};

export default CartList;
