import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {v4 as uuidv4} from 'uuid';
import {Basic} from '../../types';
import {removeTaskBox} from "./TaskBoxSlice";

export interface TaskType extends Basic {
	taskBoxId: string;
	completed: boolean;
}

interface State {
	[taskId: string]: TaskType;
}

const initialState: State = {};

export const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		addTask(state, action: PayloadAction<{ title: string, taskBoxId: string }>) {
			const {taskBoxId, title} = action.payload;
			const task: TaskType = {
				id: uuidv4(),
				taskBoxId,
				title,
				completed: false,
			}
			state[task.id] = task;
		},
		toggleComplete(state, action: PayloadAction<{ taskId: string }>) {
			const {taskId} = action.payload;
			state[taskId].completed = !state[taskId].completed;
		},
		changeParent(state, action: PayloadAction<{ taskId: string, newParentId: string }>) {
			const {taskId, newParentId} = action.payload;
			state[taskId].taskBoxId = newParentId;
		},
		changeTitle(state, action: PayloadAction<{ newTitle: string, taskId: string }>) {
			const {newTitle, taskId} = action.payload;
			state[taskId].title = newTitle;
		},
		removeTask(state, action: PayloadAction<{ taskId: string }>) {
			const {taskId} = action.payload;
			delete state[taskId];
		},
	},
	extraReducers: builder => {
		builder.addCase(removeTaskBox, (state, action) => {
			const {taskBoxId} = action.payload;
			Object.values(state).forEach(item => {
				if (item.taskBoxId === taskBoxId) delete state[item.id];
			})
		})
	}
})

export const {addTask, toggleComplete, changeParent, removeTask, changeTitle} = taskSlice.actions;
export const selectTasks = (state: RootState) => state.task;
export const selectTasksByTaskBoxId = (state: RootState, taskBoxId: string) => Object.values(state.task).filter(item => item.taskBoxId === taskBoxId);

export default taskSlice.reducer;


