import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseUrl } from './registerSlice';

export const loginFetch = createAsyncThunk('user/login', async (data) => {
	const res = await fetch(`${baseUrl}/api/v1/user/login`, {
		method: 'POST',
		// redirect: 'follow',
		credentials: 'include',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});

	const userData = await res.json();

	return userData;
});

const initialState = {
	data: null,
	loading: false,
	error: null,
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		clearMessage: (state) => {
			state.error = null;
			state.data = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginFetch.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(loginFetch.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
				state.error = null;
			})
			.addCase(loginFetch.rejected, (state, action) => {
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

export const { clearMessage } = loginSlice.actions;
export default loginSlice.reducer;
