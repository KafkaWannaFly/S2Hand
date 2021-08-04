import React from "react";
import { DivProps } from "react-html-props";
import styles from "./DashboardList.module.scss";
import { strings } from "../../data";
import ThumbnailPlaceholder from "../../assets/images/product-placeholder.png";
import { Icon } from "../../components";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { roots } from "../../routings";

interface Props extends DivProps {}

const DashboardList = (props: Props) => {
  const contents = strings.dashboard;
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

  const renderData = (
    <tr className={styles.dashboard__table__data}>
      <td className={styles.data}>01</td>
      <td className={styles.data}>
        <img
          src={ThumbnailPlaceholder}
          className={styles.dashboard__thumbnail}
        />
      </td>
      <td className={styles.data}>Name Product</td>
      <td className={styles.data}>Category</td>
      <td className={styles.data}>150.000</td>
      <td className={styles.data}>12/07/2021</td>
      <td className={styles.data}>Status</td>
      <td className={styles.data}>
        <div className={styles.actions__container}>
          <Link to={roots.edit}>
            <button className={styles.action__edit}>
              <Icon icon={MdEdit} className={styles.icon__edit} />
            </button>
          </Link>
          <button className={styles.action__delete}>
            <Icon icon={FaTrashAlt} className={styles.icon__delete} />
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className={`${styles.dashboard} ${props.className}`}>
      <div className={styles.dashboard__container}>
        <h1 className={styles.dashboard__title}>{contents.title}</h1>
        <hr className={styles.hr} />
        <div className={styles.dashboard__list__container}>
          <div className={styles.table__overflow}>
            <table className={styles.dashboard__table}>
              {renderHeader}

              {renderData}
              {renderData}
              {renderData}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardList;
