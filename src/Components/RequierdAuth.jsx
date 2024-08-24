import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequierdAuth = ({ allowedRole }) => {
	const { auth } = useAuth();
	const location = useLocation();

	return auth?.user?.roll?.find((r) => allowedRole?.includes(r)) ? (
		<Outlet />
	) : auth?.user ? (
		<Navigate to="/unauthorized" state={{ from: location }} replace />
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
};

export default RequierdAuth;
