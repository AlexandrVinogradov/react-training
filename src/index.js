  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TrainingApp from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TrainingApp />, document.getElementById('root'));

serviceWorker.unregister();