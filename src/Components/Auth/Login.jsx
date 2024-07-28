import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<section class="vh-100 login_background">
			<div class="container py-5 h-100">
				<div className="row w-50 mx-auto">
					<div className="col card bg-white">
						<h2
							className="mx-auto py-4"
							style={{
								letterSpacing: '.3rem',
								fontWeight: '600',
								fontSize: '40px',
							}}
						>
							Login
						</h2>

						<div className="mx-auto d-flex flex-column w-75">
							<input
								type="email"
								placeholder="Enter Your Email"
								className=" mb-3 py-2 px-4 rounded"
								style={{
									outline: 'none',
									fontSize: '16px',
									border: '1px solid black',
								}}
							/>
							<input
								type="password"
								placeholder="Enter Your Password"
								className=" mb-3 py-2 px-4 rounded"
								style={{
									outline: 'none',
									fontSize: '16px',
									border: '1px solid black',
								}}
							/>

							<div class="form-check mx-auto">
								<input
									type="checkbox"
									class="form-check-input"
									id="exampleCheck1"
								/>
								<label for="exampleCheck1" style={{ fontSize: '14px' }}>
									Accept All Trems and Conditions.
								</label>
							</div>

							<Link className="mt-2 text-black mx-auto" to="/forget_password">
								Forget Password
							</Link>

							<input
								type="button"
								value="Login"
								className="w-75 mx-auto btn py-2 text-white mb-4 mt-4 button"
							/>
						</div>

						<div className="mx-auto mb-2">
							<p style={{ fontSize: '16px' }}>
								You Haven't Any Account? <Link to="/singup">Singup</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
