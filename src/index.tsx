import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/index.sass';
import Board from './components/Board';
import {store} from './store/store';
import {Provider} from 'react-redux';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Board/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
