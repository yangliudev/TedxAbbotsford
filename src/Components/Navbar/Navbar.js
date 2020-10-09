import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import logo from "./../../assets/logos/01_logo-horizontal.png"
import './Navbar.css'

class Navbar extends Component {

    render() {
        return (
            <div class="navigation">
            <ReactBootStrap.Navbar collapseOnSelect expand="lg" class="navigation">
                <ReactBootStrap.Navbar.Brand href="home"><img src={logo} width="30%" align="left"/></ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                
                <ReactBootStrap.Nav>
                    <ReactBootStrap.Nav.Link href="home"><h4 class="linkText">Home</h4></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="faq"><h4 class="linkText"> FAQ</h4></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="info"><h4 class="linkText">Info</h4></ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="about"><h4 class="linkText">About</h4></ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
                </ReactBootStrap.Navbar.Collapse>
            </ReactBootStrap.Navbar>
            </div>
        )

    }
}

export default Navbar
