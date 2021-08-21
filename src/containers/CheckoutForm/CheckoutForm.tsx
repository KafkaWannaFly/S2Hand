import React, { useState, useEffect } from "react";
import { DivProps } from "react-html-props";
import Panel from "../Panel/Panel";
import { strings } from "../../data";
import styles from "./CheckoutForm.module.scss";
import { Routes } from "../../routings";
import { Link, useHistory } from "react-router-dom";
import Select from "react-select";
import { selectStyle, selectStyleErr } from "../../styles/select";
import { locationsService } from "../../services";
import { useAppSelector } from "../../hooks";
import ZaloPay from "../../assets/images/zalopay.png";
import Momo from "../../assets/images/momo.png";
import VnPay from "../../assets/images/vnpayqr.png";
import { Icon } from "../../components";
import { FaTruck } from "react-icons/fa";
import { validations } from "../../utils";

interface FormInput {
  name: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  district: string;
  ward: string;
  note: string;
  payment: string;
}

interface FormValidate {
  errName: boolean;
  errPhone: boolean;
  errEmail: boolean;
  errStreet: boolean;
  errCity: boolean;
  errDistrict: boolean;
  errWard: boolean;
}

const initFormValidate: FormValidate = {
  errName: false,
  errPhone: false,
  errEmail: false,
  errStreet: false,
  errCity: false,
  errDistrict: false,
  errWard: false
};

interface Props extends DivProps {}

