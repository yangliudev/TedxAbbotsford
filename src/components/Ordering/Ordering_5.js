import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./Ordering.css"

class Ordering_5 extends Component {
    render() {
        return (
            <ReactBootStrap.Container className="top-space">
            <div className="bg-display">
    
            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col><h3>5. Is it a suprise?</h3></ReactBootStrap.Col>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row sm={1} md={6}>
            <a href={process.env.PUBLIC_URL + '/#/order6'}><div className="bg-display-button">
                    <ReactBootStrap.Col><p>Yes</p></ReactBootStrap.Col>
                    </div>
                    </a>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row sm={1} md={6}>
            <a href={process.env.PUBLIC_URL + '/#/order6'}>
                    <div style={{marginTop:'8px', paddingRight:"5px"}} className="bg-display-button">
                    <ReactBootStrap.Col><p>No</p></ReactBootStrap.Col>
                    </div>
                    </a>
            </ReactBootStrap.Row>
                </div>
            </ReactBootStrap.Container>
        );
    }
}

export default Ordering_5;