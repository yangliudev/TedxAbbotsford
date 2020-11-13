import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./Info.css"

class Info extends Component {

    render() {

     
        return (
            <ReactBootStrap.Container className="top-space">
             <div className="info-display">
            
            <ReactBootStrap.Row className="justify-content-md-center" >
                <ReactBootStrap.Col><h1 class="info">Practical Information</h1>
                </ReactBootStrap.Col>
                </ReactBootStrap.Row>

           
                <ReactBootStrap.Container>
                <ReactBootStrap.Row >

                
                <ReactBootStrap.Col md={{ span: 4, offset: 1 }} className="infobox1"><p class='title'>About In The Garden</p>
                <p class='size'>The platform  in the Garden  was created by Klangbox on May 1, 2020 with the aim of brightening up the daily lives of people ...</p>
                
                <a href="/#/about">
                <button class="button1" href="/#/about">
                Learn More
                </button>
                </a>
              
                </ReactBootStrap.Col>
             
  

          
                <ReactBootStrap.Col md={{ span: 4, offset: 2 }} className="infobox1">
                    <br></br><br></br>
                <p class='title'>Our Musicians</p>
                <p class='size'>100% musiquality!</p>

                <a href="/#/ourmusicians">
                <button class="button1" herf="/#/ourmusicians">
                Learn More
                </button>
                </a>

                </ReactBootStrap.Col>
                


                </ReactBootStrap.Row>
                </ReactBootStrap.Container>

                <ReactBootStrap.Container >

                <ReactBootStrap.Row >
                
                <ReactBootStrap.Col  md={{ span: 4, offset: 1 }} className="infobox2">
                    <p class='title'>The Games Rules</p>
                    <p class='size'>Some little information so that everything goes well during a musical performance in the Garden.</p>
               
                    <a href="/#/gamesrules">
                    <button className="button2" href="/#/gamesrules">
                        Learn More
                    </button>
                    </a>

                </ReactBootStrap.Col>

                <ReactBootStrap.Col md={{ span: 4, offset: 2 }} className="infobox2">
                    <p class='title'>FAQ</p>
                    <p class='size'>Looking for useful information? Find out what our clients ask us most frequently</p>
               
                    <a href="/#/faq">
                    <button className="button2" href="/#/faq">
                        Learn More
                    </button>
                    </a>

                </ReactBootStrap.Col>
                </ReactBootStrap.Row></ReactBootStrap.Container>

                <ReactBootStrap.Container >

                <ReactBootStrap.Row style={{marginBottom:'200px' }}>
                <ReactBootStrap.Col  md={{ span: 4, offset: 4}} className="infobox3">
                    <p class='title'>"Green" concerts</p>
                    <p class='size'>After the "slow food" , <br></br>here is the "slow music"!</p>

                    <a href="/#/greenconcerts">
                    <button className="button3" href="/#/greenconcerts">
                        Learn More
                    </button>
                    </a>

                </ReactBootStrap.Col>

                </ReactBootStrap.Row>
                </ReactBootStrap.Container>
                </div>
            </ReactBootStrap.Container>

        )
    };
};

export default Info
