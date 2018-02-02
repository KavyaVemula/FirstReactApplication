import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header>
        <div className = "container">
          <div className="row">
            <div className="span4">
              <Link to="/AppList" className="menu"> menu </Link>
            </div>
            <div className = "span4">
              <h1 className="title"> APPS </h1>
            </div>
            <div className="span4">
              <Link to="/AppList" className="logo"> LOGO </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
