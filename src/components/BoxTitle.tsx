import '../styles/BoxTitle.sass';
import React, {useState} from 'react';
import {changeTitle} from "../store/slices/TaskBoxSlice";
import {useAppDispatch} from "../store/hooks";
import EditForm from "./EditForm";

interface BoxTitleProps {
	title: string;
	taskBoxId: string;
}

function BoxTitle({title, taskBoxId}: BoxTitleProps) {
	const [edit, setEdit] = useState(false);
	const dispatch = useAppDispatch();

	const handleSubmit = (newTitle: string) => {
		dispatch(changeTitle({newTitle, taskBoxId}));
		setEdit(false);
	}
	const handleCancel = () => {
		setEdit(false);
	}

	if (edit) return <EditForm title={title} handleSubmit={handleSubmit} handleCancel={handleCancel}/>;
	return (
		<div className='box-title' onClick={() => setEdit(true)}>
			<span>{title}</span>
		</div>
	)
}


export default BoxTitle;