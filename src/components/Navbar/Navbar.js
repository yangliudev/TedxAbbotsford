import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import main_logo from './assets/logos/01_Logo-principal.png';
import main_logo2 from "./assets/logos/01_logo-horizontal.png";
import "./Navbar.css"


class Navbar extends Component {

    render() {
        return (
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home"><img src={main_logo2} width="400px" class="img-fluid"/></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">

      {/* <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown> */}
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>

    <ReactBootStrap.Nav.Link href="#features" className="nav-text">HOME</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing" className="nav-text">FAQ</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#deets" className="nav-text">INFO</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#memes" className="nav-text">ABOUT</ReactBootStrap.Nav.Link>

    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        )

    }
}

export default Navbar
