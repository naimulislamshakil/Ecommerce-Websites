/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar, { SidebarItem } from './Sidebar';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const index = () => {
	const location = useLocation();
	const currentLocation = location.pathname;
	return (
		<div className="container-fluid overflow-x-hidden">
			<div className="row">
				<div className="col-3">
					<Sidebar>
						<SidebarItem
							icon={<Person2OutlinedIcon style={{ fontSize: '24px' }} />}
							text="My Profile"
							link="/my_profile"
							active={currentLocation === '/my_profile'}
						/>
						<SidebarItem
							icon={<ShoppingCartOutlinedIcon style={{ fontSize: '24px' }} />}
							text="My Order"
							link="/my_order"
							active={currentLocation === '/my_order'}
						/>
						<SidebarItem
							icon={<FavoriteBorderOutlinedIcon style={{ fontSize: '24px' }} />}
							text="My Wishlist"
							link="/my_wishlist"
							active={currentLocation === '/my_wishlist'}
						/>
					</Sidebar>
				</div>
				<div className="col-9">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default index;
