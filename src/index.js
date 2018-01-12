import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContentArea from './ContentArea';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ContentArea />, document.getElementById('root'));
registerServiceWorker();
