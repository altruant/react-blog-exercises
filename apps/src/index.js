import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import A from './exercises/A/A_app.js';
import B from './exercises/B/B_app.js';
import C from './exercises/C/C_app.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <A />
    <B />
    <C />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
