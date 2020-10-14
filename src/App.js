import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Order from "./components/order.component";

function App() {
  return (
  <Router>
    <div className="App">
      <nav className="navbar navbar-collapseOnSelect navbar-expand-lg navbar-light fixed-top">
      
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}> <img src={require('./assets/logos/01_logo-horizontal.png')} width="300px"/> </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}><h4>Login |</h4></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}><h4>Sign Up |</h4></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/order"}><h4>Order</h4></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/order" component={Order} />
          </Switch>
        </div>
      </div>
    </div></Router>

>>>>>>> Stashed changes
  );
}

export default App;
