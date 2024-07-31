import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="mt-2">
			<div className="container">
				<div className="row">
					{/* <div className="col-sm-3 navPart1">
						<Button variant="contained">
							<span className="menu">
								<MenuOutlinedIcon />
							</span>
							<span className="text">ALL CATEGORIES</span>
							<span className="expand">
								<ExpandMoreOutlinedIcon />
							</span>
						</Button>
					</div> */}
					<div className="col-sm-12 navPart2">
						<ul className="list list-inline w-100 d-flex align-items-center justify-content-between">
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
								{/* Start SubMenu */}
								<div className="subMenu shadow rounded">
									<li>
										<Button>Men Fashion</Button>
									</li>
									<li>
										<Button>Women Fashion</Button>
									</li>
									<li>
										<Button>Kid Fashion</Button>
									</li>
								</div>
								{/* End SubMenu */}
							</li>

							<li className="list-inline-item">
								<Button style={{ borderRadius: '35px', padding: '2px 10px' }}>
									<Link to="/home_decoration">Home Decoration</Link>
									<span>
										<ExpandMoreOutlinedIcon />
									</span>
								</Button>
								{/* Start SubMenu */}
								<div className="subMenu shadow rounded">
									<li>
										<Button>Men Fashion</Button>
									</li>
									<li>
										<Button>Women Fashion</Button>
									</li>
									<li>
										<Button>Kid Fashion</Button>
									</li>
								</div>
								{/* End SubMenu */}
							</li>

							<li className="list-inline-item">
								<Button style={{ borderRadius: '35px', padding: '2px 10px' }}>
									<Link to="/electronic">Electronic</Link>
									<span>
										<ExpandMoreOutlinedIcon />
									</span>
								</Button>
								{/* Start SubMenu */}
								<div className="subMenu shadow rounded">
									<li>
										<Button>Men Fashion</Button>
									</li>
									<li>
										<Button>Women Fashion</Button>
									</li>
									<li>
										<Button>Kid Fashion</Button>
									</li>
								</div>
								{/* End SubMenu */}
							</li>
							<li className="list-inline-item">
								<Button style={{ borderRadius: '35px', padding: '2px 10px' }}>
									<Link to="/bakery">Bakery</Link>
									<span>
										<ExpandMoreOutlinedIcon />
									</span>
								</Button>
								{/* Start SubMenu */}
								<div className="subMenu shadow rounded">
									<li>
										<Button>Men Fashion</Button>
									</li>
									<li>
										<Button>Women Fashion</Button>
									</li>
									<li>
										<Button>Kid Fashion</Button>
									</li>
								</div>
								{/* End SubMenu */}
							</li>
							<li className="list-inline-item">
								<Button style={{ borderRadius: '35px', padding: '2px 10px' }}>
									<Link to="/grocery">Grocery</Link>
									<span>
										<ExpandMoreOutlinedIcon />
									</span>
								</Button>
								{/* Start SubMenu */}
								<div className="subMenu shadow rounded">
									<li>
										<Button>Men Fashion</Button>
									</li>
									<li>
										<Button>Women Fashion</Button>
									</li>
									<li>
										<Button>Kid Fashion</Button>
									</li>
								</div>
								{/* End SubMenu */}
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
