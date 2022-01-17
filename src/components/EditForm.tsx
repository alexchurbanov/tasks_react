import '../styles/EditForm.sass';
import React, {useState} from "react";


interface EditFormProps {
	title: string;
	handleCancel: () => any;
	handleSubmit: (newTitle: string) => any;
	styles?: object;
}

function EditForm(props: EditFormProps) {
	const [newTitle, setNewTitle] = useState(props.title);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!newTitle.trim()) return newTitle.trim();
		props.handleSubmit(newTitle);
	}
	const handleCancel = () => {
		props.handleCancel();
	}

	return (
		<form style={props.styles} className='edit-title-form' onSubmit={handleSubmit} onKeyDown={e => e.key === 'Escape' && handleCancel()}>
			<input autoFocus value={newTitle}
						 onChange={(e) => setNewTitle(e.target.value)}
						 placeholder={props.title} required/>
			<div className={'edit-two-buttons'}>
				<button type='submit'>ok</button>
				<button type='button' onClick={handleCancel}>x</button>
			</div>
		</form>
	)
}


export default EditForm;