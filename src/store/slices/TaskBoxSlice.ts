import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../store";
import {v4 as uuidv4} from "uuid";

export interface TaskBoxType {
	id: string;
	title: string;
	tasks: Array<string>;
}

interface State {
	[taskBoxID: string]: TaskBoxType;
}

const initialState: State = {
}

export const taskBoardSlice = createSlice({
	name: 'taskBox',
	initialState,
	reducers: {
		addTaskBox(state) {
			const taskBox: TaskBoxType = {
				id: uuidv4(),
				title: 'Title',
				tasks: []
			}
			state[taskBox.id] = taskBox;
		}
	}
})

export const {addTaskBox} = taskBoardSlice.actions;
export const selectTaskBoxes = (state: RootState) => state.taskBox

export default taskBoardSlice.reducer
