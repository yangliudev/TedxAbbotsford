import React, { Component } from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Ordering1 from "./components/Ordering/Ordering_1";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";

import Faq from "./components/Faq/Faq";
import Info from "./components/Info/Info"
import About from "./components/About/About"
import MusicianRegister from "./components/Musician/MusicianRegister"
import Test from "./components/RegisterTest/RegisterTest"


import { HashRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {
  render() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/">
          <Home />
        </Route> <Route exact path="/faq">
          <Faq />
        </Route>
        <Route exact path="/info">
          <Info />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/register">
          <MusicianRegister />
        </Route>
        <Route path="/order">
          <Ordering1 />
        </Route>
        <Route path="/admin">
        <Navbar />
          <Admin />
        </Route>
      </Switch>
      
  </Router>
  );
        
  }
};

export default App;