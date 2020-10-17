import React from 'react';
// import logo from './logo.svg';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from '@material-ui/core/Button';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Ordering_1 from "./components/Ordering/Ordering_1";
import Ordering_2 from "./components/Ordering/Ordering_2";
import Ordering_3 from "./components/Ordering/Ordering_3";
import Ordering_4 from "./components/Ordering/Ordering_4";
import Ordering_5 from "./components/Ordering/Ordering_5";
import Ordering_6 from "./components/Ordering/Ordering_6";
import Home from "./components/Home/Home";


import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/order">
          <Ordering_1 />
        </Route>
        <Route path="/order2">
          <Ordering_2 />
        </Route>
        <Route path="/order3">
          <Ordering_3 />
        </Route>
        <Route path="/order4">
          <Ordering_4 />
        </Route>
        <Route path="/order5">
          <Ordering_5 />
        </Route>
        <Route path="/order6">
          <Ordering_6 />
          </Route>
      </Switch>
  </Router>
  );
}

export default App;
