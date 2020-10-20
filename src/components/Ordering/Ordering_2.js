import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./Ordering.css"


class Ordering_2 extends Component {

    render() {
        return (
            <ReactBootStrap.Container className="top-space">
            <div className="bg-display" >
        


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
            <ReactBootStrap.Button variant="danger" className='button'><a href={process.env.PUBLIC_URL + '/#/order3'}>Submit</a></ReactBootStrap.Button>
            </ReactBootStrap.Col>
            </ReactBootStrap.Row>

                </div>
            </ReactBootStrap.Container>
        )
        };
    };



    export default Ordering_2