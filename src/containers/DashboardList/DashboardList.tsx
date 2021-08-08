import React, { useState } from "react";
import { DivProps } from "react-html-props";
import styles from "./DashboardList.module.scss";
import { strings } from "../../data";
import ThumbnailPlaceholder from "../../assets/images/product-placeholder.png";
import { Icon } from "../../components";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { roots } from "../../routings";
import { Product } from "../../models";
import { format } from "date-fns";
import DeletePostDialog from "../DeletePostDialog/DeletePostDialog";
import { userActions, productsActions } from "../../redux/slices";
import { useAppDispatch } from "../../hooks";

interface Props extends DivProps {
  items: Product[];
}

const DashboardList = ({ items, className, ...props }: Props) => {
  const contents = strings.dashboard;

  const dispatch = useAppDispatch();

  const [focusItem, setFocusItem] = useState<Product | undefined>(undefined);
  const [deleteDialog, setDeleteDialog] = useState(false);

  const columns = [
    contents.table.stt,
    contents.table.image,
    contents.table.name,
    contents.table.category,
    contents.table.price,
    contents.table.datePost,
    contents.table.status,
    contents.table.action
  ];

  const renderHeader = (
    <tr className={styles.dashboard__table__header}>
      {columns.map((column) => (
        <th key={column} className={styles.header}>
          {column}
        </th>
      ))}
    </tr>
  );

  const renderRows = items.map((item, index) => (
    <tr className={styles.dashboard__table__data} key={item.id}>
      <td className={styles.data}>
        {(index + 1).toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false
        })}
      </td>
      <td className={styles.data}>
        <img
          src={item.images.length ? item.images[0] : ThumbnailPlaceholder}
          className={styles.dashboard__thumbnail}
        />
      </td>
      <td className={styles.data}>{item.name}</td>
      <td className={styles.data}>{item.category}</td>
      <td className={styles.data}>
        {item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ
      </td>
      <td className={styles.data}>
        {format(new Date(item.time), "dd/MM/yyyy HH:mm")}
      </td>
      <td className={styles.data}>{item.state}</td>
      <td className={styles.data}>
        <div className={styles.actions__container}>
          <Link to={roots.edit}>
            <button className={styles.action__edit}>
              <Icon icon={MdEdit} className={styles.icon__edit} />
            </button>
          </Link>
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
    <div className={`${styles.dashboard} ${className}`} {...props}>
      <DeletePostDialog
        open={deleteDialog}
        onConfirm={() => {
          if (focusItem) {
            dispatch(userActions.deletePostProduct(focusItem));
            dispatch(productsActions.deleteProduct(focusItem));
          }
          setDeleteDialog(false);
        }}
        onCancel={() => setDeleteDialog(false)}
      />
      <div className={styles.dashboard__container}>
        <h1 className={styles.dashboard__title}>{contents.title}</h1>
        <hr className={styles.hr} />
        <div className={styles.dashboard__list__container}>
          {items.length ? (
            <div className={styles.table__overflow}>
              <table className={styles.dashboard__table}>
                {renderHeader}
                {renderRows}
              </table>
            </div>
          ) : (
            <p className={styles.dashboard__list__empty}>{contents.empty}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardList;
