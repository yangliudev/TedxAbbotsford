import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import main_logo from './logo-image/01_Logo-principal.png';
import main_logo2 from "./logo-image/01_logo-horizontal - Copy.png";
import "./Navbar.css"


class Navbar extends Component {

    render() {
        return (
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark">
  <ReactBootStrap.Navbar.Brand href={process.env.PUBLIC_URL + '/#/'}><img src={main_logo2} width="400px" class="img-fluid"/></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">

    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav className='nav-size'> 
      
    {/* <ReactBootStrap.Nav.Link href="/" className="nav-text">HOME</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/faq" className="nav-text">FAQ</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/info" className="nav-text">INFO</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/order1" className="nav-text">ORDER</ReactBootStrap.Nav.Link> */}
      <a href={process.env.PUBLIC_URL + '/#/'} className="nav-font">HOME</a>
      <a href={process.env.PUBLIC_URL + '/#/faq'} className="nav-font">FAQ</a>
      <a href={process.env.PUBLIC_URL + '/#/info'} className="nav-font">INFO</a>
      <a href={process.env.PUBLIC_URL + '/#/about'} className="nav-font">ABOUT</a>

    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        )

    }
}

export default Navbar
