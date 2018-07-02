import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppStream } from './AppStream';
import registerServiceWorker from './registerServiceWorker';

const basicProps = {
  text: 'text to test reactive x with react'
}

ReactDOM.render(<AppStream {...basicProps}/>, document.getElementById('reactive-root'));
registerServiceWorker();
