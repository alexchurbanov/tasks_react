import '../styles/Board.sass';
import TaskBox from './TaskBox';
import NewTaskButton from "./NewTaskButton";
import {selectTaskBoxes} from "../store/reducer";
import {useAppSelector} from "../store/hooks";

function Board() {
	const taskBoxes = useAppSelector(selectTaskBoxes).map(item => {
		return <TaskBox key={item.id} id={item.id}/>
	})

	return (
		<div className='board'>
			{taskBoxes}
			<NewTaskButton/>
		</div>
	)
}


export default Board;