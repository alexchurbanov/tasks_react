import '../styles/TaskList.sass';
import TaskItem from './TaskItem';
import {changeParent, selectTasksByTaskBoxId} from '../store/slices/TaskSlice';
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {useEffect, useState} from "react";
import {useDrop} from "react-dnd";
import {TaskDragItem} from "../types";
import {shallowEqual} from "react-redux";

interface TaskListProps {
	taskBoxId: string;
}

function TaskList({taskBoxId}: TaskListProps) {
	const selected = useAppSelector(state => selectTasksByTaskBoxId(state, taskBoxId), shallowEqual);
	const [tasks, setTasks] = useState(selected);
	const dispatch = useAppDispatch();
	const [{canDrop, hovered}, drop] = useDrop({
		accept: 'task',
		drop: (dragItem: TaskDragItem) => {
			if (!selected.length)
				dispatch(changeParent({
					odlParentId: dragItem.parentId,
					newParentId: taskBoxId,
					oldIndex: dragItem.index,
					newIndex: 0
				}))
		},
		collect: monitor => ({
			canDrop: monitor.canDrop(),
			hovered: monitor.isOver()
		})
	});

	useEffect(() => {
		setTasks(selected);
	}, [selected]);

	return (
		<ul ref={drop} className={`task-list${canDrop && !selected.length ? ' droppable' : ''}${hovered && !selected.length ? ' hovered' : ''}`}>
			{tasks.map((item, index) => {
				return <TaskItem key={item.id} item={item} index={index} taskBoxId={taskBoxId}/>
			})}
		</ul>
	)
}


export default TaskList;