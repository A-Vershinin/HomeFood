import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import routes from '../constants/routes';

import HomePage from './features/HomePage/index.jsx';
import NotDefinedPage from './features/NotDefinedPage/index.jsx';

class Routes extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path={routes.INDEX_ROUTE} component={HomePage} />
        <Route path={routes.NOT_DEFINED_PAGE_ROUTE} component={NotDefinedPage} />
      </Switch>
    );
  }
}


export default withRouter(Routes);
