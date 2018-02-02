import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation container-fluid nav-container">
        <div className="container nav-bar-wrapper">
          <div className="row">
            <div className="span12">
              <nav className="nav">
                <ul className="navbar">
                  <li className="nav-item"> <Link className="navbar-item" to="/">POPULAR </Link> </li>
                  <li className="nav-item"> <Link className="navbar-item" to="/"> FEATURED </Link> </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
