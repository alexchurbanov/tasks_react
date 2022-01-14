import '../styles/Board.sass';
import TaskBox from './TaskBox';
import AddTaskBoxButton from "./AddTaskBoxButton";
import {useAppSelector} from "../store/hooks";
import {selectTaskBoxes} from "../store/slices/TaskBoxSlice";

function Board() {
	const taskBoxes = useAppSelector(selectTaskBoxes);
	const list = Object.entries(taskBoxes).map(item => {
		const [id, taskBox] = item;
		return <TaskBox key={id} item={taskBox}/>;
	});

	return (
		<div className='board'>
			{list}
			<AddTaskBoxButton/>
		</div>
	)
}


export default Board;