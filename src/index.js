import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWord from './hello';

ReactDOM.render(<HelloWord />, document.querySelector('#root'));

module.hot.accept();
