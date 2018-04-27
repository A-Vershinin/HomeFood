import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';

import Routes from '../Routes';

import Header from '../../components/common/Header/Header.jsx';
import Footer from '../../components/common/Footer/Footer.jsx';

class Layout extends PureComponent {
  render() {

    return (
     <div className="page-container">
        <Header />
        <div>
          <Routes />
        </div>
        <Footer />
			</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default withRouter(connect(mapStateToProps, null)(Layout));
