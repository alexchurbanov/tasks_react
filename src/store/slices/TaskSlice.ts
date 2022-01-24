import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {v4 as uuidv4} from 'uuid';
import {Basic} from '../../types';
import {removeTaskBox} from "./TaskBoxSlice";

export interface TaskType extends Basic {
	completed: boolean;
}

interface State {
	byId: {
		[taskId: string]: TaskType;
	},
	iDsByTaskBoxId: {
		[taskBoxId: string]: string[]
	}
}

const initialState: State = {
	byId: {},
	iDsByTaskBoxId: {},
};

export const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		addTask(state, action: PayloadAction<{ title: string, taskBoxId: string }>) {
			const {taskBoxId, title} = action.payload;
			const task: TaskType = {
				id: uuidv4(),
				title,
				completed: false,
			}
			state.byId[task.id] = task
			if (!state.iDsByTaskBoxId[taskBoxId]) state.iDsByTaskBoxId[taskBoxId] = [];
			state.iDsByTaskBoxId[taskBoxId].push(task.id);
		},
		toggleComplete(state, action: PayloadAction<{ taskId: string }>) {
			const {taskId} = action.payload;
			state.byId[taskId].completed = !state.byId[taskId].completed;
		},
		changeParent(state, action: PayloadAction<{ oldIndex: number, newIndex: number, odlParentId: string, newParentId: string }>) {
			const {oldIndex, newIndex, newParentId, odlParentId} = action.payload;
			const [removed] = state.iDsByTaskBoxId[odlParentId].splice(oldIndex, 1);
			if (state.iDsByTaskBoxId[newParentId]) state.iDsByTaskBoxId[newParentId].splice(newIndex, 0, removed);
			else state.iDsByTaskBoxId[newParentId] = [removed];
		},
		changeTitle(state, action: PayloadAction<{ newTitle: string, taskId: string }>) {
			const {newTitle, taskId} = action.payload;
			state.byId[taskId].title = newTitle;
		},
		removeTask(state, action: PayloadAction<{ taskId: string, taskBoxId: string, index: number}>) {
			const {taskId, taskBoxId, index} = action.payload;
			state.iDsByTaskBoxId[taskBoxId].splice(index, 1);
			delete state.byId[taskId];
		},
	},
	extraReducers: builder => {
		builder.addCase(removeTaskBox, (state, action) => {
			const {taskBoxId} = action.payload;
			state.iDsByTaskBoxId[taskBoxId]?.forEach(id => delete state.byId[id]);
			delete state.iDsByTaskBoxId[taskBoxId];
		})
	}
})

export const {addTask, toggleComplete, changeParent, removeTask, changeTitle} = taskSlice.actions;
export const selectTasks = (state: RootState) => state.task;
export const selectTasksByTaskBoxId = (state: RootState, taskBoxId: string) => state.task.iDsByTaskBoxId[taskBoxId]?.map(id => state.task.byId[id]) || [];

export default taskSlice.reducer;


