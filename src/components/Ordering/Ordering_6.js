import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import * as ReactBootStrap from "react-bootstrap";

export default class Ordering_6 extends Component {
    render() {
      
        return (
          <Container className="top-space">
                        <div className="bg-display">

            
            
<Form style={{marginLeft:'20px', marginRight:"20px", paddingTop:'10px', marginBottom:"-20px"}}>

  <Form.Row className="justify-content-md-center">
    <Form.Group as={Col} xs={7} controlId="formGridFirstName">
      <Form.Label className="a">Beneficiary First Name</Form.Label>
      <Form.Control type="text" placeholder="First Name" />
    </Form.Group>
  
    <Form.Group as={Col}  controlId="formGridLastName">
    <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Last Name" />
    </Form.Group>
  </Form.Row>

  <div className="w-50 d-inline-block">
  <Form.Group controlId="formGridDate">
    <Form.Label>Date of Service</Form.Label>
    <h6><i>The order must be placed at least 72 hours in advance to be considered.</i></h6>
    <Form.Control type="date" placeholder="1234 Main St" />
  </Form.Group>
  
  <Form.Group controlId="formGridTime">
    <Form.Label>Time of Service</Form.Label>
    <h6><i>Enter the time between 08:00 and 21:00 maximum</i></h6>
    <Form.Control type="time" placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridHost">
    <Form.Label>Offered by</Form.Label>
    <Form.Control type="text" placeholder="Answer here" />
  </Form.Group>

  <Form.Group controlId="formGridPhone">
    <Form.Label>Contact Number</Form.Label>
    <h6><i>Please enter a canadian number</i> </h6>
    <Form.Control type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" />
  </Form.Group>

  <Form.Group controlId="formGridEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control placeholder="yourname@gmail.com" />
  </Form.Group>


  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address 1</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>
  </div>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>British Columbia</option>
        <option>Alberta</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridComment">
    <Form.Label>Additional Comments</Form.Label>
    <h6><i>Leave us a little comment that will help us better target the event and the artist.</i></h6>
    <Form.Control as="textarea" rows={3} placeholder="Anything you'd like us to know" />
  </Form.Group>
  <ReactBootStrap.Button variant="danger" className='button'><a href={process.env.PUBLIC_URL + '/#/'}>Submit</a></ReactBootStrap.Button>
</Form>  
</div>
</Container>
      
            ); 
    }
}