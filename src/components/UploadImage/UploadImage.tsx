import React, { useRef, useState, useEffect } from "react";
import { DivProps } from "react-html-props";
import { IoIosImages } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import Icon from "../Icon/Icon";
import styles from "./UploadImage.module.scss";

interface Props extends DivProps {
  onUploadChange: Function;
  maximumSize?: number;
}

const UploadImage = ({
  onUploadChange,
  maximumSize,
  className,
  ...props
}: Props) => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [filePath, setFilePath] = useState<string>("");
  const uploadField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onUploadChange(file);
  });

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
              onChange={(event) => {
                const files = event.target.files;
                if (files) {
                  setFile(files[0]);
                  console.log(files[0]);
                  setFilePath(URL.createObjectURL(files[0]));
                }
              }}
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
            <img src={filePath} className={styles.img__preview} />
            <div
              className={styles.img__preview__hover}
              onClick={() => {
                setFile(undefined);
                setFilePath("");
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
