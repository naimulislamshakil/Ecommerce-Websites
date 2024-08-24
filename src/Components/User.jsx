import React, { useEffect, useState } from 'react';
import axios from '../Utils/axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import useAxoisPrivate from '../Hooks/useAxiosPrivet';

const User = () => {
	const [user, setUser] = useState();
	const axiosPrivate = useAxoisPrivate();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();

		const getUser = async () => {
			try {
				const res = await axiosPrivate.get('/api/v1/user/current_user', {
					signal: controller.signal,
				});

				isMounted && setUser(res?.data?.data?.user);
			} catch (error) {
				navigate('/login', { state: { from: location }, replace: true });
			}
		};

		getUser();

		return () => {
			isMounted = false;
			controller.abort();
		};
	}, [axiosPrivate]);

	return (
		<>
			{user ? (
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
