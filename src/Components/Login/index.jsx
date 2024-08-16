import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../../Utils/toast';
import { clearMessage, loginFetch } from '../../Redux/Slice/loginSlice';

const Login = () => {
	const initialState = {
		email: '',
		password: '',
	};

	const [formValue, setFormValue] = useState(initialState);
	const [formError, setFormError] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);
	const dispatch = useDispatch();
	const navigator = useNavigate();
	const { loading, error, data } = useSelector((state) => state.login);

	

	if (data?.success === true && data?.statusCode === 200) {
		successToast(data?.message);
		dispatch(clearMessage());
		navigator('/');
	}

	if (error || (data?.success === false && data?.statusCode !== 200)) {
		errorToast(error || data?.error);
		dispatch(clearMessage());
	}

	const handelChange = (e) => {
		const { name, value } = e.target;
		setFormValue({ ...formValue, [name]: value });
	};

	useEffect(() => {
		console.log({ formError });

		if (Object.keys(formError).length === 0 && isSubmit) {
			console.log({ formValue });
		}
	}, [formError]);

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
		setIsSubmit(true);
		dispatch(loginFetch(formValue));
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
					Login
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
