import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Ordering1 from "./components/Ordering/Ordering_1";
import Home from "./components/Home/Home";
import Admin_Dash from "./components/Admin/Admin";

import Faq from "./components/Faq/Faq";
import Info from "./components/Info/Info";
import About from "./components/About/About";

import Login from "./components/Login/Login";

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
          <Route path="/faq">
          <Navbar />
            <Faq />
            <Footer />
          </Route>
          <Route path="/info">
          <Navbar />
            <Info />
            <Footer />
          </Route>
          <Route path="/about">
          <Navbar />
            <About />
            <Footer />
          </Route>
          <Route path="/order">
          <Navbar />
            <Ordering1 />
          </Route>
          <Route path="/admin">
            <Admin_Dash />
          </Route>
          <Route path="/login">
          <Navbar />
            <Login />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
