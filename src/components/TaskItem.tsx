import '../styles/TaskItem.sass';
import {TaskType} from "../store/slices/TaskBoxSlice";

interface TaskItemProps {
	item: TaskType
}

function TaskItem({item}: TaskItemProps) {
	return (
		<li className='task-item'>
			<input type="checkbox" className="task-checkbox" checked={item.completed}/>
			<span className='task-title'>{item.title}</span>
		</li>
	)
}


export default TaskItem;