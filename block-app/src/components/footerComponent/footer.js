import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid footer-nav-container">
          <div className="container footer-nav-bar-wrapper">
            <div className="row">
              <div className="span12">
                <nav className="footerNavigation">
                  <ul className="footer-navbar">
                    <li className="footer-nav-item">
                      <Link className="footer-navbar-item 1" to="/AppList"> MyDApps </Link>
                    </li>
                    <li className="footer-nav-item">
                      <Link className="footer-navbar-item 2" to="/AppList"> LaunchPad </Link>
                    </li>
                    <li className="footer-nav-item">
                      <Link className="footer-navbar-item 3" to="/AppList"> Updates </Link>
                    </li>
                    <li className="footer-nav-item">
                      <Link className="footer-navbar-item 4" to="/AppList"> Search </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}

export default Footer;
