import { configureStore } from '@reduxjs/toolkit';
import registersReducer from './Slice/registerSlice';
import loginReducer from './Slice/loginSlice';
import currentUserReducer from './Slice/currentUserSlice';
import { logoutSlice } from './Slice/logout';

export const store = configureStore({
	reducer: {
		register: registersReducer,
		login: loginReducer,
		currentUser: currentUserReducer,
		logout:logoutSlice
	},
});
