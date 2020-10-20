import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import tower from "./../../assets/tower/Tour_z.png"
import "./Home.css"

class Home extends Component {

    render() {
        return (
            <ReactBootStrap.Container className="top-space">
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                        <div>
                            <img src={tower} className="tower"></img>
                        </div>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col>
                        <div class ="textBG">
                            <ReactBootStrap.Row>
                                <div class="textAlign">
                                    <h1 class="towerText"><span class="firstTowerText">OFFER A MUSICIAN AT HOME <br/>TO THE PEOPLE YOU LOVE,<br/></span> <span class="secondTowerText">IN LESS THAN 3 MINUTES!</span></h1>
                                </div>
                            </ReactBootStrap.Row>
                            <ReactBootStrap.Row>
                                <div class="buttonAlign">
                                <a href={process.env.PUBLIC_URL + '/#/order'}>
                                    <input type="button" value="Order Now" class="orderButton"></input>
                                </a>
                                </div>
                            </ReactBootStrap.Row>
                        </div>
                    </ReactBootStrap.Col>
            
                </ReactBootStrap.Row>
            </ReactBootStrap.Container>
        )
    };
};

export default Home