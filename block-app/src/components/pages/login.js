import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// import './index.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }
  render() {
    return (
      <div className="container-fluid Login">
      <div className="row Options">
        <select className=" LoginOptions" data-placeholder="User">
          <option value="Option1" id="Option"> User </option>
          <option value="Option2" id="Option"> Node Host </option>
          <option value="Option3" id="Option"> Developer </option>
        </select>

        </div>
        <div className="row">
        <input type="text" className="Username" placeholder="Username"></input>
        </div>
        <input type="password" className="Password" placeholder="Password"></input>
        <div className="row">
        <Link className="LoginButton" to="/AppList">Log-in</Link>
        </div>
      </div>
    );
  }
}

export default Login;
