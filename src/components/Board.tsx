import '../styles/Board.sass';
import TaskItem from "./TaskItem";
import NewTaskButton from "./NewTaskButton";

function Board() {
	return (
		<div className={'board'}>
			<TaskItem/>
			<NewTaskButton/>
		</div>
	)
}


export default Board;