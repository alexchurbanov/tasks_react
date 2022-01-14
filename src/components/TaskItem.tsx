import '../styles/TaskItem.sass';
import {TaskType, toggleComplete} from "../store/slices/TaskSlice";
import {useAppDispatch} from "../store/hooks";

interface TaskItemProps {
	item: TaskType
}

function TaskItem({item}: TaskItemProps) {
	const dispatch = useAppDispatch();
	const handleCheck = () => {
		dispatch(toggleComplete({taskId: item.id}))
	}

	return (
		<li className='task-item'>
			<input type="checkbox" className="task-checkbox" checked={item.completed} onChange={handleCheck}/>
			<span className='task-title'>{item.title}</span>
		</li>
	)
}


export default TaskItem;