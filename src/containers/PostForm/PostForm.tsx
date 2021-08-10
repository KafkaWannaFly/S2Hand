import React, { useState, useEffect } from "react";
import { DivProps } from "react-html-props";
import styles from "./PostForm.module.scss";
import { strings } from "../../data";
import Select from "react-select";
import { UploadImage } from "../../components";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { validations } from "../../utils";
import { selectStyle, selectStyleErr } from "../../styles/select";
import { locationsService } from "../../services";
import { CategoryTitle, Product, ProductState } from "../../models";
import { productsActions, userActions } from "../../redux/slices";
import PostSuccessDialog from "../PostSuccessDialog/PostSuccessDialog";
import CancelPostDialog from "../CancelPostDialog/CancelPostDialog";
import { useHistory } from "react-router-dom";
import { Routes } from "../../routings";
import Panel from "../Panel/Panel";

const NUM_IMAGES = 5;

interface FormInput {
  name: string;
  price: number;
  category: string;
  newPercentage: number;
  description: string;
  street: string;
  city: string;
  district: string;
  ward: string;
  images: string[];
}

const initFormInput: FormInput = {
  name: "",
  price: NaN,
  category: "",
  newPercentage: NaN,
  description: "",
  street: "",
  city: "",
  district: "",
  ward: "",
  images: []
};

interface FormValidate {
  errName: boolean;
  errPrice: boolean;
  errCategory: boolean;
  errNewPercentage: boolean;
  errDescription: boolean;
  errStreet: boolean;
  errCity: boolean;
  errDistrict: boolean;
  errWard: boolean;
  errImages: boolean;
}

const initFormValidate: FormValidate = {
  errName: false,
  errPrice: false,
  errCategory: false,
  errNewPercentage: false,
  errDescription: false,
  errStreet: false,
  errCity: false,
  errDistrict: false,
  errWard: false,
  errImages: false
};

interface Props extends DivProps {}

