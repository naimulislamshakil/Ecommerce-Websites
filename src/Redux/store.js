import { configureStore } from '@reduxjs/toolkit';
import registersReducer from './Slice/registerSlice';

export const store = configureStore({
	reducer: {
		register: registersReducer,
	},
});
