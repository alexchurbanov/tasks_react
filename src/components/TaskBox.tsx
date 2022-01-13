import '../styles/TaskBox.sass';
import BoxTitle from "./BoxTitle";
import TaskTable from "./TaskTable";
import {useAppSelector} from "../store/hooks";
import {selectTaskBoxByID} from "../store/reducer";

interface TaskBoxProps {
	id: string;
}

function TaskBox({id}: TaskBoxProps) {
	const taskBox = useAppSelector((state) => {
		return selectTaskBoxByID(state, id) || {title: ''};
	});
	return (
		<div className='task-box'>
			<BoxTitle title={taskBox.title}/>
			<TaskTable/>
		</div>
	)
}


export default TaskBox;