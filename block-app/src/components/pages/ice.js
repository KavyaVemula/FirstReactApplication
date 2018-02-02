import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import '../../index.css';

class Ice extends Component {
  render() {
    return (
      <div className="AppDetails container-fluid">
        <div className="AppTitle row">
          <div className="AppThumbnail span4">
            <a className="thumbnailImage" href="https://placeholder.com"><img src="http://via.placeholder.com/100x95" /></a>
          </div>
          <div className="AppName span8">
            <p className="appLabel">Ice</p>
            <p className="blockApps">BlockApps</p>
            <span className="fa fa-star starIcon"></span>
            <span className="fa fa-star starIcon"></span>
            <span className="fa fa-star starIcon"></span>
            <span className="fa fa-star starIcon"></span>
            <span className="fa fa-star starIcon"></span>
            <button className="LaunchButton" type="button"> Launch </button>
          </div>
        </div>
        <div className="Screenshots row">
          <p className="screenshotTitle"> Screenshots </p>
          <a className="screenshotImage" href="https://placeholder.com"><img src="http://via.placeholder.com/125x155" /></a>
          <a className="screenshotImage" href="https://placeholder.com"><img src="http://via.placeholder.com/125x155" /></a>
          <a className="screenshotImage" href="https://placeholder.com"><img src="http://via.placeholder.com/125x155" /></a>
        </div>
        <div className="Description row">
          <p className="loremContent">  Description: <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Link className="viewMore" to='/AppList'> View More.. </Link>
        </div>
      </div>

    );
  }
}

export default Ice;
