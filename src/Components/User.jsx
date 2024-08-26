import React, { useEffect } from 'react';
import axios from '../Utils/axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../Hooks/useAuth';
import { successToast } from '../Utils/toast';

const GET_USER_URL = '/api/v1/user/current_user';
const LOGOUT_URL = '/api/v1/user/logout';

const User = () => {
	const { auth, setAuth } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const getUser = async () => {
			const res = await axios.get(GET_USER_URL, {
				withCredentials: true,
			});

			const user = res?.data?.data?.user;

			if (user) {
				setAuth((prev) => {
					return {
						...prev,
						user,
					};
				});
			}
		};

		getUser();
	}, []);

	const logout = async () => {
		const res = await axios.get(LOGOUT_URL, {
			withCredentials: true,
		});

		console.log({ res });

		if (res?.data?.statusCode === 200) {
			setAuth((prev) => {
				return {
					...prev,
					user: null,
				};
			});
			successToast(res?.data?.message);
			navigate('/login', { state: { from: location }, replace: true });
		}
	};

	// console.log({ user });
	return (
		<>
			{auth?.user ? (
				<div className="subMenu shadow rounded">
					<li>
						<Link to="/my_profile" className="text-decoration-none text-dark">
							<Button>My Dashboard</Button>
						</Link>
					</li>

					<li>
						<Link to="/my_orders" className="text-decoration-none text-dark">
							<Button>My Orders</Button>
						</Link>
					</li>

					<li>
						<Button onClick={logout} className="text-decoration-none text-dark">
							LogOut
						</Button>
					</li>
				</div>
			) : (
				<div className="subMenu shadow rounded">
					<li>
						<Link to="/my_profile" className="text-decoration-none text-dark">
							<Button>My Dashboard</Button>
						</Link>
					</li>
					<li>
						<Link to="/login" className="text-decoration-none text-dark">
							<Button>Login</Button>
						</Link>
					</li>

					<li>
						<Link to="/register" className="text-decoration-none text-dark">
							<Button>Register</Button>
						</Link>
					</li>
				</div>
			)}
		</>
	);
};

export default User;
