import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(<div>Here</div>, document.querySelector('#root'));

module.hot.accept();
