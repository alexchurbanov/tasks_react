import '../styles/NewTaskButton.sass';

function NewTaskButton() {
	return (
		<div>
			<button className='add-button' onMouseDown={e => e.preventDefault()} title='Add new list'>+ Add New List</button>
		</div>
	)
}


export default NewTaskButton;