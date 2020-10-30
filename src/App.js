import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Ordering1 from "./components/Ordering/Ordering";
import Home from "./components/Home/Home";
import Admin_Dash from "./components/Admin/Admin";

import Test from "./components/Admin/Test";


import Faq from "./components/Faq/Faq";
import Info from "./components/Info/Info";
import About from "./components/About/About";

import Login from "./components/Login/Login";
import Musician from "./components/Musician/MusicianRegister"
import Musician_Dash from "./components/Musician/Musician_Dash"


import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { findAllByTestId } from "@testing-library/react";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
          
            <Home />
            <Footer />
          </Route>
          <Route path="/faq">
            <Faq />
            <Footer />
          </Route>
          <Route path="/info">
            <Info />
            <Footer />
          </Route>
          <Route path="/about">
            <About />
            <Footer />
          </Route>
          <Route path="/order">
            <Ordering1 />
          </Route>
          <Route path="/admin">
            <Test />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/test" component={Test}/>
          <Route exact path="/musician" component={Musician}/>
          <Route path="/musician/admin" component={Musician_Dash}/>

        </Switch>
      </Router>
    );
  }
}

export default App;
