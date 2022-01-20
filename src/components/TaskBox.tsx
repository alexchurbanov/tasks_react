import '../styles/TaskBox.sass';
import BoxTitle from './BoxTitle';
import TaskTable from './TaskTable';
import {moveTaskBox, removeTaskBox, TaskBoxType} from '../store/slices/TaskBoxSlice';
import {useAppDispatch} from '../store/hooks';
import React, {useRef} from "react";
import {useDrag, useDrop} from "react-dnd";

interface TaskBoxProps {
	item: TaskBoxType;
	index: number;
}

interface DragItem {
	id: string;
	index: number;
}

function TaskBox({item, index}: TaskBoxProps) {
	const dispatch = useAppDispatch();
	const handleRef = useRef(null);
	const taskBoxRef = useRef(null);
	const [{isDragging}, drag, dragPreview] = useDrag({
		type: 'taskBox',
		item: {id: item.id, index},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		})
	});
	const [{canDrop, hovered}, drop] = useDrop({
		accept: 'taskBox',
		drop: (dragItem: DragItem) => {
			if (dragItem.index === index) return;
			dispatch(moveTaskBox({indexFrom: dragItem.index, indexTo: index}));
		},
		collect: monitor => ({
			canDrop: monitor.canDrop(),
			hovered: monitor.isOver({shallow: true})
		})
	})
	drag(handleRef);
	dragPreview(drop(taskBoxRef));

	return (
		<div
			className={`task-box ${isDragging ? 'dragging' : ''} ${canDrop ? 'droppable' : ''} ${hovered ? 'hovered' : ''}`}
			ref={taskBoxRef}>
			<div className='box-action-buttons'>
				<div className='drag-handle' ref={handleRef}/>
				<button className='delete-task-box' onClick={() => dispatch(removeTaskBox({taskBoxId: item.id}))}
								title='Remove list'>
					<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 256 256">
						<g transform="translate(128 128) scale(0.72 0.72)"><g style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(44,116,221)', fillRule: 'nonzero', opacity: 1}} transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"><path d="M 24.959 68.04 c -0.768 0 -1.536 -0.293 -2.121 -0.879 c -1.172 -1.171 -1.172 -3.071 0 -4.242 l 40.081 -40.081 c 1.172 -1.172 3.07 -1.172 4.242 0 c 1.172 1.171 1.172 3.071 0 4.242 L 27.081 67.161 C 26.495 67.747 25.727 68.04 24.959 68.04 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(44,116,221)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/><path d="M 65.04 68.04 c -0.768 0 -1.535 -0.293 -2.121 -0.879 L 22.838 27.081 c -1.172 -1.171 -1.172 -3.071 0 -4.242 c 1.171 -1.172 3.071 -1.172 4.242 0 l 40.081 40.081 c 1.172 1.171 1.172 3.071 0 4.242 C 66.575 67.747 65.808 68.04 65.04 68.04 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(44,116,221)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/><path d="M 45 90 C 20.187 90 0 69.813 0 45 C 0 20.187 20.187 0 45 0 c 24.813 0 45 20.187 45 45 C 90 69.813 69.813 90 45 90 z M 45 6 C 23.495 6 6 23.495 6 45 s 17.495 39 39 39 s 39 -17.495 39 -39 S 66.505 6 45 6 z" style={{stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(44,116,221)', fillRule: 'nonzero', opacity: 1}} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round"/></g></g>
					</svg>
				</button>
			</div>
			<BoxTitle title={item.title} taskBoxId={item.id}/>
			<TaskTable taskBoxId={item.id}/>
		</div>
	)
}


export default TaskBox;