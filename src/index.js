import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var rootDestination = document.querySelector('#root');

ReactDOM.render(<App />, rootDestination);
registerServiceWorker();
