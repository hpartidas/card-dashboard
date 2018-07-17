import React from 'react';
import ReactDOM from 'react-dom';
import './resources/index.css';
import App from './modules/App';
import registerServiceWorker from './workers/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
