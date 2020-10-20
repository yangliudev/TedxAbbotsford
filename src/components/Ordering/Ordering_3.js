import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./Ordering.css"
import pic1 from "./ordering-assets/violonsiteblanc.png"
import pic2 from "./ordering-assets/accordeonisteblanc.png"
import pic3 from "./ordering-assets/saxoblanc.png"
import pic4 from "./ordering-assets/tresorblanc.png"


class Ordering_3 extends Component {
    render() {
        return (
            <ReactBootStrap.Container className="top-space">
            <div className="bg-display">
        


            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col><h3>3. What Type of Musican in you Garden?</h3></ReactBootStrap.Col>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row className="justify-content-md-center"  style={{marginLeft:'2px'}}>
                <ReactBootStrap.Col><h4>Choose the style of music, we take care of finding the ideal musician, available near you.</h4></ReactBootStrap.Col>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a href={process.env.PUBLIC_URL + '/#/order4'}><img src={pic1} className="pic"/><p>Classic</p></a></ReactBootStrap.Col>
                    </div>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a href={process.env.PUBLIC_URL + '/#/order4'}><img src={pic2} className="pic"/><p style={{fontSize:'19px'}}>Popular Music</p></a></ReactBootStrap.Col>
                    </div>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a href={process.env.PUBLIC_URL + '/#/order4'}><img src={pic3} className="pic"/><p>Jazzy - Pop</p></a></ReactBootStrap.Col>
                    </div>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a href={process.env.PUBLIC_URL + '/#/order4'}><img src={pic4} className="pic"/><p>Suprise!</p></a></ReactBootStrap.Col>
                    </div>
            </ReactBootStrap.Row>
                </div>
            </ReactBootStrap.Container>
        );
    }
}

export default Ordering_3;