import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./Ordering.css"
import pic1 from "./ordering-assets/GRANDMERE2.png"
import pic2 from "./ordering-assets/02-picto-artiste.png"
import pic3 from "./ordering-assets/institutionnew - Copy.png"
import pic4 from "./ordering-assets/03-picto-don.png"

import pic5 from "./ordering-assets/violonsiteblanc.png"
import pic6 from "./ordering-assets/accordeonisteblanc.png"
import pic7 from "./ordering-assets/saxoblanc.png"
import pic8 from "./ordering-assets/tresorblanc.png"

import pic9 from "./ordering-assets/musiciennesolo.png"
import pic10 from "./ordering-assets/duomusiciens.png"


import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'

class Ordering_1 extends Component {
    render() {
        function hide1(){
            var x = document.getElementById("order1")
            x.style.display = "none";
            document.getElementById("order2").style.display = "block"
        }
        function hide2(){
            var x = document.getElementById("order2")
            x.style.display = "none";
            document.getElementById("order3").style.display = "block"
        }
        function hide3(){
            var x = document.getElementById("order3")
            x.style.display = "none";
            document.getElementById("order4").style.display = "block"
        }
        function hide4(){
            var x = document.getElementById("order4")
            x.style.display = "none";
            document.getElementById("order5").style.display = "block"
        }
        function hide5(){
            var x = document.getElementById("order5")
            x.style.display = "none";
            document.getElementById("order6").style.display = "block"
        }
        return (
            
            <ReactBootStrap.Container className="top-space">
            <div className="bg-display" id="order1">
            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col><h3>1. Who do you wish to give this gift to?</h3></ReactBootStrap.Col>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a onClick={hide1}><img src={pic1} className="pic"/><p>One Person In Particular</p></a></ReactBootStrap.Col>
                    </div>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a onClick={hide1}><img src={pic2} className="pic"/><p>A Small Committee</p></a></ReactBootStrap.Col>
                    </div>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a onClick={hide1}><img src={pic3} className="pic"/><p>An <br/>Institution</p></a></ReactBootStrap.Col>
                    </div>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a onClick={hide1}><img src={pic4} className="pic"/><p>Donate To The Platform</p></a></ReactBootStrap.Col>
                    </div>
            </ReactBootStrap.Row>
                </div>



                <div className="bg-display" id="order2">
                <ReactBootStrap.Row className="justify-content-md-center">
                    <ReactBootStrap.Col><h3>2. For Which Occasion?</h3></ReactBootStrap.Col>
                </ReactBootStrap.Row>
                <ReactBootStrap.Row className="justify-content-md-center"  style={{marginLeft:'10px', marginBottom:'10px'}}>
                    <ReactBootStrap.Col><h4>Explain to us in a few words for which event you are offering music! (birthday, friends, etc.)</h4></ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                    <ReactBootStrap.Col style={{marginLeft:'20px', marginRight:'20px'}}>                    
                    <div class="md-form">
                        <input type="text" id="form1" class="form-control" />
                        </div>
                        </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                <ReactBootStrap.Row>
                <ReactBootStrap.Col style={{marginLeft:'20px', marginTop:'20px'}}>
                <ReactBootStrap.Button variant="danger" className='button' onClick={hide2}><a>Submit</a></ReactBootStrap.Button>
                </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                    </div>




                    <div className="bg-display" id="order3">
            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col><h3>3. What Type of Musican in you Garden?</h3></ReactBootStrap.Col>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row className="justify-content-md-center"  style={{marginLeft:'2px'}}>
                <ReactBootStrap.Col><h4>Choose the style of music, we take care of finding the ideal musician, available near you.</h4></ReactBootStrap.Col>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a onClick={hide3}><img src={pic5} className="pic"/><p>Classic</p></a></ReactBootStrap.Col>
                    </div>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a onClick={hide3}><img src={pic6} className="pic"/><p style={{fontSize:'19px'}}>Popular Music</p></a></ReactBootStrap.Col>
                    </div>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a onClick={hide3}><img src={pic7} className="pic"/><p>Jazzy - Pop</p></a></ReactBootStrap.Col>
                    </div>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a onClick={hide3}><img src={pic8} className="pic"/><p>Suprise!</p></a></ReactBootStrap.Col>
                    </div>
            </ReactBootStrap.Row>
                </div>




                <div className="bg-display" id="order4">
    
            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col><h3>4. Number of Musicians</h3></ReactBootStrap.Col>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row className="justify-content-md-center"  style={{marginLeft:'2px'}}>
                <ReactBootStrap.Col><h4>A soloist or a duo for 20 minutes</h4></ReactBootStrap.Col>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row sm={1} md={3}>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a onClick={hide4}><img src={pic9} className="pic2"/><p>Soloist</p></a></ReactBootStrap.Col>
                    </div>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a onClick={hide4}><img src={pic10} className="pic2"/><p>Duo</p></a></ReactBootStrap.Col>
                    </div>
            </ReactBootStrap.Row>
                </div>




                <div className="bg-display" id="order5">
    
            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col><h3>5. Is it a suprise?</h3></ReactBootStrap.Col>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row sm={1} md={6}>
            <a onClick={hide5}><div className="bg-display-button">
                    <ReactBootStrap.Col><p>Yes</p></ReactBootStrap.Col>
                    </div>
                    </a>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row sm={1} md={6}>
            <a onClick={hide5}>
                    <div style={{marginTop:'8px', paddingRight:"5px"}} className="bg-display-button">
                    <ReactBootStrap.Col><p>No</p></ReactBootStrap.Col>
                    </div>
                    </a>
            </ReactBootStrap.Row>
                </div>




                <div className="bg-display" id="order6">

            
            
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
  <a href={process.env.PUBLIC_URL + '/#/'}>
  <ReactBootStrap.Button variant="danger" className='button'>Submit</ReactBootStrap.Button></a>
</Form>  
</div>

















            </ReactBootStrap.Container>













            
        
        )
    };
};

export default Ordering_1