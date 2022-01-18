import '../styles/TaskList.sass';
import TaskItem from './TaskItem';
import {selectTasksByTaskBoxId} from '../store/slices/TaskSlice';
import {useAppSelector} from "../store/hooks";

interface TaskListProps {
	taskBoxId: string;
}

function TaskList({taskBoxId}: TaskListProps) {
	const list = useAppSelector(state => selectTasksByTaskBoxId(state, taskBoxId)).map(item => {
		return <TaskItem key={item.id} item={item}/>
	});

	return (
		<ul>
			{list}
		</ul>
	)
}


export default TaskList;