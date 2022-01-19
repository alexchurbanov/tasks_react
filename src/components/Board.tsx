import '../styles/Board.sass';
import TaskBox from './TaskBox';
import AddTaskBoxButton from './AddTaskBoxButton';
import {useAppSelector} from '../store/hooks';
import {selectTaskBoxes} from '../store/slices/TaskBoxSlice';
import {useDrop} from "react-dnd";

function Board() {
	const [,drop] = useDrop({
		accept: 'taskBox',
		drop: (dragItem) => {console.log(dragItem)},
	})
	const list = useAppSelector(selectTaskBoxes).map(item => {
		return <TaskBox key={item.id} item={item}/>;
	});

	return (
		<div className='board' ref={drop}>
			{list}
			<AddTaskBoxButton/>
		</div>
	)
}


export default Board;