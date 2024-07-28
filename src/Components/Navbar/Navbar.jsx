import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/Frontend_Assets/logo.png';
import cart from '../Assets/Frontend_Assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const [menu, setMenu] = useState('shop');
	return (
		<div>
			<div className="navbar">
				<div className="nav_logo">
					<img src={logo} alt="nav_logo" />
					<h2>SHOPPER</h2>
				</div>

				{/* nav menu  */}

				<ul className="nav_menu">
					<Link to="/">
						<li onClick={() => setMenu('shop')}>
							Shop {menu === 'shop' ? <hr /> : <></>}
						</li>
					</Link>
					<Link to="/mens">
						<li onClick={() => setMenu('mens')}>
							Men {menu === 'mens' ? <hr /> : <></>}
						</li>
					</Link>
					<Link to="/womens">
						<li onClick={() => setMenu('womens')}>
							Women {menu === 'womens' ? <hr /> : <></>}
						</li>
					</Link>
					<Link to="/kids">
						<li onClick={() => setMenu('kids')}>
							Kid {menu === 'kids' ? <hr /> : <></>}
						</li>
					</Link>
				</ul>

				<div className="nav_login_cart">
					<Link to="/login">
						<button>Login</button>
					</Link>
					<Link to="/cart">
						<img src={cart} alt="Cart icon" />
					</Link>
					<div className="nav_cart_count">0</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
