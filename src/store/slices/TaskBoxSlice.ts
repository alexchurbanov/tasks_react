import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {v4 as uuidv4} from 'uuid';
import {Basic} from '../../types';

export interface TaskBoxType extends Basic {
}

interface State {
	byId: {
		[taskBoxId: string]: TaskBoxType;
	}
	listOfIds: string[];
}

const initialState: State = {
	byId: {},
	listOfIds: []
};

export const taskBoardSlice = createSlice({
	name: 'taskBox',
	initialState,
	reducers: {
		addTaskBox(state, action: PayloadAction<{ title: string }>) {
			const {title} = action.payload;
			const taskBox: TaskBoxType = {
				id: uuidv4(),
				title
			}
			state.byId[taskBox.id] = taskBox;
			state.listOfIds.push(taskBox.id);
		},
		removeTaskBox(state, action: PayloadAction<{ taskBoxId: string }>) {
			const {taskBoxId} = action.payload;
			delete state.byId[taskBoxId];
			state.listOfIds = state.listOfIds.filter(id => id !== taskBoxId);
		},
		changeTitle(state, action: PayloadAction<{ newTitle: string, taskBoxId: string }>) {
			const {newTitle, taskBoxId} = action.payload;
			state.byId[taskBoxId].title = newTitle;
		},
		moveTaskBox(state, action: PayloadAction<{ indexFrom: number, indexTo: number }>) {
			const {indexFrom, indexTo} = action.payload;
			const temp = state.listOfIds[indexTo];
			state.listOfIds[indexTo] = state.listOfIds[indexFrom];
			state.listOfIds[indexFrom] = temp;
		}
	}
})
export const {addTaskBox, removeTaskBox, changeTitle, moveTaskBox} = taskBoardSlice.actions;
export const selectTaskBoxes = (state: RootState) => state.taskBox.listOfIds.map(id => state.taskBox.byId[id]);

export default taskBoardSlice.reducer;
