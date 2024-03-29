/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/Cocogoose/Cocogoose-Pro-Block-Shadow-black-Trial.woff';
import './fonts/Cocogoose/Cocogoose-Pro-Letterpress-Trial.woff';
import State from './context/modal/State';

ReactDOM.render(
	<React.StrictMode>
		<State>
			<App />
		</State>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
