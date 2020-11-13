import React, { Component } from 'react';
import ReactPlayer from "react-player"
import * as ReactBootStrap from "react-bootstrap";
import MediaQuery from 'react-responsive';
import tower from "./../../assets/tower/Tour_z.png"
import firstPicture from "./../../assets/logos/02_picto-canton.png"
import secondPicture from "./../../assets/logos/02-picto-adresse.png"
import thirdPicture from "./../../assets/logos/02-picto-artiste.png"
import fourthPicture from "./../../assets/logos/02-picto-paiement.png"
import fifthPicture from "./../../assets/logos/03-picto-durée.png"
import sixthPicture from "./../../assets/logos/03-picto-don.png"
import seventhPicture from "./../../assets/logos/cadeauici.webp"

import video from "./../../assets/video/homepage-video.mp4"
import firstPhoto from "./../../assets/photos/firstPhoto.jpg"
import secondPhoto from "./../../assets/photos/secondPhoto.jpg"
import thirdPhoto from "./../../assets/photos/thirdPhoto.jpg"
import fourthPhoto from "./../../assets/photos/fourthPhoto.jpg"
import fifthPhoto from "./../../assets/photos/fifthPhoto.jpg"
import sixthPhoto from "./../../assets/photos/sixthPhoto.jpg"
import seventhPhoto from "./../../assets/photos/seventhPhoto.jpg"
import eighthPhoto from "./../../assets/photos/eighthPhoto.jpg"

import facebookLogo from "./../../assets/logos/facebookLogo.png"
import instagramLogo from "./../../assets/logos/instagramLogo.png"
import gardenLogo from"./../../assets/logos/01_Logo-principal.png"
import "./Home.css"

