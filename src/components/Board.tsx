import '../styles/Board.sass';
import TaskBox from './TaskBox';
import AddTaskBoxButton from './AddTaskBoxButton';
import {useAppSelector} from '../store/hooks';
import {selectTaskBoxes} from '../store/slices/TaskBoxSlice';
import {useEffect, useState} from "react";

function Board() {
	const selected = useAppSelector(selectTaskBoxes);
	const [taskBoxes, setTaskBoxes] = useState(selected);
	useEffect(() => {
		setTaskBoxes(selected);
	}, [selected])

	return (
		<div className='board'>
			{taskBoxes.map((item, index) => {
				return <TaskBox key={item.id} item={item} index={index}/>;
			})}
			<AddTaskBoxButton/>
		</div>
	)
}


export default Board;