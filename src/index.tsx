import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles/index.sass';
import Board from './components/Board';
import reportWebVitals from './reportWebVitals';
import {store} from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Board/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
