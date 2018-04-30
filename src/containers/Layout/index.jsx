import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';

import Routes from '../Routes';

import Header from '../../components/common/Header.jsx';
import Footer from '../../components/common/Footer.jsx';

class Layout extends PureComponent {

  state = {
    header: {
      
    },
    footer: {
      about: [
        'ABOUT HOMEFOOD', 'Who we are', 'Blog',
        'Eco-Friendly Packaging', 'This Week’s Dishes',
      ],
      account: ['ACCOUNT', 'Sign up', 'My account'],
      support: ['SUPPORT', 'FAQ', 'Contacts'],
      socials: ['facebook', 'twitter', 'linkedin'],
    },
  };

  render() {

    return (
     <div className="wrapper">
        <Header />
        <main>
          <Routes />
        </main>
        <Footer items={this.state.footer}/>
			</div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default withRouter(connect(mapStateToProps, null)(Layout));
