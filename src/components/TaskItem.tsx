import '../styles/TaskItem.sass';

function TaskItem() {
	return (
		<li className='task-item'>
			<input type="checkbox" className="task-checkbox"/>
			<span className='task-title'>Task Title</span>
		</li>
	)
}


export default TaskItem;