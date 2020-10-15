import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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

  );
}

export default App;