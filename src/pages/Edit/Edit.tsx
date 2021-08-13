import React from "react";
import styles from "./Edit.module.scss";
import { DivProps } from "react-html-props";
import { EditForm } from "../../containers";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { useState } from "react";
import { Product } from "../../models";
import { useEffect } from "react";
import { strings } from "../../data";

interface Props extends DivProps {}

interface EditParams {
  id: string;
}

const Edit = (props: Props) => {
  const contents = strings.editForm;

  const { id } = useParams<EditParams>();

  const [item, setItem] = useState<Product | undefined>(undefined);

  const postedProducts = useAppSelector((state) => state.user.postedItems);
  useEffect(() => {
    const product = postedProducts?.find((item) => item.id === id);
    if (product) setItem(JSON.parse(JSON.stringify(product)));
  }, [postedProducts]);

  return (
    <div className={`${styles.edit} ${props.className}`}>
      <div className={styles.edit__container}>
        {item ? (
          <EditForm className={styles.edit__form} item={item} />
        ) : (
          <div className={styles.empty__container}>
            <p className={styles.empty__text}>{contents.empty}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Edit;
