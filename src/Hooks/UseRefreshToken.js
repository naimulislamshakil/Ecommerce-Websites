import axios from '../Utils/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
	const { setAuth } = useAuth();

	const refresh = async () => {
		const response = await axios.get('/api/v1/user/refresh_token', {
			withCredentials: true,
		});
		setAuth((prev) => {
			return {
				...prev,
				roles: response.data.roles,
				accessToken: response.data.accessToken,
			};
		});
		return response.data.accessToken;
	};
	return refresh;
};

export default useRefreshToken;
