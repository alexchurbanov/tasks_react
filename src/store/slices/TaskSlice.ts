import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {v4 as uuidv4} from 'uuid';
import {removeTaskBox} from "./TaskBoxSlice";

export interface TaskType {
	id: string;
	title: string;
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
		moveTask(state, action: PayloadAction<{ itemId: string, targetId: string, itemParentId: string, targetParentId: string }>) {
			const {itemId, targetId, itemParentId, targetParentId} = action.payload;
			const itemIndex = state.iDsByTaskBoxId[itemParentId].findIndex(value => value === itemId);
			const targetIndex = targetId ? state.iDsByTaskBoxId[targetParentId].findIndex(value => value === targetId) : 0;
			if (itemParentId === targetParentId) {
				state.iDsByTaskBoxId[targetParentId][targetIndex] = itemId;
				state.iDsByTaskBoxId[targetParentId][itemIndex] = targetId;
			} else {
				state.iDsByTaskBoxId[itemParentId].splice(itemIndex, 1);
				if (state.iDsByTaskBoxId[targetParentId]) state.iDsByTaskBoxId[targetParentId].splice(targetIndex, 0, itemId);
				else state.iDsByTaskBoxId[targetParentId] = [itemId];
			}
		},
		changeTitle(state, action: PayloadAction<{ newTitle: string, taskId: string }>) {
			const {newTitle, taskId} = action.payload;
			state.byId[taskId].title = newTitle;
		},
		removeTask(state, action: PayloadAction<{ taskId: string, taskBoxId: string }>) {
			const {taskId, taskBoxId} = action.payload;
			state.iDsByTaskBoxId[taskBoxId] = state.iDsByTaskBoxId[taskBoxId].filter(id => id !== taskId);
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

export const {addTask, toggleComplete, moveTask, removeTask, changeTitle} = taskSlice.actions;
export const selectTasks = (state: RootState) => state.task;
export const selectTasksByTaskBoxId = (state: RootState, taskBoxId: string) => state.task.iDsByTaskBoxId[taskBoxId]?.map(id => state.task.byId[id]) || [];

export default taskSlice.reducer;


