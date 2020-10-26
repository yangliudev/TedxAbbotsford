import React, { Component } from "react";
import * as ReactBootStrap from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import "./musicianSignIn.css"

class SignIn extends Component {
    render() {
        return (
            <ReactBootStrap.Container className="top-space">
             <div className="bg-display">
             <ReactBootStrap.Row className="justify-content-md-center" >
                <ReactBootStrap.Col ><h1 class="info">Sign In</h1>
                </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                <ReactBootStrap.Col md={{ span: 3, offset: 2 }}>
                <Form>

                <Form.Row className="justify-content-md-center">
                <Form.Group  controlId="formGridFirstName">
                <Form.Label className="a">Sign In</Form.Label>
                <Form.Control type="text" placeholder="Email Address" />
                </Form.Group>
                </Form.Row>

                <Form.Row className="justify-content-md-center">
                <Form.Group controlId="formGridFirstName">

                <Form.Control type="text" placeholder="Password" />
                </Form.Group>
                </Form.Row>
                </Form>
                </ReactBootStrap.Col>
                </ReactBootStrap.Row>

         
        </div>
            </ReactBootStrap.Container>
                /* <h3>Sign In</h3>
                <div className="w-50 d-inline-block top-space">
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <div class="form-group">
            <div class='input-group date' id='datetimepicker1'>
               <input type='text' class="form-control" />
               <span class="input-group-addon">
               <span class="glyphicon glyphicon-calendar"></span>
               </span>
            </div>
         </div>

                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                </div>
            </form> */
           
            
            ); 
    };
};
export default SignIn