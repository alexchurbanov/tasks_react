import {configureStore} from '@reduxjs/toolkit';
import taskBox from "./slices/TaskBoxSlice";
import task from './slices/TaskSlice'

export const store = configureStore({
	reducer: {
		taskBox,
		task
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
