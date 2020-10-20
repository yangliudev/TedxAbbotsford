import React, { Component } from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Ordering1 from "./components/Ordering/Ordering_1";
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
          <Footer />
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