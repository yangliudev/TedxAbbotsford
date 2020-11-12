import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./Musicians.css"

import firstPhoto from "./../../../assets/logos/arrow.png"

class Musicians extends Component {

    render() {

     
        return (
            <ReactBootStrap.Container className="top-space" style={{marginBottom:'200px'}}>
             <div className="info-display">
            
            <ReactBootStrap.Row className="justify-content-md-center" >
                <ReactBootStrap.Col><h1 class="info3">THE MUSICIANS</h1>
                </ReactBootStrap.Col>
                <p class="text">The musicians in the Garden are all professional. Students of a Haute École de Musique or already active on the Swiss and international music scene, what they present during a meeting in the Garden is only a small facet of their talents. We hope that these links, created with artists near you, will arouse curiosity and the desire to go to one of their concerts that they will organize in the future.</p>
                <ReactBootStrap.Col><h1 class="info2">MUSIC STYLE AND REPERTIORE</h1>
                </ReactBootStrap.Col>
                <p class="text2">Bossa nova, violin, Bach, percussion rhythms, alphorn, guitar, musette, gypsy jazz, baroque, cello, opera, ethno, song to text, flute, Schubert, accordion, Piazzola, etc.</p>
                <ReactBootStrap.Col><p class="text3">In addition to this, you will need to know more about it.</p></ReactBootStrap.Col>
                <p class="text">The artistic profile of each musician in the Garden is unique! Each musician creates his own repertoire for a musical rendezvous. We are sensitive to the fact that the performance of the musician is a unique moment, a nice interlude for the beneficiaries. In addition to this, you will need to know more about it. It is for this reason that we do not provide entertainment or music in the background of an event.</p>
                <ReactBootStrap.Col><h1 class="info2">LET YOURSELF BE SURPRISED!</h1>
                </ReactBootStrap.Col>
                <p class="text">You choose the style of music, we take care of finding the ideal artist depending on availability and the distance between the place of performance and the home of the musicians.
                In addition to this, you will need to know more about it.
                A harp in your living room or a pop singer on your terrace! Let yourself be surprised by the instruments and musicians who will present themselves on D-Day! Surprise is part of the rules of the game! </p>
                </ReactBootStrap.Row>
            <a href="/#/info">
            <img src={firstPhoto} className="arrow"></img>
            </a>
                </div>
            </ReactBootStrap.Container>


        )
    };
};

export default Musicians