import React, { useState } from "react";
import styles from "./Register.module.scss";
import DatePicker from 'react-datepicker'
import "./datepicker.css";
import Select from "react-select";

import { Link } from 'react-router-dom'

const genderOption = [
    { value: 'Nam', label: 'Nam' },
    { value: 'Nữ', label: 'Nữ' },
    { value: 'Giới tính khác', label: 'Giới tính khác' }
]

const roleOption = [
    { value: 'Sinh viên', label: 'Sinh viên' },
    { value: 'Người đi làm', label: 'Người đi làm' }
]

function Register() {

    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    return (
        <div>
            {/* Page Content */}
            {console.log(styles)}
            <div className={styles["register"]}>
                <div className={styles["register__container"]}>
                    <div className={`${styles["register__input-wrapper"]} ${styles["register__input-wrapper--flex"]}`}>
                        <div className={`${styles["register__input"]} ${styles["register__input--small"]}`}>
                            <input type="text" placeholder="Họ">
                            </input>
                        </div>
                        <div className={`${styles["register__input"]} ${styles["register__input--small"]}`}>
                            <input type="text" placeholder="Tên">
                            </input>
                        </div>
                    </div>
                    <div className={styles["register__input-wrapper"]}>
                        <div className={styles["register__input"]}>
                            <input type="text" placeholder="Số điện thoại hoặc email">
                            </input>
                        </div>
                    </div>
                    <div className={styles["register__input-wrapper"]}>
                        <div className={styles["register__input"]}>
                            <input type="text" placeholder="Mật khẩu">
                            </input>
                        </div>
                    </div>
                    <div className={styles["register__input-wrapper"]}>
                        <div className={styles["register__input"]}>
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date: Date | null) => date && setSelectedDate(date)}
                                dateFormat="dd/mm/yyyy"
                            />
                        </div>
                    </div>
                    <div className={styles["register__input-wrapper"]}>
                        <div 
                            className={styles["register__input"]} 
                            style={{
                                fontStyle:"italic",
                                color: '#5A5A5A'
                            }}
                        >
                            <Select 
                                options={genderOption} 
                                placeholder="Giới tính"
                            />
                        </div>
                    </div>
                    <div className={styles["register__input-wrapper"]}>
                        <div 
                            className={styles["register__input"]} 
                            style={{
                                fontStyle:"italic",
                                color: '#5A5A5A'
                            }}
                        >
                            <Select 
                                options={roleOption} 
                                placeholder="Vai trò"
                            />
                        </div>
                    </div>
                    <div className={`${styles["register__input-wrapper"]} ${styles["register__input-wrapper--flex"]}`}>
                        <div className={styles["register__keep-register"]}>
                            <input type="checkbox">
                            </input>
                            <label>
                                Duy trì đăng nhập
                            </label>
                        </div>
                    </div>
                    <div className={`${styles["register__input-wrapper"]} ${styles["register__input-wrapper--center"]}`}>
                        <div>
                            <button className={`btn btn-primary btn-block btn-lg register-btn ${styles['btn--orange']}`} type="submit">
                                Đăng ký
                            </button>
                        </div>
                    </div>
                    <div className={styles["linebreak"]}></div>

                    <div className={`${styles["register__input-wrapper"]} ${styles["register__input-wrapper--center"]}`}>
                        <div>
                            <Link to="/Login">
                                <button className={`btn btn-primary btn-block btn-lg register-btn ${styles['btn--green']}`} type="submit">
                                    Đăng nhập
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Content */}
        </div>
    )
}
export default Register;