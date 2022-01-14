import '../styles/TaskBox.sass';
import BoxTitle from './BoxTitle';
import TaskTable from './TaskTable';
import {TaskBoxType} from '../store/slices/TaskBoxSlice';
import {useAppSelector} from '../store/hooks';
import {selectTasksByTaskBoxId} from '../store/slices/TaskSlice';

interface TaskBoxProps {
	item: TaskBoxType
}

function TaskBox({item}: TaskBoxProps) {
	const tasks = useAppSelector(state => selectTasksByTaskBoxId(state, item.id));

	return (
		<div className='task-box'>
			<BoxTitle title={item.title}/>
			<TaskTable tasks={tasks} taskBoxId={item.id}/>
		</div>
	)
}


export default TaskBox;