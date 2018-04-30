import React, { PureComponent } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../img/logo.png';

class Header extends PureComponent {
	static propTypes = {
	// 		fetchItems: PropTypes.func.isRequired,
	// 		sorting: PropTypes.string.isRequired,
	// 		currentPage: PropTypes.number.isRequired,
	// 		pageCount: PropTypes.number.isRequired,
	// 		setCurrentPage: PropTypes.func.isRequired,
	// 		resultsPerPage: PropTypes.number.isRequired,
	// 		isInitialized: PropTypes.bool.isRequired,
	// 		isFiltersMenuInitialized: PropTypes.bool.isRequired,
	// 		pending: PropTypes.bool.isRequired,
	// 		listItemRenderer: PropTypes.func.isRequired,
	// 		searchData: PropTypes.any.isRequired,
	// 		searchDataUpdatesChecker: PropTypes.func.isRequired,
	// 		items: PropTypes.arrayOf(PropTypes.any),
	// 		noResultsComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
	};

	static defaultProps = {
		search: '',
	};

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
		const { search } = this.state;

		return (
		 <header id="header" className="site-header">
			 <div className="container">
				 <div className="hamburger-menu jsMobileMenu">
					 <div className="bar"></div>
				 </div>
				 <div className="header-content jsOpenMobileMenu">
					 <div className="location">
						 <Link to="/" className="logo">
							 <img src={logo} alt="" className="logo-image" />
							 <span>HOMEFOOD</span>
						 </Link>
						 <form className="search-city" onSubmit={this.handleSubmit}>
							 <label htmlFor="search">
								 <i className="fa fa-map-marker" aria-hidden="true" />
							 </label>
							 <input id="search" type="text" placeholder="City" value={search} onChange={this.handleChange}/>
							 <button className="serch-btn">
								 <i className="fa fa-search" aria-hidden="true" />
							 </button>
						 </form>
					 </div>
					 <nav className="nav">
						 <ul className="nav-list">
							<li className="nav-list__item">
								<NavLink to="/dishes-list" className="nav-list__link">DISHES</NavLink>
							</li>
							<li className="nav-list__item">
							 	<NavLink to="/chefs-list" className="nav-list__link">CHEFS</NavLink>
							</li>
						 </ul>
					 </nav>
					 <div className="accounts">
						 <ul className="accounts-list">
							<li className="accounts-list__item" activeclassname='active'>
								<NavLink to="/chef-profile" className="accounts-list__link">Become a chef</NavLink>
							</li>
							<li className="accounts-list__item">
								<NavLink to="/my-account" className="accounts-list__link" activeclassname='active'>My account</NavLink>
							</li>
						 </ul>
					 </div>
				 </div>
			 </div>
		 </header>
		);
	}
}

export default Header;
