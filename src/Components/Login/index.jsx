import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl, errorToast, successToast } from '../../Utils/toast';
import { useMutation } from 'react-query';

const Login = () => {
	const initialState = {
		email: '',
		password: '',
	};

	const [formValue, setFormValue] = useState(initialState);
	const [formError, setFormError] = useState({});
	const navigate = useNavigate();

	const { data, mutate, isLoading, error } = useMutation({
		mutationFn: async () => {
			const res = await fetch(`${baseUrl}/api/v1/user/login`, {
				method: 'POST',
				credentials: 'include',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formValue),
			});

			return res.json();
		},
	});

	if (data?.success === true && data?.statusCode === 200) {
		successToast(data?.message);
		setTimeout(() => {
			navigate('/');
		}, 2000);
	}

	if (error || (data?.success === false && data?.statusCode !== 200)) {
		errorToast(error || data?.error);
	}

	const handelChange = (e) => {
		const { name, value } = e.target;
		setFormValue({ ...formValue, [name]: value });
	};

	const validate = (values) => {
		const errors = {};
		const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]/;

		if (!values?.email) {
			errors.email = 'Email is required';
		} else if (!regex.test(values?.email)) {
			errors.email = 'This is not a valid email';
		}
		if (!values?.password) {
			errors.password = 'Password is required';
		}

		return errors;
	};

	const handelSubmit = (e) => {
		setFormError(validate(formValue));
		if (formValue.email !== '' && formValue.password !== '') {
			mutate(formValue);
		} else {
			errorToast('All Fields Are Required..');
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
							name="email"
							value={formValue?.email}
							onChange={handelChange}
							class="input primary-font"
						/>

						<p className="mt-2 w-100 text-danger ms-2 mb-0">
							{formError?.email}
						</p>
					</div>
					<div class="d-flex flex-column mt-4">
						<label className="primary-font ms-1 input-label">Password *</label>
						<input
							type="password"
							name="password"
							value={formValue?.password}
							onChange={handelChange}
							class="input primary-font"
						/>

						<p className="mt-2 w-100 text-danger ms-2 mb-0">
							{formError?.password}
						</p>
					</div>
				</form>

				<button onClick={handelSubmit} className="secondary-font input-btn">
					{isLoading ? (
						<div class="spinner-border text-light" role="status">
							<span class="visually-hidden">Loading...</span>
						</div>
					) : (
						'Login'
					)}
				</button>

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
