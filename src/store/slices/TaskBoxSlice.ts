import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {v4 as uuidv4} from 'uuid';
import {Basic} from '../../types';

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
		},
		removeTaskBox(state, action: PayloadAction<{ taskBoxId: string }>) {
			const {taskBoxId} = action.payload;
			delete state[taskBoxId];
		},
	}
})
export const {addTaskBox, removeTaskBox} = taskBoardSlice.actions;
export const selectTaskBoxes = (state: RootState) => Object.values(state.taskBox);

export default taskBoardSlice.reducer;
