import React, { useEffect } from 'react';
import { useState } from 'react';
import useRefreshToken from '../Hooks/useRefreshToken';
import useAuth from '../Hooks/useAuth';
import { Outlet } from 'react-router-dom';

const PersistentLogin = () => {
	const [isLoading, setIsLoading] = useState(true);
	const refresh = useRefreshToken();
	const { auth } = useAuth();

	useEffect(() => {
		let isMounted = true;

		const verifyRefreshToken = async () => {
			try {
				await refresh();
			} catch (err) {
				console.error(err);
			} finally {
				isMounted && setIsLoading(false);
			}
		};

		// persist added here AFTER tutorial video
		// Avoids unwanted call to verifyRefreshToken
		!auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

		return () => (isMounted = false);
	}, []);

	return (
		<>
			{isLoading ? (
				<div class="spinner-border text-light" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
			) : (
				<Outlet />
			)}
		</>
	);
};

export default PersistentLogin;
