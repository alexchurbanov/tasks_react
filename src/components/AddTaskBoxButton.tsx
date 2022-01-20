import '../styles/NewTaskButton.sass';
import {addTaskBox} from '../store/slices/TaskBoxSlice';
import {useAppDispatch} from '../store/hooks';
import EditForm from "./EditForm";
import {useState} from "react";

function AddTaskBoxButton() {
	const dispatch = useAppDispatch();
	const [edit, setEdit] = useState(false);

	const handleSubmit = (newTitle: string) => {
		dispatch(addTaskBox({title: newTitle}));
		setEdit(false);
	}
	const handleCancel = () => {
		setEdit(false);
	}

	if (edit) return <EditForm title={''} handleCancel={handleCancel} handleSubmit={handleSubmit} color={'white'}/>;
	return (
		<div>
			<button className='add-button' onClick={() => setEdit(true)} title='Add new list'>+ Add New List</button>
		</div>
	)
}


export default AddTaskBoxButton;