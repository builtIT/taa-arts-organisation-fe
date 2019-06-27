import React, { PureComponent } from 'react';
import Landing from './components/Landing';

import 'styles/index.scss';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Landing />
      </div>
    );
  }
}
