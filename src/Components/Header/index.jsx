import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import Country from './Country';
import { Badge, Button } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchBox from './SearchBox';
import Navbar from './Navbar';
import User from '../User';

const Header = () => {
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
												<AccountCircleOutlinedIcon className="text-black" />
											</Button>

											<User />
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
