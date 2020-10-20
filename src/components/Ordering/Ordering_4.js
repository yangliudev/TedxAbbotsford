import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./Ordering.css"
import pic1 from "./ordering-assets/musiciennesolo.png"
import pic2 from "./ordering-assets/duomusiciens.png"

class Ordering_4 extends Component {
    render() {
        return (
            <ReactBootStrap.Container className="top-space">
            <div className="bg-display">
    
            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col><h3>4. Number of Musicians</h3></ReactBootStrap.Col>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row className="justify-content-md-center"  style={{marginLeft:'2px'}}>
                <ReactBootStrap.Col><h4>A soloist or a duo for 20 minutes</h4></ReactBootStrap.Col>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row sm={1} md={3}>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a href={process.env.PUBLIC_URL + '/#/order5'}><img src={pic1} className="pic2"/><p>Soloist</p></a></ReactBootStrap.Col>
                    </div>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a href={process.env.PUBLIC_URL + '/#/order5'}><img src={pic2} className="pic2"/><p>Duo</p></a></ReactBootStrap.Col>
                    </div>
            </ReactBootStrap.Row>
                </div>
            </ReactBootStrap.Container>
        );
    }
}

export default Ordering_4;