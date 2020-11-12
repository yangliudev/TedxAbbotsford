import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./About.css"

import firstPhoto from "./../../../assets/logos/arrow.png"

class About extends Component {

    render() {
        return (
            <ReactBootStrap.Container className="top-space" style={{marginBottom:'200px'}}>
             <div className="info-display">
            
            <ReactBootStrap.Row className="justify-content-md-center" >
                <ReactBootStrap.Col><h1 class="info3">ABOUT IN THE  <span class="secondTowerText">GARDEN</span></h1>
                </ReactBootStrap.Col>
                <p class="text"><h2 class="info2">An initiative to offer music to people we love while generating income for musicians!</h2><br></br>You choose the style of music, we take care of finding the ideal artist depending on availability and the distance between the place of performance and the home of the musicians.
                In addition to this, you will need to know more about it.
                Empty theaters, canceled concerts and hardworking musicians. In Switzerland as elsewhere, the Coronavirus has seriously shaken the world of culture. In an attempt to limit breakage, Pascal Viglino, Swiss musician and artistic director of <span class="secondTowerText">Klangbox</span>  as well as Sandrine Viglino and Vanessa Moret have set up an online platform for musicians' performances at home.
                In addition to this, you will need to know more about it.
                On , for 98 Swiss francs for 20 minutes, you can offer a loved one or yourself a small private concert in your garden, in your house. <span class="secondTowerText">www.dansljardin.ch</span> In addition to this, you will need to know more about it.
                A concept that has since proven its worth since more than 700 musical moments have been honored throughout French-speaking Switzerland since the start of the platform on May 1, 2020.
                In addition to this, you will need to know more about it. <span class="secondTowerText">Dans l'Jardin</span> is also extended throughout the winter by inviting itself into the lounges.
                In addition to this, you will need to know more about it. </p>
                </ReactBootStrap.Row>

            <a href="/#/info">
            <img src={firstPhoto} className="arrow"></img>
            </a>
                </div>
            </ReactBootStrap.Container>

        )
    };
};

export default About