const CheckoutForm = ({ className, ...props }: Props) => {
  const contents = strings.checkout;

  const user = useAppSelector((state) => state.user);

  const [formInput, setFormInput] = useState<FormInput>({
    name: user.name ?? "",
    phone: "",
    email: user.email ?? "",
    street: "",
    city: "",
    district: "",
    ward: "",
    note: "",
    payment: ""
  });

  const [formValidate, setFormValidate] =
    useState<FormValidate>(initFormValidate);

  const [formErr, setFormErr] = useState(false);

  useEffect(() => {
    const err = Object.values(formValidate).find((item) => item === true);
    if (err) setFormErr(true);
    else setFormErr(false);
  }, [formValidate]);

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
    const validateResult = validations.validateCheckoutForm(formInput);
    const err = Object.values(validateResult).find((item) => item === true);
    if (!err) {
      history.replace(Routes.CHECKOUT_SUCCESS);
    }
    setFormValidate(validateResult);
  };

  const history = useHistory();

  return (
    <div className={`${styles.checkout} ${className}`} {...props}>
      <div className={styles.checkout__container}>
        <form onSubmit={handleSubmit}>
          <Panel
            className={styles.form__session__container}
            title={contents.deliverySession.title}
          >
            <>
              <div className={styles.login__request}>
                <p className={styles.question}>
                  {contents.loginRequest.question}
                </p>
                <Link to={Routes.LOGIN} className={styles.action}>
                  {contents.loginRequest.action}
                </Link>
              </div>
              <div className={styles.form__field__container}>
                <div className={styles.double__line__field}>
                  <div className={styles.form__field}>
                    <input
                      value={formInput.name}
                      onChange={(e) =>
                        setFormInput({ ...formInput, name: e.target.value })
                      }
                      type="text"
                      autoComplete="none"
                      placeholder={
                        contents.deliverySession.fields.name.placeholder
                      }
                      id="name"
                      name="name"
                      className={`${styles.form__field__input} ${
                        formValidate.errName ? styles.err : undefined
                      }`}
                    />
                  </div>

                  <div className={styles.form__field}>
                    <input
                      value={formInput.phone}
                      onChange={(e) =>
                        setFormInput({ ...formInput, phone: e.target.value })
                      }
                      type="text"
                      autoComplete="none"
                      placeholder={
                        contents.deliverySession.fields.phone.placeholder
                      }
                      id="phone"
                      name="phone"
                      className={`${styles.form__field__input} ${
                        formValidate.errPhone ? styles.err : undefined
                      }`}
                    />
                  </div>
                </div>

                <div className={styles.form__field}>
                  <input
                    value={formInput.email}
                    onChange={(e) =>
                      setFormInput({ ...formInput, email: e.target.value })
                    }
                    type="text"
                    autoComplete="none"
                    placeholder={
                      contents.deliverySession.fields.email.placeholder
                    }
                    id="email"
                    name="email"
                    className={`${styles.form__field__input} ${
                      formValidate.errEmail ? styles.err : undefined
                    }`}
                  />
                </div>

                <div className={styles.form__field}>
                  <input
                    value={formInput.street}
                    onChange={(e) =>
                      setFormInput({ ...formInput, street: e.target.value })
                    }
                    type="text"
                    autoComplete="none"
                    placeholder={
                      contents.deliverySession.fields.street.placeholder
                    }
                    id="street"
                    name="street"
                    className={`${styles.form__field__input} ${
                      formValidate.errStreet ? styles.err : undefined
                    }`}
                  />
                </div>

                <div className={styles.form__field__address}>
                  <div className={styles.form__field}>
                    <Select
                      options={citiesInput}
                      placeholder={
                        contents.deliverySession.fields.city.placeholder
                      }
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
                        contents.deliverySession.fields.district.placeholder
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
                      placeholder={
                        contents.deliverySession.fields.ward.placeholder
                      }
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

                <div className={styles.form__field}>
                  <textarea
                    value={formInput.note}
                    onChange={(e) =>
                      setFormInput({ ...formInput, note: e.target.value })
                    }
                    rows={5}
                    autoComplete="none"
                    placeholder={
                      contents.deliverySession.fields.note.placeholder
                    }
                    id="note"
                    name="note"
                    className={`${styles.form__field__input} `}
                  />
                </div>
              </div>
            </>
          </Panel>

          <Panel
            className={styles.form__session__container}
            title={contents.paymentSession.title}
          >
            <div className={styles.form__field__container}>
              <div className={styles.form__field}>
                <div className={styles.radio__payment}>
                  <input
                    type="radio"
                    id="cod"
                    name="payment"
                    value="cod"
                    checked
                  />
                  <Icon icon={FaTruck} className={styles.payment__icon} />
                  <label htmlFor="cod">
                    {contents.paymentSession.options.cod}
                  </label>
                </div>
              </div>

              <div className={styles.form__field}>
                <div className={styles.radio__payment}>
                  <input
                    type="radio"
                    id="zalopay"
                    name="payment"
                    value="zalopay"
                  />
                  <img src={ZaloPay} className={styles.payment__img} />
                  <label htmlFor="zalopay">
                    {contents.paymentSession.options.zalopay}
                  </label>
                </div>
              </div>

              <div className={styles.form__field}>
                <div className={styles.radio__payment}>
                  <input type="radio" id="momo" name="payment" value="momo" />
                  <img src={Momo} className={styles.payment__img__momo} />
                  <label htmlFor="momo">
                    {contents.paymentSession.options.momo}
                  </label>
                </div>
              </div>

              <div className={styles.form__field}>
                <div className={styles.radio__payment}>
                  <input type="radio" id="vnpay" name="payment" value="vnpay" />
                  <img src={VnPay} className={styles.payment__img} />
                  <label htmlFor="vnpay">
                    {contents.paymentSession.options.vnpay}
                  </label>
                </div>
              </div>
            </div>
          </Panel>

          {formErr ? (
            <p className={styles.err__form}>{contents.err}</p>
          ) : undefined}
          <div className={styles.form__actions__container}>
            <button className={styles.form__action__confirm} type="submit">
              {contents.actions.confirm}
            </button>
            <button
              className={styles.form__action__cancel}
              type="button"
              onClick={() => history.goBack()}
            >
              {contents.actions.cancel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
