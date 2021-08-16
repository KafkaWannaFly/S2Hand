import React, { useState } from "react";
import styles from "./Login.module.scss";

import { Link } from 'react-router-dom'

function Login() {

	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<div>
			{/* Page Content */}
			<div className={styles["login"]}>
				<div className={styles["login__container"]}>
					<div className={styles["login__input-wrapper"]}>
						<div className={styles["login__input"]}>
							<input 
								type="text" 
								placeholder="Số điện thoại hoặc email"
								value={username}
								onChange={event => setUsername(event?.target.value)}
							>

							</input>
						</div>
					</div>
					<div className={styles["login__input-wrapper"]}>
						<div className={styles["login__input"]}>
							<input 
								type="password" 
								placeholder="Mật khẩu"
								value={password}
								onChange={event => setPassword(event?.target.value)}
							>

							</input>
						</div>
					</div>
					<div className={`${styles["login__input-wrapper"]} ${styles["login__input-wrapper--flex"]}`}>
						<div className={styles["login__keep-login"]}>
							<input type="checkbox">

							</input>
							<label>
								Duy trì đăng nhập
							</label>
						</div>

						<div className={styles["login__forget-password"]}>
							Quên mật khẩu ?
						</div>
					</div>
					<div className={`${styles["login__input-wrapper"]} ${styles["login__input-wrapper--center"]}`}>
						<div>
							<button
								className={`btn btn-primary btn-block btn-lg login-btn ${styles['btn--orange']}`} 
								type="submit"
								onClick={() => alert(`${username} ${password}`)}
							>
								Đăng nhập
							</button>
						</div>
					</div>

					<div className={styles["linebreak"]}></div>

					<div className={`${styles["login__input-wrapper"]} ${styles["login__input-wrapper--center"]}`}>
						<div>
							<Link to="/Register">
								<button className={`btn btn-primary btn-block btn-lg login-btn ${styles['btn--green']}`} type="submit">
									Tạo tài khoản mới
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
export default Login;