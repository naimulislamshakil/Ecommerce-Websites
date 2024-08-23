import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../images/logo.png';
import Country from './Country';
import { Badge, Button } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchBox from './SearchBox';
import Navbar from './Navbar';
import { useMutation, useQuery } from 'react-query';
import { baseUrl } from '../../Utils/toast.js';

const Header = () => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	const { data, error, isLoading, refetch } = useQuery({
		queryKey: 'get',
		queryFn: async () => {
			const res = await fetch(`${baseUrl}/api/v1/user/current_user`, {
				method: 'GET',
				credentials: 'include',
				headers: { 'Content-Type': 'application/json' },
			});
			const data = await res.json();

			console.log({ data });

			if (data.statusCode === 200) {
				return data;
			}

			if (data.statusCode !== 200) {
				const res = await fetch(`${baseUrl}/api/v1/user/refresh_token`, {
					method: 'POST',
					credentials: 'include',
					headers: { 'Content-Type': 'application/json' },
				});
				const data = await res.json();

				return data;
			}
		},
	});

	const {
		data: logData,
		mutate,
		error: logError,
	} = useMutation({
		mutationFn: async () => {
			const res = await fetch(`${baseUrl}/api/v1/user/logout`, {
				method: 'POST',
				credentials: 'include',
				headers: { 'Content-Type': 'application/json' },
			});

			const data = await res.json();
			return data;
		},
	});

	// console.log({ data });

	const logout = () => {
		setUser(null);
		mutate();
	};

	useEffect(() => {
		refetch();

		if (data?.statusCode === 200 && data?.success === true) {
			setUser(data?.data?.user);
		}

		if (error || (data?.success === false && data?.statusCode !== 200)) {
			navigate('/login');
		}
	}, [refetch, data, error]);

	return (
		<>
			<div className="headerWraper">
				<div className="top-strip bg-red">
					<div className="container">
						<p className="mt-0 mb-0 text-center">
							Due to <b>COVID-19</b> pidemic, order may be processed with a
							slight dealy.
						</p>
					</div>
				</div>

				<header className="header">
					<div className="container">
						<div className="row">
							<div className="col-sm-2 d-flex align-items-center logoWraper">
								<Link to="/">
									<img src={Logo} alt="" />
								</Link>
							</div>

							<div className="col-sm-10 d-flex align-items-center part2">
								<Country />

								{/* Header Search */}
								<SearchBox />

								{/* Crat and profile */}
								<div className="part3">
									<ul
										className="d-flex align-items-center justify-content-center list list-inline"
										style={{ listStyle: 'none' }}
									>
										<li className="list-inline-item">
											<Button className="profile">
												<AccountCircleOutlinedIcon
													style={{ fontSize: '30px' }}
													className="text-black"
												/>
											</Button>

											{user ? (
												<div className="subMenu shadow rounded">
													<li>
														<Link
															to="/my_profile"
															className="text-decoration-none text-dark"
														>
															<Button>My Profile</Button>
														</Link>
													</li>

													<li>
														<Link
															to="/my_orders"
															className="text-decoration-none text-dark"
														>
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
															onClick={logout}
															className="text-decoration-none text-dark"
														>
															LogOut
														</Button>
													</li>
												</div>
											) : (
												<div className="subMenu shadow rounded">
													<li>
														<Link
															to="/login"
															className="text-decoration-none text-dark"
														>
															<Button>Login</Button>
														</Link>
													</li>

													<li>
														<Link
															to="/register"
															className="text-decoration-none text-dark"
														>
															<Button>Register</Button>
														</Link>
													</li>
												</div>
											)}
										</li>
										<li>
											<Button className="cart">
												<Badge badgeContent={4} color="error">
													<ShoppingBagOutlinedIcon
														style={{ fontSize: '30px' }}
														className="text-black"
													/>
												</Badge>
											</Button>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</header>

				{/* Navbar */}
				<Navbar />
			</div>
		</>
	);
};

export default Header;
