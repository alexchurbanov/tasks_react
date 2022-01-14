import '../styles/TaskForm.sass';
import {useAppDispatch} from "../store/hooks";
import React, {useState} from "react";
import {addTask} from "../store/slices/TaskBoxSlice";

interface TaskFormProps {
	taskBoxId: string;
}

function TaskForm({taskBoxId}: TaskFormProps) {
	const dispatch = useAppDispatch();
	const [taskTitle, setTaskTitle] = useState('');

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(addTask({title: taskTitle, taskBoxId}));
		setTaskTitle('');
	}

	return (
		<form className='task-form' onSubmit={handleSubmit}>
			<input className='form-input' value={taskTitle} onChange={event => setTaskTitle(event.target.value)} required/>
			<button className='form-button' title='Add new task'>+</button>
		</form>
	)
}


export default TaskForm;