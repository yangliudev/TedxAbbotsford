import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./GreenConcerts.css"

import firstPhoto from "./../../../assets/logos/arrow.png"

class GreenConcerts extends Component {

    render() {

     
        return (
            <ReactBootStrap.Container className="top-space" style={{paddingBottom:'200px'}}>
             <div className="info-display">
             <ReactBootStrap.Row>
             <ReactBootStrap.Col><h1 className="info33"><span class="thirdTowerText">GREEN</span> CONCERTS</h1>
            </ReactBootStrap.Col>
            </ReactBootStrap.Row>
 
            <p className="text33">With the platform, we strive to offer musicians closest to you. <br></br>Depending on the artist's availability, we try to limit the distance between his home and the place of the performance to 15-20 minutes.

<br></br>In addition to this, you will need to know more about it.

<br></br>It is easy to do for the cities, but it is important to us to have the possibility of offering music in the countryside and more isolated places. <br></br>That is why we are always looking for musicians living outside the cities. </p>


                </div>
               
            </ReactBootStrap.Container>


        )
    };
};

export default GreenConcerts