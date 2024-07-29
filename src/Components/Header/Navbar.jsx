import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="mt-2">
			<div className="container">
				<div className="row">
					<div className="col-sm-3 navPart1">
						<Button variant="contained">
							<span className="menu">
								<MenuOutlinedIcon />
							</span>
							<span className="text">ALL CATEGORIES</span>
							<span className="expand">
								<ExpandMoreOutlinedIcon />
							</span>
						</Button>
					</div>
					<div className="col-sm-9 navPart2 d-flex align-items-center">
						<ul className="list list-inline w-100">
							<li className="list-inline-item">
								<Button style={{ borderRadius: '35px', padding: '2px 10px' }}>
									<Link to="/">Home</Link>
									<span>
										<ExpandMoreOutlinedIcon />
									</span>
								</Button>
							</li>
							<li className="list-inline-item">
								<Button style={{ borderRadius: '35px', padding: '2px 10px' }}>
									<Link to="/fashion">Fashion</Link>
									<span>
										<ExpandMoreOutlinedIcon />
									</span>
								</Button>
							</li>

							<li className="list-inline-item">
								<Button style={{ borderRadius: '35px', padding: '2px 10px' }}>
									<Link to="/electronic">Electronic</Link>
									<span>
										<ExpandMoreOutlinedIcon />
									</span>
								</Button>
							</li>
							<li className="list-inline-item">
								<Button style={{ borderRadius: '35px', padding: '2px 10px' }}>
									<Link to="/bakery">Bakery</Link>
									<span>
										<ExpandMoreOutlinedIcon />
									</span>
								</Button>
							</li>
							<li className="list-inline-item">
								<Button style={{ borderRadius: '35px', padding: '2px 10px' }}>
									<Link to="/grocery">Grocery</Link>
									<span>
										<ExpandMoreOutlinedIcon />
									</span>
								</Button>
							</li>
							<li className="list-inline-item">
								<Button style={{ borderRadius: '35px', padding: '2px 10px' }}>
									<Link to="/blog">Blog</Link>
									<span>
										<ExpandMoreOutlinedIcon />
									</span>
								</Button>
							</li>
							<li className="list-inline-item">
								<Button style={{ borderRadius: '35px', padding: '2px 10px' }}>
									<Link to="/contact_us">Contact Us</Link>
									<span>
										<ExpandMoreOutlinedIcon />
									</span>
								</Button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