const PostForm = (props: Props) => {
  const contents = strings.postForm;

  const user = useAppSelector((state) => state.user);

  const [formInput, setFormInput] = useState<FormInput>({
    ...initFormInput,
    images: []
  });

  const [formValidate, setFormValidate] =
    useState<FormValidate>(initFormValidate);
  const [formErr, setFormErr] = useState(false);
  useEffect(() => {
    const err = Object.values(formValidate).find((item) => item === true);
    if (err) setFormErr(true);
    else setFormErr(false);
  }, [formValidate]);

  const [dialogSuccess, setDislogSuccess] = useState(false);
  const [dialogCancel, setDialogCancel] = useState(false);

  const dispatch = useAppDispatch();

  const history = useHistory();

  const categories = useAppSelector((state) => state.categories);
  const categoriesInput = categories.map((category) => ({
    value: category.title,
    label: category.title
  }));

  const citiesInput = locationsService.getCities().map((city) => ({
    value: city,
    label: city
  }));

  const districtsInput = locationsService
    .getDistricts(formInput.city)
    .map((district) => ({
      value: district,
      label: district
    }));

  const wardsInput = locationsService
    .getWards(formInput.city, formInput.district)
    .map((ward) => ({
      value: ward,
      label: ward
    }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateResult = validations.validatePostForm(formInput);
    const err = Object.values(validateResult).find((item) => item === true);
    if (!err) {
      const product = new Product({
        id: (Math.floor(Math.random() * 1000) + 100).toString(),
        name: formInput.name,
        price: formInput.price.toString(),
        newPercentage: formInput.newPercentage,
        description: formInput.description,
        images: formInput.images,
        category: formInput.category as CategoryTitle,
        time: new Date(),
        city: formInput.city,
        district: formInput.district,
        ward: formInput.ward,
        street: formInput.street,
        state: ProductState.ON_SALE,
        amount: 1,
        author: user
      });

      dispatch(productsActions.addNewProduct(product));
      dispatch(userActions.addPostProduct(product));
      setDislogSuccess(true);
    }
    setFormValidate(validateResult);
  };

  return (
    <div className={`${styles.post__form} ${props.className}`}>
      <PostSuccessDialog
        open={dialogSuccess}
        onClose={() => {
          setDislogSuccess(false);
          setTimeout(() => history.replace(Routes.DASHBOARD), 500);
        }}
      />
      <CancelPostDialog
        open={dialogCancel}
        onConfirm={() => setTimeout(() => history.replace(Routes.HOME), 500)}
        onCancel={() => setDialogCancel(false)}
      />
      <div className={styles.post__form__container}>
        <form onSubmit={handleSubmit}>
          <Panel
            className={styles.form__session__container}
            title={contents.generalSession.title}
          >
            <div className={styles.form__field__container}>
              <div className={styles.double__line__field}>
                <div className={styles.form__field}>
                  <label htmlFor="name" className={styles.form__field__label}>
                    {contents.generalSession.fields.name.label}
                  </label>
                  <br />
                  <input
                    type="text"
                    onChange={(e) =>
                      setFormInput({ ...formInput, name: e.target.value })
                    }
                    autoComplete="none"
                    placeholder={
                      contents.generalSession.fields.name.placeholder
                    }
                    id="name"
                    name="name"
                    className={`${styles.form__field__input} ${
                      formValidate.errName ? styles.err : undefined
                    }`}
                  />
                </div>

                <div className={styles.form__field}>
                  <label htmlFor="price" className={styles.form__field__label}>
                    {contents.generalSession.fields.price.label}
                  </label>
                  <br />
                  <input
                    type="number"
                    onChange={(e) =>
                      setFormInput({
                        ...formInput,
                        price: parseFloat(e.target.value)
                      })
                    }
                    autoComplete="none"
                    placeholder={
                      contents.generalSession.fields.price.placeholder
                    }
                    id="price"
                    name="price"
                    className={`${styles.form__field__input} ${
                      formValidate.errPrice ? styles.err : undefined
                    }`}
                  />
                </div>
              </div>

              <div className={styles.double__line__field}>
                <div className={styles.form__field}>
                  <label
                    htmlFor="category"
                    className={styles.form__field__label}
                  >
                    {contents.generalSession.fields.category.label}
                  </label>
                  <br />

                  <Select
                    onChange={(option) =>
                      setFormInput({
                        ...formInput,
                        category: option?.value ? option?.value : ""
                      })
                    }
                    autoComplete="none"
                    options={categoriesInput}
                    placeholder={
                      contents.generalSession.fields.category.placeholder
                    }
                    id="category"
                    name="category"
                    styles={
                      formValidate.errCategory ? selectStyleErr : selectStyle
                    }
                  />
                </div>

                <div className={styles.form__field}>
                  <label
                    htmlFor="newPercentage"
                    className={styles.form__field__label}
                  >
                    {contents.generalSession.fields.status.label}
                  </label>
                  <br />
                  <input
                    type="number"
                    onChange={(e) =>
                      setFormInput({
                        ...formInput,
                        newPercentage: parseFloat(e.target.value)
                      })
                    }
                    autoComplete="none"
                    placeholder={
                      contents.generalSession.fields.status.placeholder
                    }
                    id="newPercentage"
                    name="newPercentage"
                    className={`${styles.form__field__input} ${
                      formValidate.errNewPercentage ? styles.err : undefined
                    }`}
                  />
                </div>
              </div>
            </div>
          </Panel>
          <Panel
            className={styles.form__session__container}
            title={contents.detailSession.title}
          >
            <div className={styles.form__field__container}>
              <div className={styles.form__field}>
                <label htmlFor="describe" className={styles.form__field__label}>
                  {contents.detailSession.fields.describe.label}
                </label>
                <br />
                <textarea
                  onChange={(e) =>
                    setFormInput({ ...formInput, description: e.target.value })
                  }
                  rows={5}
                  autoComplete="none"
                  placeholder={
                    contents.detailSession.fields.describe.placeholder
                  }
                  id="describe"
                  name="describe"
                  className={`${styles.form__field__input} ${
                    formValidate.errDescription ? styles.err : undefined
                  }`}
                />
              </div>

              <div className={styles.form__field}>
                <label htmlFor="street" className={styles.form__field__label}>
                  {contents.detailSession.fields.address.label}
                </label>
                <br />
                <input
                  type="text"
                  onChange={(e) =>
                    setFormInput({ ...formInput, street: e.target.value })
                  }
                  autoComplete="none"
                  placeholder={contents.detailSession.fields.address.street}
                  id="street"
                  name="street"
                  className={`${styles.form__field__input} ${
                    formValidate.errStreet ? styles.err : undefined
                  }`}
                />

                <div className={styles.form__field__address}>
                  <div className={styles.form__field}>
                    <Select
                      options={citiesInput}
                      placeholder={contents.detailSession.fields.address.city}
                      styles={
                        formValidate.errCity ? selectStyleErr : selectStyle
                      }
                      onChange={(option) =>
                        setFormInput({
                          ...formInput,
                          city: option?.value ? option.value : ""
                        })
                      }
                    />
                  </div>

                  <div className={styles.form__field}>
                    <Select
                      options={formInput.city ? districtsInput : []}
                      placeholder={
                        contents.detailSession.fields.address.district
                      }
                      onChange={(option) =>
                        setFormInput({
                          ...formInput,
                          district: option?.value ? option.value : ""
                        })
                      }
                      styles={
                        formValidate.errDistrict ? selectStyleErr : selectStyle
                      }
                    />
                  </div>

                  <div className={styles.form__field}>
                    <Select
                      options={formInput.district ? wardsInput : []}
                      placeholder={contents.detailSession.fields.address.ward}
                      onChange={(option) =>
                        setFormInput({
                          ...formInput,
                          ward: option?.value ? option.value : ""
                        })
                      }
                      styles={
                        formValidate.errWard ? selectStyleErr : selectStyle
                      }
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
                  {Array.from(new Array(NUM_IMAGES)).map((_, index) => (
                    <UploadImage
                      onUpload={(img: string) => {
                        const images = formInput.images;
                        images.push(img);
                        setFormInput({ ...formInput, images: images });
                      }}
                      onRemove={(img: string) => {
                        const images = formInput.images;
                        const index = images.indexOf(img);
                        if (index !== -1) images.splice(index, 1);
                        setFormInput({ ...formInput, images: images });
                      }}
                      key={index}
                      className={styles.upload__field}
                    />
                  ))}
                </div>
                {formValidate.errImages ? (
                  <p className={styles.err__img__upload}>
                    {contents.detailSession.fields.images.err}
                  </p>
                ) : undefined}
              </div>
            </div>
          </Panel>

          <p className={styles.note__form}>{contents.note}</p>
          {formErr ? (
            <p className={styles.err__form}>{contents.err}</p>
          ) : undefined}
          <div className={styles.form__actions__container}>
            {/* <button className={styles.form__action__preview} type="button">
              {contents.actions.preview}
            </button> */}
            <button className={styles.form__action__post} type="submit">
              {contents.actions.post}
            </button>
            <button
              className={styles.form__action__cancel}
              type="button"
              onClick={() => setDialogCancel(true)}
            >
              {contents.actions.cancel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
