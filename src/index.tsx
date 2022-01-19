import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/index.sass';
import Board from './components/Board';
import {store} from './store/store';
import {Provider} from 'react-redux';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

ReactDOM.render(
	<React.StrictMode>
		<DndProvider backend={HTML5Backend}>
			<Provider store={store}>
				<Board/>
			</Provider>
		</DndProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
