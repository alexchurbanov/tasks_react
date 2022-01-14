import '../styles/TaskTable.sass';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import {TaskType} from '../store/slices/TaskSlice';

interface TaskTableProps {
	tasks: Array<TaskType>;
	taskBoxId: string;
}

function TaskTable({tasks, taskBoxId}: TaskTableProps) {
	return (
		<div className='task-table'>
			<TaskForm taskBoxId={taskBoxId}/>
			<TaskList tasks={tasks}/>
		</div>
	)
}


export default TaskTable;