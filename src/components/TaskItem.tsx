import '../styles/TaskItem.sass';
import TaskTitle from "./TaskTitle";
import TaskTable from "./TaskTable";

function TaskItem() {
	return (
		<div>
			<TaskTitle/>
			<TaskTable/>
		</div>
	)
}


export default TaskItem;