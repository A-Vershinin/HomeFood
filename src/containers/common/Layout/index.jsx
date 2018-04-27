import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Layout from '../../../components/common/Layout.jsx';

class LayoutContainer extends PureComponent {
  render() {
    return (
     <React.Fragment>
				<Layout {...this.props}/>
			</React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default withRouter(connect(mapStateToProps, null)(LayoutContainer));
