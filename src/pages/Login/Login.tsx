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
							<button>
								Đăng nhập
							</button>
						</div>
						<div>
							<button>
								Tạo tài khoản mới
							</button>
						</div>

					</div>
				</div>
				{/* Page Content */}
			</div>
		)
	}
}
export default Login;