import Feed from "react-instagram-authless-feed"
import { Landscape, Portrait } from '@material-ui/icons';

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
                <div class="top-space2">
                    <br></br>
                    <div class="textAlign">
                    <MediaQuery orientation= {"Landscape"}>
                        <h1 class="textAlign2">IN OUR<span class="secondTowerText"> GARDEN</span> , HOW DOES IT WORK?</h1>
                    </MediaQuery>
                    <MediaQuery orientation = {"portrait"}>
                    <h1 class="textAlign2">IN OUR<span class="secondTowerText"> GARDEN</span> , <br></br> HOW DOES IT WORK?</h1>
                    </MediaQuery>
                    </div>

                    <ReactBootStrap.Row className="cards">
                        <ReactBootStrap.Col md={3}>
                        
                            <h1 class="textAlign2">1</h1>
                            <h1 class="cardHeader">Inquire the occasion celebrated</h1>
                        
                            <img class="card-img-top" src={firstPicture} style={{width:"55%"}}></img> 
                            <p class="card-text3"><br/>"Grandma Léa's birthday!"</p>
                            <p class="card-text3">"A little aperitif with friends"</p>
                            <p class="card-text3">"Violin for a romantic evening!"</p>

                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md={3}>

                            <h1 class="textAlign2">2</h1>
                            <h1 class="cardHeader">Decide music<br></br><br></br></h1>
                            <img class="card-img-top" style={{width:"55%"}} src={secondPicture}></img>
                            <p class="card-text3"><br/>You decide the style of music! In addition to this, you need to know more about it. We take care of finding the musicians available in your region on the date and time indicated.</p>
                    
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md={3}>

                            <h1 class="textAlign2">3</h1>
                            <h1 class="cardHeader">Pay online<br></br><br></br></h1>
                            <img class="card-img-top" src={thirdPicture} style={{width:"55%"}}></img>
                            <p class="card-text3"><br/>After giving us all the necessary information , enjoy a fast and secure payment.</p>
                            
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md={3}>

                            <h1 class="textAlign2">4</h1>
                            <h1 class="cardHeader">Listen and savor<br></br><br></br></h1>
                            <img class="card-img-top" src={fourthPicture} style={{width:"55%"}}></img>
                            <p class="card-text3"><br/>On the day-D and at the time indicated, one or two musicians will appear in front of the beneficiary's door on time and will play for 20 minutes. </p>
                            <p class="card-text2">Let the music!</p>
                    
                        </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                    </div>
                </ReactBootStrap.Row>
                
                
                <ReactBootStrap.Row>
                <div className="cards3">
                <br></br>
                    <h1 class="textAlign2">THE GAME'S RULES</h1>
                
                    <ReactBootStrap.Row className="cards2">
                        <ReactBootStrap.Col md={4}>

                            <h1 class="textAlign2">DURATION</h1>
                            <img class="card-img-top2" id="img2" src={fifthPicture} style={{width:"75%"}}></img>
                            <h1 class="cardHeader">20 minutes of music</h1>

                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md={4}>
                            <h1 class="textAlign2">PUBLIC</h1>
                            <img class="card-img-top2" id="img2" src={fifthPicture} style={{width:"75%"}}></img>
                            <h1 class="cardHeader">in a small group with</h1>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md={4}>

                            <h1 class="textAlign2">PRICE</h1>
                            <img class="card-img-top2" id="img2" src={sixthPicture} style={{width:"75%"}}></img>
                            <h1 class="cardHeader">one or two professional musicians</h1>

                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>
                </div>
                </ReactBootStrap.Row>


                
                <ReactBootStrap.Row>
                <div class="cards4">
                <br></br>
                    <h1 class="textAlign2">SO, DO YOU WANT TO TRY A UNIQUE EXPERIENCE?</h1>
                    <br></br>
                    <p class="card-text4">Whether for your loved ones or for yourself, <br></br>treat yourself with a privileged moment of home music by clicking on this gift.</p>
                    <br></br>
                <ReactBootStrap.Row>
                    <div class="center">
                        <a class="center" href={process.env.PUBLIC_URL + '/#/order'}>
                            <div class="presentBackground">
                                    <img class="presentImg" src={seventhPicture}></img>
                            </div>
                        </a>
                    </div>
                </ReactBootStrap.Row>
                    </div>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                <div className="cards3">
                <br></br>
                    <h1 class="textAlign2">IN THE GARDEN, IN REAL LIFE, IT GIVES THAT!</h1>
                    <div className="player-wrapper">
                        <MediaQuery orientation= {"Landscape"}>
                        <ReactPlayer 
                            className="react-player"
                            url={video}
                            
                            width="50%"
                            height="50%"
                            controls="true"
                            style={{outline: "none"}}
                            />
                        </MediaQuery>

                        <MediaQuery orientation= {"Portrait"}>
                        <ReactPlayer 
                            className="react-player"
                            url={video}
                            
                            width="80%"
                            height="80%"
                            controls="true"
                            style={{outline: "none"}}
                            />
                        </MediaQuery>
                    </div>
                    <br></br>
                    <div class="textAlign">
                        <p class="card-text5"><span class="card-text6">" </span>The promise of a unique and emotional moment.<span class="card-text6"> "</span></p>
                    </div>
                </div>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                <div class="cards4">
                <br></br>
                    <h1 class="textAlign2">PRACTICAL</h1>
                    <h1 class="textAlign2">INFORMATION</h1>
                    <br></br>
                    <p class="card-text4">Everything you need to know about <span class="card-text7">In The Garden.</span></p>
                    <div class="buttonAlign">
                        <a href={process.env.PUBLIC_URL + '/#/info'}>
                            <input type="button" value="Learn More" class="LearnMoreButton"></input>
                        </a>
                    </div>
                    <br></br>
                </div>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                <div className="cards3">
                <br></br>
                <h1 class="textAlign2">SOME MEMORIES OF UNFORGETTABLE MOMENTS</h1>
                    
               
                <ReactBootStrap.Carousel className="buttonAlign2" autoPlay={true} animation={false} slideshowSpeed={100}>
                    <ReactBootStrap.Carousel.Item className="buttonAlign2">
                        <img className="carouselImage" src={firstPhoto}/>
                    </ReactBootStrap.Carousel.Item>
                    <ReactBootStrap.Carousel.Item className="buttonAlign2">
                        <img className="carouselImage" src={secondPhoto}/>
                    </ReactBootStrap.Carousel.Item>
                    <ReactBootStrap.Carousel.Item className="buttonAlign2">
                        <img className="carouselImage" src={thirdPhoto}/>
                    </ReactBootStrap.Carousel.Item>
                    <ReactBootStrap.Carousel.Item className="buttonAlign2">
                        <img className="carouselImage" src={fifthPhoto}/>
                    </ReactBootStrap.Carousel.Item>
                    <ReactBootStrap.Carousel.Item className="buttonAlign2">
                        <img className="carouselImage" src={sixthPhoto}/>
                    </ReactBootStrap.Carousel.Item>
                    <ReactBootStrap.Carousel.Item className="buttonAlign2">
                        <img className="carouselImage" src={seventhPhoto}/>
                    </ReactBootStrap.Carousel.Item>
                    <ReactBootStrap.Carousel.Item className="buttonAlign2">
                        <img className="carouselImage" src={eighthPhoto}/>
                    </ReactBootStrap.Carousel.Item>
                </ReactBootStrap.Carousel>

                <br></br>
                <br></br>
                <h1 class="textAlign2">ALSO FOLLOW US ON SOCIAL NETWORKS</h1>
                <a href="https://www.facebook.com/dansljardin" target="_blank">
                    <img src={facebookLogo} className="logo"/>
                </a>
                <a href="https://www.instagram.com/dans_l_jardin/" target="_blank">
                    <img src={instagramLogo} className="logo"/>
                </a>
                </div>

                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                <div className="cards3">
                <br></br>

                    <Feed userName="dans_l_jardin" className="Feed" classNameLoading="Loading"/>
                </div>
                </ReactBootStrap.Row>

               
               

                
                

                </ReactBootStrap.Container>

                
                
                
            
            
            
        )
    };
};

export default Home