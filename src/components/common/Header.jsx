import React, { PureComponent } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../img/logo.png';
import Search from '../../containers/common/Search/index.jsx';

class Header extends PureComponent {
	static propTypes = {
		items: PropTypes.shape({
			nav: PropTypes.arrayOf(PropTypes.any),
			accounts: PropTypes.arrayOf(PropTypes.any),
		}).isRequired,
	};

	static defaultProps = {
		items: {},
	};

	render() {
		const { nav, accounts } = this.props.items;

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
						 <Search />
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
	 							accounts.map((elem, index) => {
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
