import {configureStore} from '@reduxjs/toolkit';
import taskBox from "./slices/TaskBoxSlice";

export const store = configureStore({
	reducer: {
		taskBox
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
