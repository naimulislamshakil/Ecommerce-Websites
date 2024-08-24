import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from '../../Utils/axios';
import { errorToast } from '../../Utils/toast';
import useAuth from '../../Hooks/useAuth';

const LOGIN_URL = '/api/v1/user/login';

const Login = () => {
	const { setAuth } = useAuth();
	const [isLoading, setIsLoading] = useState(false);
	const userRef = useRef();

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		userRef.current.focus();
	}, []);

	const handelSubmit = async () => {
		setIsLoading(true);
		try {
			const responce = await axios.post(
				LOGIN_URL,
				JSON.stringify({ email, password }),
				{
					headers: {
						'Content-Type': 'application/json',
					},
					withCredentials: true,
				}
			);

			const accessToken = responce?.data?.data?.accessToken;
			const refreshToken = responce?.data?.data?.refreshToken;
			const user = responce?.data?.data?.user;

			setAuth({ accessToken, refreshToken, user });
			setIsLoading(false);
			setEmail('');
			setPassword('');
			navigate(from, { replace: true });
		} catch (err) {
			if (!err?.response) {
				setIsLoading(false);
				errorToast('No Server Response');
			} else if (err.response?.status === 400) {
				setIsLoading(false);
				errorToast('Missing Name or Password');
			} else if (err.response?.status === 401) {
				setIsLoading(false);
				errorToast('Unauthorized');
			} else {
				setIsLoading(false);
				errorToast('Login Failed');
			}
		}
	};

	return (
		<section
			className="container d-flex align-items-center justify-content-center my-5"
			style={{ minHeight: '100vh' }}
		>
			<div class="card w-50 mx-auto p-5">
				<h3 className="secondary-font text-uppercase mx-auto text-black-50">
					Login
				</h3>

				<form>
					<div class="d-flex flex-column mt-4">
						<label className="primary-font ms-1 input-label">
							Email Address *
						</label>
						<input
							type="email"
							class="input primary-font"
							id="email"
							ref={userRef}
							autoComplete="off"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							required
						/>
					</div>
					<div class="d-flex flex-column mt-4">
						<label className="primary-font ms-1 input-label">Password *</label>
						<input
							type="password"
							class="input primary-font"
							id="password"
							ref={userRef}
							autoComplete="off"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
							required
						/>
					</div>
					<button
						type="button"
						disabled={!email || !password ? true : false}
						onClick={handelSubmit}
						className="secondary-font input-btn w-100"
					>
						{isLoading ? (
							<div class="spinner-border text-light" role="status">
								<span class="visually-hidden">Loading...</span>
							</div>
						) : (
							'Login'
						)}
					</button>
				</form>

				<div className="mt-3">
					<span
						className="secondary-font"
						style={{ fontSize: '16px', letterSpacing: '0.05rem' }}
					>
						You Are Not Register. <Link to="/register">Create Account.</Link>
					</span>
				</div>
			</div>
		</section>
	);
};

export default Login;
