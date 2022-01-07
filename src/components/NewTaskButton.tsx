import '../styles/NewTaskButton.sass';

function NewTaskButton() {
	return (
		<div>
			<button className={'addButton'} onMouseDown={e => e.preventDefault()}>+ Add New List</button>
		</div>
	)
}


export default NewTaskButton;