import React from 'react';
import useAuth from '../../Hooks/useAuth';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Link } from 'react-router-dom';

const Sidebar = ({ children }) => {
	const { auth } = useAuth();
	return (
		<>
			<aside className="h-100">
				<nav className="h-100 d-flex flex-column bg-white border-end shadow-md">
					<div className="p-4 pb-2 flex justify-content-between align-items-center">
						<h5 className="primary-font">
							Hello, {auth?.user?.name.split(' ')[0]}
						</h5>
					</div>

					<ul className="flex-1 px-3 border-top">{children}</ul>

					<div className="border-top d-flex p-3 justify-content-between mt-auto border-bottom">
						<div>
							<h5 className="primary-font">{auth?.user?.name}</h5>
							<p className="primary-font">{auth?.user?.email}</p>
						</div>
						<MoreVertOutlinedIcon style={{ fontSize: '20px' }} />
					</div>
				</nav>
			</aside>
		</>
	);
};

export function SidebarItem({ icon, text, active, alert, link }) {
	return (
		<li className="list-inline-item w-100 mt-4">
			<Link
				className={`text-decoration-none text-dark secondary-font d-flex align-items-center ${
					active && 'bg-success p-2 text-white rounded'
				}`}
				style={{ fontSize: '16px' }}
				to={link}
			>
				{icon}
				<span className="ms-2">{text}</span>
			</Link>
		</li>
	);
}

export default Sidebar;
