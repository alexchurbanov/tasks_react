import {AppDispatch} from "./store";
import {removeTasksByTaskBoxId} from "./slices/TaskSlice";
import {removeTaskBox} from "./slices/TaskBoxSlice";


export function deleteTaskBox(taskBoxId: string) {
	return (dispatch: AppDispatch) => {
		dispatch(removeTaskBox({taskBoxId}));
		dispatch(removeTasksByTaskBoxId({taskBoxId}));
	}
}