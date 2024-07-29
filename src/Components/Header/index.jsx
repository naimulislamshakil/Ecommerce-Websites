import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import Country from './Country';
import { Badge, Button } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

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
								<div className="headerSearch">
									<input type="text" placeholder="Search For Products...." />
									<Button>
										<SearchOutlinedIcon
											className="mx-auto text-black"
											style={{ fontSize: '30px' }}
										/>
									</Button>
								</div>

								{/* Crat and profile */}
								<div className="part3 d-flex align-items-center">
									<Button className="profile">
										<AccountCircleOutlinedIcon
											style={{ fontSize: '30px' }}
											className="text-black"
										/>
									</Button>
									<Button className="cart">
										<Badge badgeContent={4} color="error">
											<ShoppingBagOutlinedIcon
												style={{ fontSize: '30px' }}
												className="text-black"
											/>
										</Badge>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		</>
	);
};

export default Header;
