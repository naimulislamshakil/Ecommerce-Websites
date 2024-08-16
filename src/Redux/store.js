import { configureStore } from '@reduxjs/toolkit';
import registersReducer from './Slice/registerSlice';
import loginReducer from './Slice/loginSlice';

export const store = configureStore({
	reducer: {
		register: registersReducer,
		login: loginReducer,
	},
});
