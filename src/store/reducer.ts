import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "./store";
import {v4 as uuidv4} from "uuid";

interface Basic {
	id: string;
	title: string;
}

interface Task extends Basic {
	completed: boolean;
}

interface TaskBox extends Basic {
	tasks: Array<Task>;
}

interface Board {
	taskBoxes: Array<TaskBox>
}

const initialState: Board = {
	taskBoxes: []
}

export const boardSlice = createSlice({
	name: 'Board',
	initialState,
	reducers: {
		addTaskBox(state) {
			const taskBox: TaskBox = {
				id: uuidv4(),
				title: 'Default',
				tasks: []
			}
			state.taskBoxes.push(taskBox);
		}
	}
})

export const {addTaskBox} = boardSlice.actions;
export const selectTaskBoxes = (state: RootState) => state.board.taskBoxes;
export const selectTaskBoxByID = (state: RootState, id: string) => state.board.taskBoxes.find(item => item.id === id);


export default boardSlice.reducer
