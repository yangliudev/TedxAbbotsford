import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./Info.css"
import "./../../Navbar/Navbar.css"
class Info extends Component {

    render() {

        function active1(){
            document.getElementById("about").style.color = "red";
            document.getElementById("home").style.color = "white";
            document.getElementById("faq").style.color = "white";
            document.getElementById("info").style.color = "white";
        }

        function active2(){
            document.getElementById("about").style.color = "white";
            document.getElementById("home").style.color = "white";
            document.getElementById("faq").style.color = "red";
            document.getElementById("info").style.color = "white";
        }
        function non_active(){
            document.getElementById("about").style.color = "white";
            document.getElementById("home").style.color = "white";
            document.getElementById("faq").style.color = "white";
            document.getElementById("info").style.color = "white";
        }

     
        return (
            <ReactBootStrap.Container className="top-space">
             <div className="info-page-display">
            
            <ReactBootStrap.Row>
                <ReactBootStrap.Col><h1 class="info">Practical Information</h1>
                </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                {/* <div style={{marginLeft:'auto', marginRight:'auto'}}> */}
                <ReactBootStrap.Row >

                <div className="infobox1">
                <ReactBootStrap.Col><p class='title'>About In The Garden</p>
                <p class='size'>The platform  in the Garden  was created by Klangbox on May 1, 2020 with the aim of brightening up the daily lives of people</p>
                
                <a href="/#/about">
                <button className="button1" onClick={active1}>
                Learn More
                </button>
                </a>
              
                </ReactBootStrap.Col>
                </div>

                <div id="box_between" style={{width:"50px"}}></div>

                
                <div className="infobox1_2">
                <ReactBootStrap.Col>
                    <div style={{width:"250px"}}>
                <p class='title'>Our Musicians</p>
                <p class='size'>100% musiquality!</p>

                <div style={{marginTop:"auto"}}>
                    <br/><br/>
                <a href="/#/ourmusicians">
                <button class="button1" herf="/#/ourmusicians" onClick={non_active}>
                Learn More
                </button>
                </a>
                </div>
                </div>

                </ReactBootStrap.Col>
                </div>
                


                </ReactBootStrap.Row>
                {/* </div> */}


                <ReactBootStrap.Row>
                <div className="infobox2" style={{marginLeft:"auto"}}>
                <ReactBootStrap.Col>
                    <p class='title'>The Games Rules</p>
                    <p class='size'>Some little information so that everything goes well during a musical performance in the Garden.</p>
               
                    <a href="/#/gamesrules">
                    <button className="button2" href="/#/gamesrules" onClick={non_active}>
                        Learn More
                    </button>
                    </a>

                </ReactBootStrap.Col>
                </div>
                <div id="box_between" style={{width:"50px"}}></div>

                <div className="infobox2" style={{marginRight:"auto"}}>
                <ReactBootStrap.Col>
                    <p class='title'>FAQ</p>
                    <p class='size'>Looking for useful information? Find out what our clients ask us most frequently.</p>
                    <br/><br/>
                    <a href="/#/faq">
                    <button className="button2" href="/#/faq" onClick={active2}>
                        Learn More
                    </button>
                    </a>

                </ReactBootStrap.Col>
                </div>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row >
                
                <div className="infobox3" style={{marginLeft:"auto"}}>
                <ReactBootStrap.Col>
                    <p class='title'>"Green" CONCERTS</p>
                    <p class='size'>After the "slow food", here is the "slow music" !</p><br/><br/>
  

                    <a href="/#/greenconcerts">
                    <button className="button3" href="/#/gamesrules" onClick={non_active}>
                        Learn More
                    </button>
                    </a>

                </ReactBootStrap.Col>
                </div>
                <div id="box_between" style={{width:"50px"}}></div>

                <div className="infobox3" style={{marginRight:"auto"}}>
                <ReactBootStrap.Col>
                    <p class='title' style={{fontSize:"48px"}}>WE ARE TALKING ABOUT IT!</p>
                    <p class='size'>TVs, radios, newspapers ... <br/>Our interventions on the media. </p>
                    <br/><br/>
                    <a href="/#/about">
                    <button className="button3" onClick={active1}>
                        Learn More
                    </button>
                    </a>

                </ReactBootStrap.Col>
                </div>
                </ReactBootStrap.Row>
















                {/* <ReactBootStrap.Container >

                <ReactBootStrap.Row>
                <ReactBootStrap.Col className="infobox3">
                    <p class='title'>"Green" concerts</p>
                    <p class='size'>After the "slow food" , <br></br>here is the "slow music"!</p>

                    <a href="/#/greenconcerts">
                    <button className="button3" href="/#/greenconcerts">
                        Learn More
                    </button>
                    </a>

                </ReactBootStrap.Col>
                <ReactBootStrap.Col className="infobox3">
                    <p class='title'>"Green" concerts</p>
                    <p class='size'>After the "slow food" , <br></br>here is the "slow music"!</p>

                    <a href="/#/greenconcerts">
                    <button className="button3" href="/#/greenconcerts">
                        Learn More
                    </button>
                    </a>

                </ReactBootStrap.Col>

                </ReactBootStrap.Row>
                </ReactBootStrap.Container> */}


                </div>
            </ReactBootStrap.Container>

        )
    };
};

export default Info