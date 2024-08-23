import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseUrl } from './registerSlice';

export const logoutFetch = createAsyncThunk('user/logout', async () => {
	const res = await fetch(`${baseUrl}/api/v1/user/logout`, {
		method: 'POST',
		credentials: true,
	});

	const data = await res.json();

	return data;
});

const initialState = {
	data: null,
	loading: false,
	error: null,
};

export const logoutSlice = createSlice({
	name: 'logout',
	initialState,
	reducers: {
		clearMessage: (state) => {
			state.error = null;
			state.data = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(logoutFetch.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(logoutFetch.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
				state.error = null;
			})
			.addCase(logoutFetch.rejected, (state, action) => {
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

// export const { clearMessage } = logoutFetch.actions;
export default logoutFetch.reducer;
