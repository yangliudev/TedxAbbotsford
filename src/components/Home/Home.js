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
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col class="secondSectionColumn">
                                <p class = "secondSectionNumbers">1</p>
                                <p class = "secondSectionTopText">Inquire the occassion being celebrated</p>
                                <div class = "secondSectionImagesDiv">
                                    <img src = {occasion} class ="secondSectionImages"/>
                                </div>
                                <p class = "secondSectionBottomText">"Grandma Léa's birthday!"<br/><br/>
                                "A little aperitif with friends"<br/><br/>
                                ​"Violin for a romantic evening!"</p>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col class="secondSectionColumn">
                                <p class = "secondSectionNumbers">2</p>
                                <p class= "secondSectionTopText">Choose the music</p><br/><br/>
                                <div class = "secondSectionImagesDiv">
                                    <img src = {band} class ="secondSectionImages"/>
                                </div>
                                <p class = "secondSectionBottomText">You decide the style of music!<br/><br/>
                                We take care of finding the musicians available in your region on the date and time indicated.</p>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col class="secondSectionColumn">
                                <p class = "secondSectionNumbers">3</p>
                                <p class= "secondSectionTopText">Pay online</p><br/><br/>
                                <div class = "secondSectionImagesDiv">
                                    <img src = {pay} class ="secondSectionImages"/>
                                </div>
                                
                                <p class = "secondSectionBottomText">After giving us all the necessary information, 
                                enjoy a fast and secure payment.</p>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col class="secondSectionColumn">
                                <p class = "secondSectionNumbers">4</p>
                                <p class= "secondSectionTopText">Listen and savor</p><br/><br/>
                                <div class = "secondSectionImagesDiv">
                                    <img src = {map} class ="secondSectionImages"/>
                                </div>
                                <p class = "secondSectionBottomText">On the day and time indicated, one or two musicians will appear in front of the beneficiary's door on time and will play for 20 minutes. </p>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                    </div>
                </ReactBootStrap.Row>

            </ReactBootStrap.Container>
        )
    };
};

export default Home