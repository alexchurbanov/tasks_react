import '../styles/TaskTable.sass';
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function TaskTable() {
	return (
		<div className='task-table'>
			<TaskForm/>
			<TaskList/>
		</div>
	)
}


export default TaskTable;