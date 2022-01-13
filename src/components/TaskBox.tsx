import '../styles/TaskBox.sass';
import BoxTitle from "./BoxTitle";
import TaskTable from "./TaskTable";
import {useAppSelector} from "../store/hooks";
import {TaskBoxType} from "../store/slices/TaskBoxSlice";

interface TaskBoxProps {
	item: TaskBoxType
}

function TaskBox({item}: TaskBoxProps) {

	return (
		<div className='task-box'>
			<BoxTitle title={item.title}/>
			<TaskTable/>
		</div>
	)
}


export default TaskBox;