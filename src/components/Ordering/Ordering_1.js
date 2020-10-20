import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./Ordering.css"
import pic1 from "./ordering-assets/GRANDMERE2.png"
import pic2 from "./ordering-assets/02-picto-artiste.png"
import pic3 from "./ordering-assets/institutionnew - Copy.png"
import pic4 from "./ordering-assets/03-picto-don.png"


class Ordering_1 extends Component {

    render() {
        return (

            <ReactBootStrap.Container className="top-space">
            <div className="bg-display">
        


            <ReactBootStrap.Row className="justify-content-md-center">
                <ReactBootStrap.Col><h3>1. Who do you wish to give this gift to?</h3></ReactBootStrap.Col>
            </ReactBootStrap.Row>
            <ReactBootStrap.Row>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a href={process.env.PUBLIC_URL + '/#/order2'}><img src={pic1} className="pic"/><p>One Person In Particular</p></a></ReactBootStrap.Col>
                    </div>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a href={process.env.PUBLIC_URL + '/#/order2'}><img src={pic2} className="pic"/><p>A Small Committee</p></a></ReactBootStrap.Col>
                    </div>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a href={process.env.PUBLIC_URL + '/#/order2'}><img src={pic3} className="pic"/><p>An <br/>Institution</p></a></ReactBootStrap.Col>
                    </div>
                    <div className="bg-display-test">
                    <ReactBootStrap.Col><a href={process.env.PUBLIC_URL + '/#/order2'}><img src={pic4} className="pic"/><p>Donate To The Platform</p></a></ReactBootStrap.Col>
                    </div>
            </ReactBootStrap.Row>
                </div>
            </ReactBootStrap.Container>


            
        
        )
    };
};

export default Ordering_1