import React from "react";
import styles from "./Login.module.scss";

// const Login = () => {
//   return (
//     <div>
//       <h1>Login</h1>
//     </div>
//   );
// };
// export default Login;

import { Link } from 'react-router-dom'

class Login extends React.Component {
	render() {
		return (
			<div>
				{/* Page Content */}
				<div className={styles["login"]}>
					<div className={styles["login__container"]}>
						<div className={styles["login__input-wrapper"]}>
							<div className={styles["login__input"]}>
								<input type="text" placeholder="Số điện thoại hoặc email">

								</input>
							</div>
						</div>
						<div className={styles["login__input-wrapper"]}>
							<div className={styles["login__input"]}>
								<input type="text" placeholder="Mật khẩu">

								</input>
							</div>
						</div>
						<div className={styles["login__input-wrapper"]}>
							<div className={styles["login__keep-login"]}>
								<input type="checkbox">

								</input>
								<label>
									Duy trì đăng nhập
								</label>
							</div>

							<div>
								Quên mật khẩu
							</div>
						</div>
						<div>
							<button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Đăng nhập</button>
						</div>
						<div className="login-or">
							<span className="or-line"></span>
						</div>
						<div className="btn-searchsubmit-section proceed-btn btn btn-block">
							<Link to="/Register" className="btn btn-primary submit-btn">Tạo tài khoản mới</Link>
							{/* <button className="btn btn-primary btn-block btn-lg login-btn" type="submit">Tạo tài khoản mới</button> */}
						</div>
						{/* <div className="btn-searchsubmit-section proceed-btn btn btn-block">
							<Link to="/invoice-view" className="btn btn-primary submit-btn">Hoàn thành</Link>
						</div> */}
					</div>
				</div>
				{/* Page Content */}
			</div>
		)
	}
}
export default Login;