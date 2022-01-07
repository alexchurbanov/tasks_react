import '../styles/TaskBox.sass';
import BoxTitle from "./BoxTitle";
import TaskTable from "./TaskTable";

function TaskBox() {
	return (
		<div className='task-box'>
			<BoxTitle/>
			<TaskTable/>
		</div>
	)
}


export default TaskBox;