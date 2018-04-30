import React, { PureComponent } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Footer extends PureComponent {

  render() {
    return (
      <footer id="footer" className="site-footer">
        <div className="container">
          <div className="footer-nav">
            <ul className="footer-nav-list">
              <li className="footer-nav-list__item">ABOUT HOMEFOOD</li>
              <li className="footer-nav-list__item"><NavLink to="#" className="footer-nav-list__link">Who we are</NavLink></li>
              <li className="footer-nav-list__item"><NavLink to="#" className="footer-nav-list__link">Blog</NavLink></li>
              <li className="footer-nav-list__item"><NavLink to="#" className="footer-nav-list__link">Eco-Friendly Packaging</NavLink></li>
              <li className="footer-nav-list__item"><NavLink to="#" className="footer-nav-list__link">This Week’s Dishes</NavLink></li>
            </ul>
            <ul className="footer-nav-list">
              <li className="footer-nav-list__item">ACCOUNT</li>
              <li className="footer-nav-list__item"><NavLink to="#" className="footer-nav-list__link">Sign up</NavLink></li>
              <li className="footer-nav-list__item"><NavLink to="#" className="footer-nav-list__link">My account</NavLink></li>
            </ul>
            <ul className="footer-nav-list">
              <li className="footer-nav-list__item">SUPPORT</li>
              <li className="footer-nav-list__item"><NavLink to="#" className="footer-nav-list__link">FAQ</NavLink></li>
              <li className="footer-nav-list__item"><NavLink to="#" className="footer-nav-list__link">Contacts</NavLink></li>
            </ul>
            <div className="footer-social">
              <span>FIND US</span>
              <ul className="footer-nav-list social">
                <li className="footer-nav-list__item">
                  <NavLink to="#" className="footer-nav-list__link">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </NavLink>
                </li>
                <li className="footer-nav-list__item">
                  <NavLink to="#" className="footer-nav-list__link">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </NavLink>
                </li>
                <li className="footer-nav-list__item">
                  <NavLink to="#" className="footer-nav-list__link">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </NavLink>
                </li>
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

}

export default Footer;
