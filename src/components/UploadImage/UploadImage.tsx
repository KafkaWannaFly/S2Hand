import React, { useRef, useState, useEffect } from "react";
import { DivProps } from "react-html-props";
import { IoIosImages } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import Icon from "../Icon/Icon";
import styles from "./UploadImage.module.scss";

interface Props extends DivProps {
  onUpload: Function;
  onRemove: Function;
  maximumSize?: number;
}

const UploadImage = ({ onUpload, onRemove, className, ...props }: Props) => {
  const [file, setFile] = useState<string>("");
  const uploadField = useRef<HTMLInputElement>(null);

  const readImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const FR = new FileReader();
      FR.addEventListener("load", (e) => {
        setFile(e.target?.result as string);
      });
      FR.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (file) onUpload(file);
  }, [file]);

  return (
    <div className={`${styles.upload__image} ${className}`} {...props}>
      <div className={styles.upload__image__container}>
        {!file ? (
          <div
            className={styles.upload__form}
            onClick={() => uploadField.current?.click()}
          >
            <input
              id="upload"
              ref={uploadField}
              type="file"
              onChange={readImageFile}
              accept="image/*"
              className={styles.upload__image__field}
            />
            <Icon
              icon={IoIosImages}
              className={styles.upload__image__icon__placeholder}
            />
          </div>
        ) : (
          <div className={styles.upload__display}>
            <img src={file} className={styles.img__preview} />
            <div
              className={styles.img__preview__hover}
              onClick={() => {
                onRemove(file);
                setFile("");
              }}
            >
              <Icon
                icon={TiDelete}
                className={styles.upload__image__icon__remove}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadImage;
