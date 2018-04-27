import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import routes from '../constants/routes.js';

// import HomePage from './features/HomePage/index.js';
// import NotDefinedPage from './features/NotDefinedPage/index.js';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        { /* <Route exact path={routes.INDEX_ROUTE} component={HomePage} /> */}
        { /* <Route path={routes.NOT_DEFINED_PAGE_ROUTE} component={NotDefinedPage} /> */}
      </Switch>
    );
  }
}


export default withRouter(Routes);
