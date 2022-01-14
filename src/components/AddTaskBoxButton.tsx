import '../styles/NewTaskButton.sass';
import {addTaskBox} from "../store/slices/TaskBoxSlice";
import {useAppDispatch} from "../store/hooks";

function AddTaskBoxButton() {
	const dispatch = useAppDispatch();

	return (
		<div>
			<button className='add-button' onClick={() => dispatch(addTaskBox())} title='Add new list'>+ Add New List</button>
		</div>
	)
}


export default AddTaskBoxButton;