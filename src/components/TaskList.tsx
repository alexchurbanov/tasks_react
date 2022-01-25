import '../styles/TaskList.sass';
import TaskItem, {TaskDrag} from './TaskItem';
import {moveTask, selectTasksByTaskBoxId} from '../store/slices/TaskSlice';
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {useEffect, useState} from "react";
import {useDrop} from "react-dnd";
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
		drop: (dragItem: TaskDrag) => {
			dispatch(moveTask({
				itemId: dragItem.id,
				itemParentId: dragItem.parentId,
				targetId: '',
				targetParentId: taskBoxId,
			}))
		},
		collect: monitor => ({
			canDrop: monitor.canDrop(),
			hovered: monitor.isOver()
		}),
		canDrop: () => !selected.length
	});

	useEffect(() => {
		setTasks(selected);
	}, [selected]);

	return (
		<ul ref={drop}
				className={`task-list${canDrop && !selected.length ? ' droppable' : ''}${hovered && !selected.length ? ' hovered' : ''}`}>
			{tasks.map((item) => {
				return <TaskItem key={item.id} item={item} taskBoxId={taskBoxId}/>
			})}
		</ul>
	)
}


export default TaskList;