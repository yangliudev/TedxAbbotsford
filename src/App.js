import React, { Component } from 'react';
// import logo from './logo.svg';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from '@material-ui/core/Button';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Ordering1 from "./components/Ordering/Ordering_1";
// import Ordering2 from "./components/Ordering/Ordering_2";
// import Ordering3 from "./components/Ordering/Ordering_3";
// import Ordering4 from "./components/Ordering/Ordering_4";
// import Ordering5 from "./components/Ordering/Ordering_5";
// import Ordering6 from "./components/Ordering/Ordering_6";
import Home from "./components/Home/Home";

import { HashRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {
  render() {
  return (
    <Router>

      <Switch>
      <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route path="/order">
          <Ordering1 />
        </Route>
      </Switch>

      
  </Router>
  );
        
  }
};

export default App;

    /* <Route path="/order2">
          <Ordering2/>
        </Route>
        <Route path="/order3">
          <Ordering3 />
        </Route>
        <Route path="/order4">
          <Ordering4 />
        </Route>
        <Route path="/order5">
          <Ordering5 />
        </Route>
        <Route path="/order6">
          <Ordering6 />
          </Route> */
