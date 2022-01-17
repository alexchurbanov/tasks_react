import '../styles/TaskItem.sass';
import {removeTask, TaskType, toggleComplete, changeTitle} from '../store/slices/TaskSlice';
import {useAppDispatch} from '../store/hooks';
import React, {useState} from "react";
import EditForm from "./EditForm";

interface TaskItemProps {
	item: TaskType
}

function TaskItem({item}: TaskItemProps) {
	const [edit, setEdit] = useState(false);
	const dispatch = useAppDispatch();

	const handleCheck = () => {
		dispatch(toggleComplete({taskId: item.id}))
	};
	const handleSubmit = (newTitle: string) => {
		dispatch(changeTitle({newTitle, taskId: item.id}));
		setEdit(false);
	}
	const handleCancel = () => {
		setEdit(false);
	}

	if (edit) return <EditForm title={item.title} handleSubmit={handleSubmit} handleCancel={handleCancel}/>;
	return (
		<li className='task-item'>
			<input type='checkbox' className='task-checkbox' checked={item.completed} onChange={handleCheck}/>
			<span className='task-title' onClick={() => setEdit(true)}>{item.title}</span>
			<button style={{width: '20px', height: '20px'}} onClick={() => dispatch(removeTask({taskId: item.id}))}>x</button>
		</li>
	)
}


export default TaskItem;