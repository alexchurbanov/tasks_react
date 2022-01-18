import '../styles/TaskTable.sass';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

interface TaskTableProps {
	taskBoxId: string;
}

function TaskTable({taskBoxId}: TaskTableProps) {
	return (
		<div className='task-table'>
			<TaskForm taskBoxId={taskBoxId}/>
			<TaskList taskBoxId={taskBoxId}/>
		</div>
	)
}


export default TaskTable;