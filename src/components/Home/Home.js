import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import tower from "./../../assets/tower/Tour_z.png"
import "./Home.css"
import occasion from "./../../assets/logos/02_picto-canton.png"
import band from "./../../assets/logos/02-picto-artiste.png"
import pay from "./../../assets/logos/02-picto-paiement.png"
import map from "./../../assets/logos/02-picto-adresse.png"

class Home extends Component {

    render() {
        return (
            <ReactBootStrap.Container className="top-space">
                <ReactBootStrap.Row>
                    <div class="firstsection">
                        <div class="towerDiv">
                            <img src={tower} className="tower"></img>
                        </div>

                        <div class ="textBG">
                                <div class="textAlign">
                                    <p class="towerText"><span class="firstTowerText">OFFER A MUSICIAN AT HOME <br/>TO THE PEOPLE YOU LOVE,<br/></span> <span class="secondTowerText">IN LESS THAN 3 MINUTES!</span></p>
                                </div>
                            
                                <div class="buttonAlign">
                                <a href={process.env.PUBLIC_URL + '/#/order'}>
                                    <input type="button" value="Order Now" class="orderButton"></input>
                                </a>
                                </div>
                        </div>
                    </div>
                </ReactBootStrap.Row>
        
                <ReactBootStrap.Row>
                    <div className="secondSection">
                        <div class ="textAlign">
                            <p class = "secondSectionTitle">How Does It Work?</p>
                        </div>

                        <ReactBootStrap.Col class="secondSectionColumn">
                            <p>1.</p>
                            <img src = {occasion} class ="secondSectionImages"/>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col class="secondSectionColumn">
                            <p>2.</p>
                            <img src = {band} class ="secondSectionImages"/>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col class="secondSectionColumn">
                            <p>3.</p>
                            <img src = {pay} class ="secondSectionImages"/>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col class="secondSectionColumn">
                            <p>4.</p>
                            <img src = {map} class ="secondSectionImages"/>
                        </ReactBootStrap.Col>
                    </div>
                </ReactBootStrap.Row>

            </ReactBootStrap.Container>
        )
    };
};

export default Home