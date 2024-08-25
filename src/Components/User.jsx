import React, { useEffect, useState } from 'react';
import axios from '../Utils/axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import useAxoisPrivate from '../Hooks/useAxiosPrivet';
import useAuth from '../Hooks/useAuth';
import useRefreshToken from '../Hooks/useRefreshToken';

const GET_USER_URL = '/api/v1/user/current_user';

const User = () => {
	const { auth, setAuth } = useAuth();

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

	// console.log({ user });
	return (
		<>
			{auth?.user ? (
				<div className="subMenu shadow rounded">
					<li>
						<Link to="/my_profile" className="text-decoration-none text-dark">
							<Button>My Profile</Button>
						</Link>
					</li>

					<li>
						<Link to="/my_orders" className="text-decoration-none text-dark">
							<Button>My Orders</Button>
						</Link>
					</li>
					<li>
						<Link
							to="/bestSelling_product"
							className="text-decoration-none text-dark"
						>
							<Button>BestSelling Product</Button>
						</Link>
					</li>
					<li>
						<Button
							// onClick={logout}
							className="text-decoration-none text-dark"
						>
							LogOut
						</Button>
					</li>
				</div>
			) : (
				<div className="subMenu shadow rounded">
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
