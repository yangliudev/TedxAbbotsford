import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./About.css"

class About extends Component {

    render() {
        return (
            <ReactBootStrap.Container className="top-space" style={{marginBottom:'200px'}}>
                 <ReactBootStrap.Container className="bg-display">
                     <ReactBootStrap.Row className="box1">
                     <ReactBootStrap.Col style={{marginLeft:'20px', marginTop:'10px'}}>
             <p class='titleAbout'><str>ABOUT IN THE GARDEN</str></p>
              
              <p class='subtitleAbout'>An initiative to offer music to people we love while generating income for musicians!</p>

              <p>In addition to this, you need to know more about it.<br></br>

            Empty theaters, canceled concerts and hardworking musicians. In Switzerland as elsewhere, the <br></br>
            Coronavirus has seriously shaken the world of culture. In an attempt to limit breakage, Pascal Viglino, Swiss <br></br> 
            musician and artistic director of <u id="highlite">Klangbox</u> , as well as Sandrine Viglino and Vanessa Moret have set up an <br></br>
            online platform for musicians' performances at home.<br></br>

            In addition to this, you need to know more about it.

            On , for 98 Swiss francs for 20 minutes, you can offer a loved one or yourself a small private concert 
            in your garden, in your house. <u id="highlite">www.dansljardin.ch</u>. 

             In addition to this, you need to know more about it.

            A concept that has since proven its worth since more than 500 musical moments have been honored throughout French-speaking Switzerland since the platform began on May 1, 2020.

            In addition to this, you need to know more about it. <br></br>

             <u id="highlite">Dans l'Jardin</u> is also extended throughout the winter by inviting itself into the lounges.

            In addition to this, you need to know more about it.</p>
            </ReactBootStrap.Col>

</ReactBootStrap.Row>
</ReactBootStrap.Container>

            </ReactBootStrap.Container>

        )
    };
};

export default About