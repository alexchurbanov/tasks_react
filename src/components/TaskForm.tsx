import '../styles/TaskForm.sass';

function TaskForm() {
	return (
		<form className='task-form'>
			<input className='form-input'/>
			<button className='form-button' type='button'>+</button>
		</form>
	)
}


export default TaskForm;