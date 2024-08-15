import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const baseUrl = 'http://localhost:5000';

export const registerFetch = createAsyncThunk('auth/addUser', async (data) => {
	axios.defaults.withCredentials = true;
	const responce = await axios.post(`${baseUrl}/api/v1/user/register`, data);

	return responce.data;
});

const initialState = {
	data: null,
	loading: false,
	error: null,
};

export const registerslice = createSlice({
	name: 'github_issues',
	initialState,
	reducers: {
		clearMessage: (state) => {
			console.log({ state });
			state.error = null;
			state.data = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerFetch.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(registerFetch.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
				state.error = null;
			})
			.addCase(registerFetch.rejected, (state, action) => {
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

export const { clearMessage } = registerslice.actions;

export default registerslice.reducer;
