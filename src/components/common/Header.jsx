import React, { PureComponent } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../img/logo.png';

class Header extends PureComponent {
	static propTypes = {
		items: PropTypes.shape({
			nav: PropTypes.arrayOf(PropTypes.any),
			accounts: PropTypes.arrayOf(PropTypes.any),
		}).isRequired,
		// searchCity: PropTypes.func.isRequired,
	};

	static defaultProps = {
		items: {},
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
		const { nav, accounts } = this.props.items;
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
						 {
 							nav.map((elem, index) => {
 								return (
 								 <li key={index} className="nav-list__item">
 									 <NavLink to={elem.url} className="nav-list__link">{elem.text}</NavLink>
 								 </li>
	 								)
	 							})
 							}
						 </ul>
					 </nav>
					 <div className="accounts">
						 <ul className="accounts-list">
							 {
	 							nav.map((elem, index) => {
	 								return (
										<li key={index} className="accounts-list__item">
											<NavLink to={elem.url} className="accounts-list__link"
											activeclassname='active'>{elem.text}</NavLink>
										</li>
		 								)
		 							})
	 							}
						 </ul>
					 </div>
				 </div>
			 </div>
		 </header>
		);
	}
}

export default Header;
