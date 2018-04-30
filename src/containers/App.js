import React, { PureComponent } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import '../styles/App.scss';
import 'font-awesome/css/font-awesome.min.css';
import Layout from './Layout/index.jsx';

class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Route component={Layout} />
      </Switch>
    );
  }
}

export default withRouter(App);
