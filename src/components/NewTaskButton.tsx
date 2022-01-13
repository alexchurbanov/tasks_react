import '../styles/NewTaskButton.sass';
import {addTaskBox} from "../store/reducer";
import {useAppDispatch} from "../store/hooks";

function NewTaskButton() {
	const dispatch = useAppDispatch();

	return (
		<div>
			<button className='add-button' onClick={() => dispatch(addTaskBox())} title='Add new list'>+ Add New List</button>
		</div>
	)
}


export default NewTaskButton;