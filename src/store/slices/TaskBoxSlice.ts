import {createSlice} from '@reduxjs/toolkit';
import {RootState} from "../store";
import {v4 as uuidv4} from "uuid";
import { Basic } from '../../types';

export interface TaskBoxType extends Basic {
}

interface State {
	[taskBoxId: string]: TaskBoxType;
}

const initialState: State = {};

export const taskBoardSlice = createSlice({
	name: 'taskBox',
	initialState,
	reducers: {
		addTaskBox(state) {
			const taskBox: TaskBoxType = {
				id: uuidv4(),
				title: 'Title'
			}
			state[taskBox.id] = taskBox;
		}
	}
})
export const {addTaskBox} = taskBoardSlice.actions;
export const selectTaskBoxes = (state: RootState) => state.taskBox;

export default taskBoardSlice.reducer
