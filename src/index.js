import React from 'react';
import ReactDOM from 'react-dom';
// import Routes from './routes';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App';

import registerServiceWorker from './registerServiceWorker';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
