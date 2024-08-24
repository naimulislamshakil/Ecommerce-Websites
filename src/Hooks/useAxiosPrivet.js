import { useEffect } from 'react';
import { axiosPrivate } from '../Utils/axios';
import useAuth from './useAuth';
import UseRefreshToken from './UseRefreshToken';

const useAxoisPrivate = () => {
	const refresh = UseRefreshToken();
	const { auth } = useAuth();

	useEffect(() => {
		const requestTntercept = axiosPrivate.interceptors.request.use(
			(config) => {
				if (!config.headers['Authorization']) {
					config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
				}
				return config;
			},
			(err) => Promise.reject(err)
		);

		const responceIntercept = axiosPrivate.interceptors.response.use(
			(res) => res,
			async (err) => {
				const prevRequest = err?.config;

				if (err?.response?.status === 401 && !prevRequest?.send) {
					prevRequest.send = true;
					const accessToken = await refresh();
					prevRequest.headers['Authorization'] = `Bearer ${accessToken}`;

					return axiosPrivate(prevRequest);
				}
				return Promise.reject(err);
			}
		);

		return () => {
			axiosPrivate.interceptors.request.eject(requestTntercept);
			axiosPrivate.interceptors.response.eject(responceIntercept);
		};
	}, [auth, refresh]);

	return axiosPrivate;
};

export default useAxoisPrivate;
