import '../styles/BoxTitle.sass';
import {useState} from "react";

interface BoxTitleProps {
	title: string;
}

function BoxTitle({title}: BoxTitleProps) {
	const [edit, setEdit] = useState(false);

	const handleEdit = () => {
		setEdit(!edit);
	}

	return (
		<div className='box-title' onClick={handleEdit}>
			<span>{title}</span>
		</div>
	)
}


export default BoxTitle;