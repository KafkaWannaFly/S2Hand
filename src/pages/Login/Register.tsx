import React from "react";
import styles from "./Register.module.scss";

import { Link } from 'react-router-dom'

class Register extends React.Component {
    render() {
        return (
            <div>
                {/* Page Content */}
                <div className={styles["register"]}>
                    <div className={styles["register__container"]}>
                        <div className="btn-searchsubmit-section proceed-btn btn btn-block">
                            <Link to="/Login" className="btn btn-primary submit-btn">Đăng nhập</Link>
                            {/* <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Tạo tài khoản mới</button> */}
                        </div>
                        <div className={styles["register__input-wrapper"]}>
                            <div className={styles["register__input"]}>
                                <input type="text" placeholder="Họ">
                                </input>
                                {/* <input type="text" placeholder="Tên">
								</input> */}
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
                            <div className={styles["register__keep-register"]}>
                                <input type="checkbox">

                                </input>
                                <label>
                                    Lưu thông tin đăng nhập
                                </label>
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary btn-block btn-lg register-btn" type="submit">Đăng ký</button>
                        </div>
                    </div>
                </div>
                {/* Page Content */}
            </div>
        )
    }
}
export default Register;