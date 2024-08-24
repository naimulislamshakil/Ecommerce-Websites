import axios from '../Utils/axios';
import useAuth from './useAuth';

const UseRefreshToken = () => {
	const { setAuth } = useAuth();

	const refresh = async () => {
		const res = await axios.get('/api/v1/user/refresh_token', {
			withCredentials: true,
		});

		const accessToken = res?.data?.data?.accessToken;
		const refreshToken = res?.data?.data?.refreshToken;
		const user = res?.data?.data?.user;

		setAuth({ accessToken, refreshToken, user });

		return res?.data?.data?.accessToken;
	};

	return refresh;
};

export default UseRefreshToken;
