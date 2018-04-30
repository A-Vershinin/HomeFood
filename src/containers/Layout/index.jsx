import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';

import Routes from '../Routes';

import Header from '../../components/common/Header.jsx';
import Footer from '../../components/common/Footer.jsx';

class Layout extends PureComponent {
  render() {
    
    return (
     <div className="wrapper">
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />
			</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default withRouter(connect(mapStateToProps, null)(Layout));
