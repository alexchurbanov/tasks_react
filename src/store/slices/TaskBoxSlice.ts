import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "../store";
import {v4 as uuidv4} from "uuid";

interface Basic {
	id: string;
	title: string;
}

export interface TaskBoxType extends Basic {
	tasks: {
		[taskId: string]: TaskType;
	};
}

export interface TaskType extends Basic {
	completed: boolean;
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
				title: 'Title',
				tasks: {}
			}
			state[taskBox.id] = taskBox;
		},
		addTask(state, action: PayloadAction<{ title: string, taskBoxId: string }>) {
			const {taskBoxId, title} = action.payload;
			const task: TaskType = {
				id: uuidv4(),
				title,
				completed: false
			}
			state[taskBoxId].tasks[task.id] = task;
		}
	}
})

export const {addTaskBox, addTask} = taskBoardSlice.actions;
export const selectTaskBoxes = (state: RootState) => state.taskBox;

export default taskBoardSlice.reducer
