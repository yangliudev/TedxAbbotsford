import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./MusicianRegister.css"

class MusicianRegister extends Component {

    render() {

     
        return (
            <ReactBootStrap.Container className="top-space">
             <div className="bg-display">
            
            <ReactBootStrap.Row className="justify-content-md-center" >
                <ReactBootStrap.Col><h1 class="info">Register to Become a Musician!</h1>
                </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Form>
                <ReactBootStrap.Container >
                <ReactBootStrap.Row  >

                
                <ReactBootStrap.Col md={{ span: 8, offset: 2 }}>

              <ReactBootStrap.Form.Group controlId="formGridfname">
                <ReactBootStrap.Form.Label id='font'>Personal Information</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control type="text" placeholder="First Name" />
              </ReactBootStrap.Form.Group>
                
              <ReactBootStrap.Form.Group controlId="formGridlname">
                <ReactBootStrap.Form.Control type="text" placeholder="last Name" />
              </ReactBootStrap.Form.Group>

              <ReactBootStrap.Form.Group controlId="formGridlname">
                <ReactBootStrap.Form.Control type="text" placeholder="Address" />
              </ReactBootStrap.Form.Group>

              <ReactBootStrap.Row>
              <ReactBootStrap.Col md={{ span:4 }}> 
              <ReactBootStrap.Form.Group controlId="formGridlname">
                <ReactBootStrap.Form.Control type="text" placeholder="Postal Code" />
              </ReactBootStrap.Form.Group>
              </ReactBootStrap.Col>

              <ReactBootStrap.Col > 
              <ReactBootStrap.Form.Group controlId="formGridlname">
                <ReactBootStrap.Form.Control type="text" placeholder="Locality/City" />
              </ReactBootStrap.Form.Group>
              </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Form.Group controlId="formGridlname">
                <ReactBootStrap.Form.Control type="text" placeholder="Province" />
              </ReactBootStrap.Form.Group>

              <ReactBootStrap.Form.Group controlId="formGridlname">
                <ReactBootStrap.Form.Control type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone: 012-345-6789" />
              </ReactBootStrap.Form.Group>
            

              <ReactBootStrap.Form.Group controlId="formGridfname">
                <ReactBootStrap.Form.Label id='font'>Banking Information</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control type="text" placeholder="IBAN" />
              </ReactBootStrap.Form.Group>


              <ReactBootStrap.Form.Group controlId="formGridfname">
                <ReactBootStrap.Form.Label id='font'>Account Information</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control type="text" placeholder="E-mail" />
              </ReactBootStrap.Form.Group>

              <ReactBootStrap.Form.Group controlId="formGridlname">
                <ReactBootStrap.Form.Control type="text" placeholder="Password" />
              </ReactBootStrap.Form.Group>

              <ReactBootStrap.Form.Group controlId="formGridlname">
                <ReactBootStrap.Form.Control type="text" placeholder="Confirm Password" />
              </ReactBootStrap.Form.Group>

             
              <ReactBootStrap.Form.Group controlId="formGridlname">
              <ReactBootStrap.Form.Label id='font'>Musical Training(s)</ReactBootStrap.Form.Label>
             </ReactBootStrap.Form.Group>

             {/* <ReactBootStrap.Row>
             <ReactBootStrap.Col >
               
            <ReactBootStrap.InputGroup.Checkbox>
            </ReactBootStrap.InputGroup.Checkbox>
            <ReactBootStrap.InputGroup.Checkbox>
            </ReactBootStrap.InputGroup.Checkbox>
                    
             </ReactBootStrap.Col>
             </ReactBootStrap.Row> */}

              <ReactBootStrap.Row>
              <ReactBootStrap.Col > 
              <ReactBootStrap.Form.Group controlId="formGridlname">
              <ReactBootStrap.Form.Check type="checkbox" label='Master' />
              <ReactBootStrap.Form.Check type="checkbox" label='Currently Studying' />
              </ReactBootStrap.Form.Group>
              </ReactBootStrap.Col>

              <ReactBootStrap.Col > 
              <ReactBootStrap.Form.Group controlId="formGridRadio">
             
              <ReactBootStrap.Form.Check type="checkbox" label='Bachelor' />
              <ReactBootStrap.Form.Check type="checkbox" label='Other' />
              </ReactBootStrap.Form.Group>
              </ReactBootStrap.Col>
                </ReactBootStrap.Row>
             

                </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                </ReactBootStrap.Container>
                </ReactBootStrap.Form>
                        
             
          
                
                


               
                

              

       
                </div>
            </ReactBootStrap.Container>

        )
    };
};

export default MusicianRegister