import '../styles/TaskBox.sass';
import BoxTitle from './BoxTitle';
import TaskTable from './TaskTable';
import {TaskBoxType} from '../store/slices/TaskBoxSlice';
import {useAppDispatch} from '../store/hooks';
import {deleteTaskBoxWithTasks} from "../store/actions";

interface TaskBoxProps {
	item: TaskBoxType
}

function TaskBox({item}: TaskBoxProps) {
	const dispatch = useAppDispatch();

	return (
		<div className='task-box'>
			<button style={{width: '20px', height: '20px'}} onClick={() => dispatch(deleteTaskBoxWithTasks(item.id))}>x</button>
			<BoxTitle title={item.title} taskBoxId={item.id}/>
			<TaskTable taskBoxId={item.id}/>
		</div>
	)
}


export default TaskBox;