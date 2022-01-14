import '../styles/TaskList.sass';
import TaskItem from "./TaskItem";
import {TaskType} from "../store/slices/TaskBoxSlice";

interface TaskListProps {
	tasks: Array<TaskType>;
}

function TaskList({tasks} : TaskListProps) {
	const list = tasks.map(item => {
		return <TaskItem key={item.id} item={item}/>
	})
	return (
		<ul>
			{list}
		</ul>
	)
}


export default TaskList;