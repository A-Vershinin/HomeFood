import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Search extends PureComponent {
  static propTypes = {
    // searchCity: PropTypes.func.isRequired,
  };

  render() {
    const { onHandleChange, onHandleSubmit } = this.props;

    return (
      <form className="search-city" onSubmit={this.onHandleSubmit}>
        <label htmlFor="search">
          <i className="fa fa-map-marker" aria-hidden="true" />
        </label>
        <input id="search" type="text" placeholder="City" onChange={this.onHandleChange}/>
        <button className="serch-btn">
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </form>
    );
  }

}

export default Search;
