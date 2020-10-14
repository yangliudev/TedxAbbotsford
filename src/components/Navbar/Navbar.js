import React, { Component } from 'react';
// import * as ReactBootStrap from "react-bootstrap";
import {Navbar} from "react-bootstrap";
import { Nav, NavDropdown} from "react-bootstrap";

import main_logo2 from "./assets/logos/01_logo-horizontal.png";
import "./Navbar.css"


class NavBar extends Component {

    render() {
        return (
< Navbar bg="secondary" variant="dark" expand="lg">
  < Navbar.Brand href="#home">
      <img
        alt=""
        src={main_logo2}
        width="300"
        height="auto"
        className="d-inline-block align-top"
      />
    </ Navbar.Brand>
  < Navbar.Toggle aria-controls="basic-navbar-nav" />
  < Navbar.Collapse id="basic-navbar-nav">
    < Nav className="mr-auto">
      < Nav.Link href="#home">Home</ Nav.Link>
      < Nav.Link href="#link">Link</ Nav.Link>
      < NavDropdown title="Dropdown" id="basic-nav-dropdown">
        < NavDropdown.Item href="#action/3.1">Action</ NavDropdown.Item>
        < NavDropdown.Item href="#action/3.2">Another action</ NavDropdown.Item>
        < NavDropdown.Item href="#action/3.3">Something</ NavDropdown.Item>
        < NavDropdown.Divider />
        < NavDropdown.Item href="#action/3.4">Separated link</ NavDropdown.Item>
      </ NavDropdown>
    </ Nav>
    {/* < Form inline>
      < FormControl type="text" placeholder="Search" className="mr-sm-2" />
      < Button variant="outline-success">Search</ Button>
    </ Form> */}
  </ Navbar.Collapse>
</ Navbar>
        )

    }
}

export default NavBar


// import React, { Component } from 'react';

// import Form from 'react-bootstrap/Form'
// import "./Navbar.css"


// class Navbar extends Component {

//     render() {
//         return (
//       <div className="auth-inner">
//  <div className="auth-in">
//  <Form>
//   <Form.Group controlId="exampleForm.ControlInput1">
//     <Form.Label>6. Name of Beneficiary</Form.Label>
//     <Form.Control type="email" />
//   </Form.Group>
  
//   <Form.Group controlId="exampleForm.ControlSelect2">
//     <Form.Label>Example multiple select</Form.Label>
//     <Form.Control as="select" multiple>
//       <option>1</option>
//       <option>2</option>
//       <option>3</option>
//       <option>4</option>
//       <option>5</option>
//     </Form.Control>
//   </Form.Group>
//   <Form.Group controlId="exampleForm.ControlTextarea1">
//     <Form.Label>Example textarea</Form.Label>
//     <Form.Control as="textarea" rows="3" />
//   </Form.Group>
// </Form>
//   </div>
//   </div>

//         )
//     }
// }

// export default Navbar