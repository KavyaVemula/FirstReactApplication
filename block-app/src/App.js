import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './index.css';
//components
import Login from './components/pages/login';
import Header from './components/headerComponent/header';
import Navigation from './components/headerComponent/navigation';
import Footer from './components/footerComponent/footer';
import AppList from './components/pages/appList';
import EzLottery from './components/pages/ezLottery';
import SimpleStorage from './components/pages/simpleStorage';
import Velocity from './components/pages/velocity';
import Ice from './components/pages/ice';
import BitPlus from './components/pages/bitPlus';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Route exact path='/' component= {Login} />
        
        <Route exact path='/AppList' component= {AppList} />
        <Route exact path='/EzLottery' component= {EzLottery} />
        <Route exact path='/SimpleStorage' component= {SimpleStorage} />
        <Route exact path='/Velocity' component= {Velocity} />
        <Route exact path='/Ice' component= {Ice} />
        <Route exact path='/BitPlus' component= {BitPlus} />

        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
