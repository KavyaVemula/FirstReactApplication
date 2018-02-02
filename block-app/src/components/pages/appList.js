import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import '../../index.css';

class AppList extends Component {
  render() {
    return (
      <div className="content container-fluid">
        <div className="row">
          <div className="span12">
            <div className="AppImage span4">
              <a className="AppIcon" href="https://placeholder.com"><img src="http://via.placeholder.com/55x55" /></a>
            </div>
            <div className="AppInfo span8">
              <Link className="AppName" to="/EzLottery"> EZ lottery </Link>
              <button className="GetButton" type="button">Get</button>
              <div className="line"></div>
              <p> This apps demonstrates how to create a DApp using.. </p>
            </div>
           </div>
           <div className="span12">
             <div className="AppImage span4">
               <a className="AppIcon" href="https://placeholder.com"><img src="http://via.placeholder.com/55x55" /></a>
             </div>
             <div className="AppInfo span8">
               <Link className="AppName" to="/SimpleStorage"> Simple Storage </Link>
               <button className="GetButton" type="button">Start</button>
               <div className="line"></div>
               <p> This apps demonstrates how to create a DApp using.. </p>
             </div>
           </div>
           <div className="span12">
             <div className="AppImage span4">
               <a className="AppIcon" href="https://placeholder.com"><img src="http://via.placeholder.com/55x55" /></a>
             </div>
             <div className="AppInfo span8">
               <Link className="AppName" to="/Velocity"> Velocity </Link>
               <button className="GetButton" type="button">Start</button>
               <div className="line"></div>
               <p> This apps demonstrates how to create a DApp using.. </p>
             </div>
           </div>
           <div className="span12">
             <div className="AppImage span4">
               <a className="AppIcon" href="https://placeholder.com"><img src="http://via.placeholder.com/55x55" /></a>
             </div>
             <div className="AppInfo span8">
               <Link className="AppName" to="/Ice"> Ice </Link>
               <button className="GetButton" type="button">Start</button>
               <div className="line"></div>
               <p> This apps demonstrates how to create a DApp using.. </p>
             </div>
           </div>
           <div className="span12">
             <div className="AppImage span4">
               <a className="AppIcon" href="https://placeholder.com"><img src="http://via.placeholder.com/55x55" /></a>
             </div>
             <div className="AppInfo span8">
               <Link className="AppName" to="/BitPlus"> Bit+ </Link>
               <button className="GetButton" type="button">Start</button>
               <div className="line"></div>
               <p> This apps demonstrates how to create a DApp using.. </p>
             </div>
           </div>
        </div>
      </div>
    );
  }
}

export default AppList;
