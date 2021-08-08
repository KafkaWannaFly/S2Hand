import React from "react";
import { DivProps } from "react-html-props";
import styles from "./EditForm.module.scss";
import { strings } from "../../data";
import Select, { StylesConfig } from "react-select";
import { UploadImage } from "../../components";

interface Props extends DivProps {}

const EditForm = (props: Props) => {
  const contents = strings.editForm;
  const categories = [
    { value: "book", label: "Sách" },
    { value: "schoolSupply", label: "Đồ dùng học tập" },
    { value: "houseHold", label: "Đồ gia dụng" },
    { value: "personal", label: "Đồ dùng cá nhân" },
    { value: "clothes", label: "Quần áo" },
    { value: "electronic", label: "Đồ điện tử" }
  ];

  const selectStyle: StylesConfig<{ value: string; label: string }, false> = {
    control: (base) => ({
      ...base,
      border: "1px solid #dbdada",
      padding: "0.11rem 0.05rem",
      fontSize: "1rem",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid #dbdada"
      },
      fontFamily: "Montserrat-Regular",
      marginTop: "0.4rem"
    }),
    menu: (base) => ({
      ...base,
      fontFamily: "Montserrat-Regular"
    })
  };

  return (
    <div className={`${styles.edit__form} ${props.className}`}>
      <div className={styles.edit__form__container}>
        <div className={styles.form__session__container}>
          <h1 className={styles.form__session__title}>
            {contents.generalSession.title}
          </h1>
          <hr className={styles.hr} />
          <div className={styles.form__field__container}>
            <div className={styles.double__line__field}>
              <div className={styles.form__field}>
                <label htmlFor="name" className={styles.form__field__label}>
                  {contents.generalSession.fields.name.label}
                </label>
                <br />
                <input
                  type="text"
                  autoComplete="none"
                  placeholder={contents.generalSession.fields.name.placeholder}
                  id="name"
                  name="name"
                  className={styles.form__field__input}
                />
              </div>

              <div className={styles.form__field}>
                <label htmlFor="price" className={styles.form__field__label}>
                  {contents.generalSession.fields.price.label}
                </label>
                <br />
                <input
                  type="text"
                  autoComplete="none"
                  placeholder={contents.generalSession.fields.price.placeholder}
                  id="price"
                  name="price"
                  className={styles.form__field__input}
                />
              </div>
            </div>

            <div className={styles.double__line__field}>
              <div className={styles.form__field}>
                <label htmlFor="category" className={styles.form__field__label}>
                  {contents.generalSession.fields.category.label}
                </label>
                <br />

                <Select
                  options={categories}
                  placeholder={
                    contents.generalSession.fields.category.placeholder
                  }
                  styles={selectStyle}
                />
              </div>

              <div className={styles.form__field}>
                <label htmlFor="status" className={styles.form__field__label}>
                  {contents.generalSession.fields.status.label}
                </label>
                <br />
                <input
                  type="text"
                  autoComplete="none"
                  placeholder={
                    contents.generalSession.fields.status.placeholder
                  }
                  id="status"
                  name="status"
                  className={styles.form__field__input}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.form__session__container}>
          <h1 className={styles.form__session__title}>
            {contents.detailSession.title}
          </h1>
          <hr className={styles.hr} />
          <div className={styles.form__field__container}>
            <div className={styles.form__field}>
              <label htmlFor="describe" className={styles.form__field__label}>
                {contents.detailSession.fields.describe.label}
              </label>
              <br />
              <textarea
                rows={5}
                autoComplete="none"
                placeholder={contents.detailSession.fields.describe.placeholder}
                id="describe"
                name="describe"
                className={styles.form__field__input}
              />
            </div>

            <div className={styles.form__field}>
              <label htmlFor="street" className={styles.form__field__label}>
                {contents.detailSession.fields.address.label}
              </label>
              <br />
              <input
                type="text"
                autoComplete="none"
                placeholder={contents.detailSession.fields.address.street}
                id="street"
                name="street"
                className={styles.form__field__input}
              />

              <div className={styles.form__field__address}>
                <div className={styles.form__field}>
                  <Select
                    options={[]}
                    placeholder={contents.detailSession.fields.address.city}
                    styles={selectStyle}
                  />
                </div>

                <div className={styles.form__field}>
                  <Select
                    options={[]}
                    placeholder={contents.detailSession.fields.address.district}
                    styles={selectStyle}
                  />
                </div>

                <div className={styles.form__field}>
                  <Select
                    options={[]}
                    placeholder={contents.detailSession.fields.address.ward}
                    styles={selectStyle}
                  />
                </div>
              </div>
            </div>

            <div className={styles.form__field}>
              <label className={styles.form__field__label}>
                {contents.detailSession.fields.images.label}
              </label>
              <br />
              <p className={styles.note__img__upload}>
                {contents.detailSession.fields.images.note}
              </p>
              <div className={styles.form__upload__container}>
                {/* <UploadImage
                  onUploadChange={() => {}}
                  className={styles.upload__field}
                />
                <UploadImage
                  onUploadChange={() => {}}
                  className={styles.upload__field}
                />
                <UploadImage
                  onUploadChange={() => {}}
                  className={styles.upload__field}
                />
                <UploadImage
                  onUploadChange={() => {}}
                  className={styles.upload__field}
                />
                <UploadImage
                  onUploadChange={() => {}}
                  className={styles.upload__field}
                /> */}
              </div>
            </div>
          </div>
        </div>

        <p className={styles.note__form}>{contents.note}</p>
        <div className={styles.form__actions__container}>
          <button className={styles.form__action__save}>
            {contents.actions.save}
          </button>
          <button className={styles.form__action__cancel}>
            {contents.actions.cancel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
