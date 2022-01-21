import '../styles/EditForm.sass';
import React, {useState} from "react";


interface EditFormProps {
	title: string;
	handleCancel: () => any;
	handleSubmit: (newTitle: string) => any;
	color? : string
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
		<form className='edit-title-form' onSubmit={handleSubmit}
					onKeyDown={e => e.key === 'Escape' && handleCancel()}>
			<input autoFocus value={newTitle}
						 onChange={(e) => setNewTitle(e.target.value)}
						 placeholder={props.title} required style={props.color ? {color: props.color} : {}}/>
			<div className='edit-two-buttons'>
				<button type='submit' className='confirm-button'>
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 256 256">
						<g transform="translate(128 128) scale(0.72 0.72)"><g style={{stroke: 'none', strokeWidth: 0, strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: 10, fill: "none", fillRule: "nonzero", opacity: 1}} transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"><circle cx="45" cy="45" r="45" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(44,116,221)', fillRule: 'nonzero', opacity: 1}} transform="  matrix(1 0 0 1 0 0) "/><path d="M 38.478 66 c -0.013 0 -0.026 0 -0.039 0 c -1.733 -0.012 -3.377 -0.771 -4.508 -2.085 L 20.453 48.263 c -2.162 -2.511 -1.879 -6.299 0.632 -8.462 c 2.51 -2.163 6.299 -1.879 8.462 0.632 l 8.991 10.441 l 21.967 -24.848 c 2.194 -2.485 5.988 -2.716 8.469 -0.521 c 2.483 2.195 2.717 5.986 0.521 8.469 l -26.522 30 C 41.834 65.263 40.197 66 38.478 66 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/></g></g>
					</svg>
				</button>
				<button type='button' className='cancel-button' onClick={handleCancel}>
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 256 256">
						<g transform="translate(128 128) scale(0.72 0.72)"><g style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1}} transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"><path d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(236,0,0)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/><path d="M 61.5 65.5 c -1.023 0 -2.048 -0.391 -2.828 -1.172 l -33 -33 c -1.562 -1.563 -1.562 -4.095 0 -5.657 c 1.563 -1.562 4.095 -1.562 5.657 0 l 33 33 c 1.563 1.562 1.563 4.095 0 5.656 C 63.548 65.109 62.523 65.5 61.5 65.5 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/><path d="M 28.5 65.5 c -1.024 0 -2.047 -0.391 -2.829 -1.172 c -1.562 -1.562 -1.562 -4.095 0 -5.656 l 33 -33 c 1.561 -1.562 4.096 -1.562 5.656 0 c 1.563 1.563 1.563 4.095 0 5.657 l -33 33 C 30.547 65.109 29.524 65.5 28.5 65.5 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255,255,255)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/></g></g>
					</svg>
				</button>
			</div>
		</form>
	)
}


export default EditForm;