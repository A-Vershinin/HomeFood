import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Footer = (props) => {
    const { about, account, support, socials } = props.items;

    return (
      <footer id="footer" className="site-footer">
        <div className="container">
          <div className="footer-nav">

            <ul className="footer-nav-list">
            {
              about.map((elem, index) => {
                return (
                  index === 0 ? (
                    <li key={index} className="footer-nav-list__item">{elem}</li>
                  ) : (
                    <li key={index} className="footer-nav-list__item">
                      <NavLink to="#" className="footer-nav-list__link">{elem}</NavLink>
                    </li>
                  )
                )
              })
            }
            </ul>

            <ul className="footer-nav-list">
            {
              account.map((elem, index) => {
                return (
                  index === 0 ? (
                    <li key={index} className="footer-nav-list__item">{elem}</li>
                  ) : (
                    <li key={index} className="footer-nav-list__item">
                      <NavLink to="#" className="footer-nav-list__link">{elem}</NavLink>
                    </li>
                  )
                )
              })
            }
            </ul>

            <ul className="footer-nav-list">
            {
              support.map((elem, index) => {
                return (
                  index === 0 ? (
                    <li key={index} className="footer-nav-list__item">{elem}</li>
                  ) : (
                    <li key={index} className="footer-nav-list__item">
                      <NavLink to="#" className="footer-nav-list__link">{elem}</NavLink>
                    </li>
                  )
                )
              })
            }
            </ul>

            <div className="footer-social">
              <span>FIND US</span>
              <ul className="footer-nav-list social">
              {
                socials.map((name, index) => {
                  const iconClassName = `fa fa-${name}`;
                  return (
                    <li key={index} className="footer-nav-list__item">
                      <NavLink to="#" className="footer-nav-list__link">
                        <i className={iconClassName} aria-hidden="true" />
                      </NavLink>
                    </li>
                  )
                })
              }
              </ul>

            </div>
          </div>
        </div>
        <div className="copyright">
          <span>© 2016 Home Food</span>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
        </div>
      </footer>
    );
}

Footer.propTypes = {
  items: PropTypes.shape({
    about: PropTypes.arrayOf(PropTypes.string),
    account: PropTypes.arrayOf(PropTypes.string),
    support:  PropTypes.arrayOf(PropTypes.string),
    socials: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Footer;
