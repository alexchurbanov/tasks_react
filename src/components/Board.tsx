import '../styles/Board.sass';
import TaskBox from './TaskBox';
import NewTaskButton from "./NewTaskButton";
import {useAppSelector} from "../store/hooks";
import {selectTaskBoxes} from "../store/slices/TaskBoxSlice";

function Board() {
	const taskBoxes = useAppSelector(selectTaskBoxes);
	const list = Object.entries(taskBoxes).map(item => {
		const [id, taskBox] = item;
		return (
			<TaskBox key={id} item={taskBox}/>
		)
	});

	return (
		<div className='board'>
			{list}
			<NewTaskButton/>
		</div>
	)
}


export default Board;