import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from './registerSlice';

export const currentUserFetch = createAsyncThunk(
	'user/current_user',
	async () => {
		const res = await fetch(`${baseUrl}/api/v1/user/current_user`, {
			method: 'GET',
			credentials: 'include',
		});
		const data = await res.json();

		if (data?.statusCode === 200) {
			return data;
		}

		if (data?.statusCode !== 200) {
			const res = await fetch(`${baseUrl}/api/v1/user/refresh_token`, {
				method: 'POST',
				credentials: 'include',
			});
			const data = await res.json();

			return data;
		}
	}
);

const initialState = {
	data: null,
	loading: false,
	error: null,
};

export const currentUserSlice = createSlice({
	name: 'current_user',
	initialState,
	reducers: {
		clearMessage: (state) => {
			state.error = null;
			state.data = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(currentUserFetch.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(currentUserFetch.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
				state.error = null;
			})
			.addCase(currentUserFetch.rejected, (state, action) => {
				state.loading = false;
				if (action.error.message === 'Request failed with status code 409') {
					state.error = 'User Already Exist.';
				} else {
					state.error = action.error.message;
				}
				state.data = null;
			});
	},
});

export const { clearMessage } = currentUserSlice.actions;
export default currentUserSlice.reducer;
