import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import tower from "./../../assets/tower/Tour_z.png"
import firstPicture from "./../../assets/logos/02_picto-canton.png"
import secondPicture from "./../../assets/logos/02-picto-adresse.png"
import thirdPicture from "./../../assets/logos/02-picto-artiste.png"
import fourthPicture from "./../../assets/logos/02-picto-paiement.png"
import fifthPicture from "./../../assets/logos/03-picto-durée.png"
import sixthPicture from "./../../assets/logos/03-picto-don.png"
import seventhPicture from "./../../assets/logos/cadeauici.webp"
import "./Home.css"

class Home extends Component {

    render() {
        return (
            <ReactBootStrap.Container className="top-space">
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                        <div>
                            <img src={tower} className="tower" alt="tower image"></img>
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
                
                
                <div class="topspace2">
                <ReactBootStrap.Row className="cards">
                    <h1 class="textAlign2">IN OUR<span class="secondTowerText"> GARDEN</span> , HOW DOES IT WORK?</h1>
                </ReactBootStrap.Row>
                <ReactBootStrap.Row className="cards">
                    <ReactBootStrap.Col>
                    <h1 class="textAlign2">1</h1>
                    <h1 class="cardHeader">Inquire the occasion celebrated</h1>
                    <div class="topspace">
                        <div class="card">
                            <img class="card-img-top" src={firstPicture}></img>
                        <div class="card-body">
                            <p class="card-text3">"Grandma Léa's birthday!"</p>
                            <p class="card-text3">"A little aperitif with friends"</p>
                            <p class="card-text3">"Violin for a romantic evening!"</p>
                        </div>
                        </div>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                    <h1 class="textAlign2">2</h1>
                    <h1 class="cardHeader">Decide music<br></br><br></br></h1>
                    <div class="topspace">
                    <div class="card">
                            <img class="card-img-top" src={secondPicture}></img>
                        <div class="card-body">
                            <p class="card-text3">You decide the style of music! In addition to this, you need to know more about it. We take care of finding the musicians available in your region on the date and time indicated.</p>
                        </div>
                        </div>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                    <h1 class="textAlign2">3</h1>
                    <h1 class="cardHeader">Pay online<br></br><br></br></h1>
                    <div class="topspace">
                    <div class="card">
                            <img class="card-img-top" src={thirdPicture}></img>
                        <div class="card-body">
                            <p class="card-text3">After giving us all the necessary information , enjoy a fast and secure payment.</p>
                        </div>
                        </div>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                    <h1 class="textAlign2">4</h1>
                    <h1 class="cardHeader">Listen and savor<br></br><br></br></h1>
                    <div class="topspace">
                    <div class="card">
                            <img class="card-img-top" src={fourthPicture}></img>
                        <div class="card-body">
                            <p class="card-text3">On the day-D and at the time indicated, one or two musicians will appear in front of the beneficiary's door on time and will play for 20 minutes. </p>
                            <p class="card-text2">Let the music!</p>
                        </div>
                        </div>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                </div>
                
                
                <ReactBootStrap.Row className="cards3">
                <h1 class="textAlign2">THE GAME'S RULES</h1>
                </ReactBootStrap.Row>
                <ReactBootStrap.Row className="cards2">
                    <ReactBootStrap.Col>
                        <h1 class="textAlign2">DURATION</h1>
                        <div class="card2">
                        <img class="card-img-top" id="img" src={fifthPicture}></img>
                        <div class="card-body">
                            <h1 class="cardHeader">20 minutes of music</h1>
                        </div>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <h1 class="textAlign2">PUBLIC</h1>
                        <div class="card2">
                        <img class="card-img-top" id="img" src={fifthPicture}></img>
                        <div class="card-body">
                            <h1 class="cardHeader">in a small group with</h1>
                        </div>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <h1 class="textAlign2">PRICE</h1>
                        <div class="card2">
                        <img class="card-img-top" id="img" src={sixthPicture}></img>
                        <div class="card-body">
                            <h1 class="cardHeader">one or two professional musicians</h1>
                        </div>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <div class="fourthCards">
                    <ReactBootStrap.Row className="cards4">
                        <h1 class="textAlign2">SO, DO YOU WANT TO TRY A UNIQUE EXPERIENCE?</h1>
                        <br></br>
                    </ReactBootStrap.Row>
                    <ReactBootStrap.Row className="cards4">
                        <p class="card-text4">Whether for your loved ones or for yourself, <br></br>treat yourself with a privileged moment of home music by clicking on this gift.</p>
                        <br></br>
                    </ReactBootStrap.Row>
                    <ReactBootStrap.Row className="cards4">
                        <div class="center">
                        <a class="center" href={process.env.PUBLIC_URL + '/#/order'}>
                            <img id="img" src={seventhPicture}></img>
                        </a>
                        </div>
                    </ReactBootStrap.Row>
                </div>

                </ReactBootStrap.Container>
                
                
            
            
            
        )
    };
};

export default Home