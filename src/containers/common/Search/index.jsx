import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Search from '../../../components/common/Search.jsx';

class SearchContainer extends PureComponent {
  state = {
    search: '',
  };

  handleChange = event => {
    this.setState({ search:  event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state.search)
    // this.props.searchCity(this.state.search)
  };

  render() {
    return (<Search {...this.props}
      onHandleChange={this.handleChange}
      onHandleSubmit={this.handleSubmit}
    />);
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    searchCity: () => dispatch(),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(SearchContainer));
