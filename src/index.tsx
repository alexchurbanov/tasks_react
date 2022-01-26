import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/index.sass';
import Board from './components/Board';
import {store} from './store/store';
import {Provider} from 'react-redux';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {TouchBackend} from "react-dnd-touch-backend";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<DndProvider backend={window.matchMedia("only screen and (max-width: 760px)").matches ? TouchBackend : HTML5Backend}>
				<Board/>
			</DndProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
