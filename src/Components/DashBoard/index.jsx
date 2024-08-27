/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Sidebar, { SidebarItem } from './Sidebar';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import { successToast } from '../../Utils/toast';
import axios from '../../Utils/axios';
import useAuth from '../../Hooks/useAuth';

const LOGOUT_URL = '/api/v1/user/logout';

const index = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { setAuth } = useAuth();
	const currentLocation = location.pathname;

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
							icon={<ImportContactsOutlinedIcon style={{ fontSize: '24px' }} />}
							text="Address Book"
							link="/address_book"
							active={currentLocation === '/address_book'}
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
						<SidebarItem
							icon={<DraftsOutlinedIcon style={{ fontSize: '24px' }} />}
							text="Apply As a Vendor"
							link="/apply_as_vendor"
							active={currentLocation === '/apply_as_vendor'}
						/>

						<div className="border-top mt-4">
							<SidebarItem
								icon={<SettingsOutlinedIcon style={{ fontSize: '24px' }} />}
								text="Settings"
								link="/settings"
								active={currentLocation === '/settings'}
							/>
							<SidebarItem
								icon={<HelpOutlineOutlinedIcon style={{ fontSize: '24px' }} />}
								text="Help"
								link="/help"
								active={currentLocation === '/help'}
							/>
							<div
								className="secondary-font mt-4 w-100 bg-danger text-white p-2 rounded"
								style={{
									cursor: 'pointer',
								}}
								onClick={logout}
							>
								<LogoutOutlinedIcon style={{ fontSize: '24px' }} />
								LogOut
							</div>
						</div>
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
