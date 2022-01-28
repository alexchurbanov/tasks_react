import '../styles/ProgressBar.sass';
import {useAppSelector} from "../store/hooks";
import {selectTasksByTaskBoxId} from "../store/slices/TaskSlice";
import {shallowEqual} from "react-redux";

interface ProgressBarProps {
	taskBoxId: string;
}

function ProgressBar({taskBoxId}: ProgressBarProps) {
	const selected = useAppSelector(state => selectTasksByTaskBoxId(state, taskBoxId), shallowEqual);
	if (!selected.length) return <></>;
	const completed = Math.floor(selected.filter(item => item.completed).length * 100 / selected.length);

	return (
		<div className='progress-container'>
			<div className='progress' style={{width: `${completed}%`}}>
				<span className='progress-label'
							style={{
								color: !completed ? "black" : "rgba(255, 255, 255, 0.87)",
								marginLeft: !completed ? '10px' : 0
							}}>{completed}%</span>
			</div>
		</div>
	)
}


export default ProgressBar;