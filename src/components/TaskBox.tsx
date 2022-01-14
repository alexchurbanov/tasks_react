import '../styles/TaskBox.sass';
import BoxTitle from "./BoxTitle";
import TaskTable from "./TaskTable";
import {TaskBoxType} from "../store/slices/TaskBoxSlice";

interface TaskBoxProps {
	item: TaskBoxType
}

function TaskBox({item}: TaskBoxProps) {
	const tasks = Object.values(item.tasks);
	return (
		<div className='task-box'>
			<BoxTitle title={item.title}/>
			<TaskTable tasks={tasks} taskBoxId={item.id}/>
		</div>
	)
}


export default TaskBox;