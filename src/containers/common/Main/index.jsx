import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Main from '../../../components/common/Main.jsx';


class MainContainer extends PureComponent {
  render() {
    return (<Main {...this.props}/>);
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapStateToDispatch = (dispatch) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Main));
