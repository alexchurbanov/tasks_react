import '../styles/Board.sass';
import TaskBox from './TaskBox';
import AddTaskBoxButton from "./AddTaskBoxButton";
import {useAppSelector} from "../store/hooks";
import {selectTaskBoxes} from "../store/slices/TaskBoxSlice";

function Board() {
	const list = useAppSelector(selectTaskBoxes).map(item => {
		return <TaskBox key={item.id} item={item}/>;
	});

	return (
		<div className='board'>
			{list}
			<AddTaskBoxButton/>
		</div>
	)
}


export default Board;