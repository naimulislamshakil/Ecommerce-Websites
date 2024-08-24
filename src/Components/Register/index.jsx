import React, { useEffect, useRef, useState } from 'react';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { json, Link, useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../Utils/toast';
import axios from '../../Utils/axios';

const emailRegex =
	/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const nameRegex = /^[A-z][A-z" "]{3,23}$/;
const registerUrl = '/api/v1/user/register';

const Register = () => {
	const [isLoading, setIsLoading] = useState(false);
	const userRef = useRef();
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [validName, setValidName] = useState(false);
	const [nameFocus, setNameFocus] = useState(false);

	const [email, setEmail] = useState('');
	const [validEmail, setValidEmail] = useState(false);
	const [emailFocus, setEmailFocus] = useState(false);

	const [password, setPassword] = useState('');
	const [validPassword, setValidPassword] = useState(false);
	const [passwordFocus, setPasswordFocus] = useState(false);

	useEffect(() => {
		userRef.current.focus();
	}, []);

	useEffect(() => {
		const result = nameRegex.test(name);
		console.log({ result });
		console.log({ name });
		setValidName(result);
	}, [name]);

	useEffect(() => {
		const result = emailRegex.test(email);
		console.log({ result });
		console.log({ email });
		setValidEmail(result);
	}, [email]);

	useEffect(() => {
		const result = passwordRegex.test(password);
		console.log({ result });
		console.log({ password });
		setValidPassword(result);
	}, [password]);

	const handleSubmit = async () => {
		setIsLoading(true);
		const v1 = nameRegex.test(name);
		const v2 = emailRegex.test(email);
		const v3 = passwordRegex.test(password);

		if (!v1 || !v2 || !v3) {
			errorToast('Invalid Entry!');
			setIsLoading(false);
			return;
		}

		try {
			const responce = await axios.post(
				registerUrl,
				JSON.stringify({ name, email, password }),
				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: true,
				}
			);

			if (
				responce.data?.statusCode === 200 &&
				responce.data?.success === true
			) {
				setIsLoading(false);
				successToast(responce.data?.message);
				navigate('/login');
			}
		} catch (error) {
			if (!error.response) {
				errorToast('No server Responce.');
			} else if (error.response.status === 409) {
				errorToast('Username Taken');
			} else {
				errorToast('Registration Failed!');
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
					Register
				</h3>

				<form>
					<div class="d-flex flex-column">
						<label htmlFor="name" className="primary-font ms-1 input-label">
							Name *
						</label>
						<input
							type="text"
							class="input primary-font"
							id="name"
							ref={userRef}
							autoComplete="off"
							onChange={(e) => setName(e.target.value)}
							required
							aria-invalid={validName ? 'false' : 'true'}
							aria-describedby="uidnote"
							onFocus={() => setNameFocus(true)}
							onBlur={() => setNameFocus(false)}
						/>

						<p
							id="uidnote"
							className={
								nameFocus && name && !validName
									? 'instructions secondary-font'
									: 'offscreen'
							}
						>
							<ErrorOutlineOutlinedIcon className="me-1" />
							Name must be requierd!
						</p>
					</div>
					<div class="d-flex flex-column mt-4">
						<label htmlFor="email" className="primary-font ms-1 input-label">
							Email Address *
						</label>
						<input
							type="email"
							class="input primary-font"
							id="email"
							ref={userRef}
							autoComplete="off"
							onChange={(e) => setEmail(e.target.value)}
							required
							aria-invalid={validName ? 'false' : 'true'}
							aria-describedby="uidnote"
							onFocus={() => setEmailFocus(true)}
							onBlur={() => setEmailFocus(false)}
						/>

						<p
							id="uidnote"
							className={
								emailFocus && email && !validEmail
									? 'instructions secondary-font'
									: 'offscreen'
							}
						>
							<ErrorOutlineOutlinedIcon className="me-1" />
							Email must be requierd!
							<br />
							Enter in the format: formet@example.com
						</p>
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
							required
							aria-invalid={validName ? 'false' : 'true'}
							aria-describedby="uidnote"
							onFocus={() => setPasswordFocus(true)}
							onBlur={() => setPasswordFocus(false)}
						/>

						<p
							id="uidnote"
							className={
								passwordFocus && password && !validPassword
									? 'instructions secondary-font'
									: 'offscreen'
							}
						>
							<ErrorOutlineOutlinedIcon className="me-1" />
							Password length must be 8 to 24 characters.
							<br />
							Must include uppercase and lowercase letter.
							<br />A number and a special character .<br />
							Allowed special characters: ! @ # $ %
						</p>
					</div>

					<button
						type="button"
						disabled={
							!validEmail || !validName || !validPassword ? true : false
						}
						className="secondary-font input-btn w-100"
						onClick={handleSubmit}
					>
						{isLoading ? (
							<div class="spinner-border text-light" role="status">
								<span class="visually-hidden">Loading...</span>
							</div>
						) : (
							'Register'
						)}
					</button>
				</form>

				<div className="mt-3">
					<span
						className="secondary-font"
						style={{ fontSize: '16px', letterSpacing: '0.05rem' }}
					>
						You Are Already Register. <Link to="/login">Please Login.</Link>
					</span>
				</div>
			</div>
		</section>
	);
};

export default Register;
