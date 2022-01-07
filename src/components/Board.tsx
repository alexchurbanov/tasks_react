import '../styles/Board.sass';
import TaskBox from './TaskBox';
import NewTaskButton from "./NewTaskButton";

function Board() {
	return (
		<div className='board'>
			<TaskBox/>
			<NewTaskButton/>
		</div>
	)
}


export default Board;