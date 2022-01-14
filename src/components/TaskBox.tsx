import '../styles/TaskBox.sass';
import BoxTitle from './BoxTitle';
import TaskTable from './TaskTable';
import {TaskBoxType} from '../store/slices/TaskBoxSlice';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {selectTasksByTaskBoxId} from '../store/slices/TaskSlice';
import {deleteTaskBox} from "../store/actions";

interface TaskBoxProps {
	item: TaskBoxType
}

function TaskBox({item}: TaskBoxProps) {
	const dispatch = useAppDispatch();
	const tasks = useAppSelector(state => selectTasksByTaskBoxId(state, item.id));

	return (
		<div className='task-box'>
			<button style={{width: '20px', height: '20px'}} onClick={() => dispatch(deleteTaskBox(item.id))}/>
			<BoxTitle title={item.title}/>
			<TaskTable tasks={tasks} taskBoxId={item.id}/>
		</div>
	)
}


export default TaskBox;