import React, { Component } from 'react';
import ReactPlayer from "react-player"
import * as ReactBootStrap from "react-bootstrap";
import MediaQuery from 'react-responsive';
import tower from "./../../assets/tower/Tour_z.png"
import firstPicture from "./../../assets/logos/02_picto-canton.png"
import secondPicture from "./../../assets/logos/02-picto-adresse.png"
import thirdPicture from "./../../assets/logos/02-picto-artiste.png"
import fourthPicture from "./../../assets/logos/02-picto-paiement.png"
import committeePicture from "./../../assets/logos/commitee.png"
import pricePic from "./../../assets/logos/money.png"
import fifthPicture from "./../../assets/logos/03-picto-durée.png"
import sixthPicture from "./../../assets/logos/03-picto-don.png"
import seventhPicture from "./../../assets/logos/cadeauici.webp"
import video from "./../../assets/video/homepage-video.mp4"
import firstPhoto from "./../../assets/photos/firstPhoto.jpg"
import secondPhoto from "./../../assets/photos/secondPhoto.jpg"
import thirdPhoto from "./../../assets/photos/thirdPhoto.jpg"
// import fourthPhoto from "./../../assets/photos/fourthPhoto.jpg"
import fifthPhoto from "./../../assets/photos/fifthPhoto.jpg"
import sixthPhoto from "./../../assets/photos/sixthPhoto.jpg"
import seventhPhoto from "./../../assets/photos/seventhPhoto.jpg"
import eighthPhoto from "./../../assets/photos/eighthPhoto.jpg"

import facebookLogo from "./../../assets/logos/facebookLogo.png"
import instagramLogo from "./../../assets/logos/instagramLogo.png"
// import gardenLogo from"./../../assets/logos/01_Logo-principal.png"
import "./Home.css"

//Include thid \/ later as this is required for IG Feed
import Feed from "react-instagram-authless-feed"

// import { Landscape, Portrait } from '@material-ui/icons';

class Home extends Component {

    render() {
        return (
            <ReactBootStrap.Container className="top-space1">


                <ReactBootStrap.Row style={{paddingTop:"50px"}}>
                        {/* <div id="main-box"> */}

                        <div id="left_boxes" style={{marginLeft:"auto", marginTop:"100px"}}>

                        <div className="fade-in2" style={{width:"200px", marginLeft:"-20px", marginTop:"-10px"}}>
                        <p id="towerText1" style={{textAlign:"right", lineHeight: "19px"}}>A trumpet player for<br/>30 years named Andrew.</p>
                        <div style={{marginTop:'-20px', textAlign:"right", width:"183px"}}><p id="towerText1-2">Monday 6.30 p.m. - Burnaby</p></div>
                        </div>

                        <div className="fade-in3" style={{width:"250px", marginTop:"280px", marginRight:"-50px"}}>
                        <p id="towerText1" style={{textAlign:"right", lineHeight: "18px"}}>An accordionist under Aunt <br/>Neda's balcony. </p>
                        <div style={{marginTop:'-20px', width:"209px", textAlign:"right"}}><p id="towerText1-2">Wednesday 3:30 p.m. - Vancouver</p></div>
                        </div>

                        </div>

                        <div className='tower_home_pos'>

                        <img alt="" src={tower} className="tower-new"  />
                        </div>

                        


                        <div class="home_box_pos">

                        <div id="right_box" className="fade-in" style={{width:'350px', height:"100px", marginLeft:"-90px", marginBottom:"50px", marginTop:"-150px"}}>
                        <p id="towerText1" style={{lineHeight: "18px"}}>A saxophonist for Anthony and Karan, Jazzy atmosphere! </p>
                        <div style={{marginTop:'-20px'}}><p id="towerText1-2">Saturday 11:00 am - Surrey</p></div>
                        </div>
                                <p className="mainTowerText">SEND <br/>A MUSICAL EXPERIENCE <br/>TO THE PEOPLE YOU LOVE.</p>
                                <p className="mainTowerText" style={{color:'#D60B52'}}>IN LESS THAN 3 MINUTES!</p>
                            <a href={process.env.PUBLIC_URL + '/#/order'}><input type="button" value="Order now" className="home_Button" /></a>
                        </div>
                        {/* </div> */}


                </ReactBootStrap.Row>
                {/* <ReactBootStrap.Row >
                    <ReactBootStrap.Col md={{ span: 2 }}>
                        <div class="towerDescription">
                            <p class="towerDescriptionText">A trumpeter for 30 years named Leonardo. <br></br>Monday 6.30 p.m. - Lausanne</p><br></br>
                        </div></ReactBootStrap.Col>
                    <ReactBootStrap.Col md={{ span: 3 }}>
                        <div class="towerDiv">
                            <img alt="" src={tower} className="tower"></img>
                        </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col>
                                <div class="Description">
                                    <p class="towerDescriptionText">An accordionist under Aunt Jacqueline's balcony.<br></br> Wednesday 3:30 p.m. - Yverdon</p>
                                </div></ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                        <ReactBootStrap.Row>
                            <ReactBootStrap.Col >
                                <div class="textBG">
                                    <div class="textAlign">
                                        <p class="towerText"><span class="firstTowerText">OFFER A MUSICIAN AT HOME <br />TO THE PEOPLE YOU LOVE,<br /></span> <span class="secondTowerText">IN LESS THAN 3 MINUTES!</span></p>
                                    </div>

                                    <div class="buttonAlign">
                                        <a href={process.env.PUBLIC_URL + '/#/order'}>
                                            <input type="button" value="Order Now" class="orderButton"></input>
                                        </a>
                                    </div>
                                </div></ReactBootStrap.Col>

                        </ReactBootStrap.Row>

                    </ReactBootStrap.Col>
                </ReactBootStrap.Row> */}


                {/* <ReactBootStrap.Row>
                    <ReactBootStrap.Col className='b' xs={6} md={4}>
                        <div class="towerDescription">
                            <p class="towerDescriptionText">A saxophonist for Nadine and Yves, <br></br>Jazzy atmosphere! Saturday 11:00 am - Grimentz</p><br></br>
                        </div></ReactBootStrap.Col>

          
                </ReactBootStrap.Row> */}



                <ReactBootStrap.Row>
                    <div class="top-space2">
                        <br></br>
                        <div class="textAlign">
                            <MediaQuery orientation={"Landscape"}>
                                <h1 class="textAlign2">DANS L'<span class="secondTowerText">JARDIN</span>, HOW DOES IT WORK?</h1>
                            </MediaQuery>

                            <MediaQuery orientation={"Portrait"}>
                                <h1 class="textAlign2">DANS L'<span class="secondTowerText"> JARDIN</span>, <br/>HOW DOES IT WORK?</h1>
                            </MediaQuery>
                        </div>

                        <ReactBootStrap.Row className="cards">
                            <ReactBootStrap.Col md={3}>

                                <h1 class="secondsection" id = 'proxima'>1</h1>
                                <h1 class="cardHeader" id = 'neutra'>Tell us the occasion</h1>

                                <img alt="" class="card-img-top" src={firstPicture} style={{ width: "50%" }}></img>
                                <br></br>
                                <p class="card-text3" id = 'neutra2'><br />"A birthday party with friends!"</p><br/>
                                {/* <p class="card-text3" id = 'neutra2'>"A little aperitif with friends"</p><br/> */}
                                <p class="card-text3" id = 'neutra2'>"Violin for a romantic evening!"</p>

                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col md={3}>

                                <h1 class="secondsection" id = 'proxima'>2</h1>
                                <h1 class="cardHeader" id = 'neutra'>Decide the music<br></br><br></br></h1>
                                <img alt="" class="card-img-top" style={{ width: "50%" }} src={thirdPicture}></img>
                                <p class="card-text3" id = 'neutra2'><br />You decide the style of music! We find the musicians available in your region according to the time and date you select.</p>

                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col md={3}>

                                <h1 class="secondsection" id = 'proxima'>3</h1>
                                <h1 class="cardHeader" id = 'neutra'>Pay online<br></br><br></br></h1>
                                <img alt="" class="card-img-top" src={fourthPicture} style={{ width: "50%" }}></img>
                                <p class="card-text3" id = 'neutra2'><br />After giving us all the necessary information , enjoy a fast and secure payment.</p>

                            </ReactBootStrap.Col>

                            <MediaQuery orientation={"Landscape"}>
                            <ReactBootStrap.Col md={3}>

                                <h1 class="secondsection" id = 'proxima'>4</h1>
                                <h1 class="cardHeader" id = 'neutra'>Listen and savor<br></br><br></br></h1>
                                <img alt="" class="card-img-top" src={secondPicture} style={{ width: "50%" }}></img>
                                <p class="card-text3"  id = 'neutra2'><br />On the time and date chosen one or more musicians will come and play for the person of your choice for 20 minutes. Make sure to tell us where you want this musical experience to take place.</p>
                                {/* <p class="card-text2" id = 'neutra'>Let the music begin!</p> */}

                            </ReactBootStrap.Col>
                            </MediaQuery>

                            <MediaQuery orientation={"Portrait"}>
                            <ReactBootStrap.Col md={3} style={{paddingBottom:"70px"}}>

                                <h1 class="secondsection" id = 'proxima'>4</h1>
                                <h1 class="cardHeader" id = 'neutra'>Listen and savor<br></br><br></br></h1>
                                <img alt="" class="card-img-top" src={secondPicture} style={{ width: "50%" }}></img>
                                <p class="card-text3"  id = 'neutra2'><br />On the date and at the time indicated, one or two musicians will appear in front of the beneficiary's door on time and will play for 20 minutes. </p>
                                {/* <p class="card-text2" id = 'neutra'>Let the music begin!</p> */}

                            </ReactBootStrap.Col>
                            </MediaQuery>

                        </ReactBootStrap.Row>
                    </div>
                </ReactBootStrap.Row>


                <ReactBootStrap.Row>
                    <div className="cards3">
                        <br></br>
                        <h1 class="textAlign2">THE GAME'S RULES</h1>

                        <ReactBootStrap.Row className="cards2" style={{marginTop:"2%"}}>
                            <ReactBootStrap.Col md={4}>

                                <h1 class="textAlign3">DURATION</h1>
                                <img alt="" class="card-img-top2" id="img2" src={fifthPicture} style={{ width: "30%" , marginBottom:'20px'}}></img><br></br>
                                <h1 class="cardHeader" id = "gamerule" style={{fontSize:"30px"}}>20 minutes of music</h1>

                            </ReactBootStrap.Col>

                            <ReactBootStrap.Col md={4} style={{marginBottom:'-50px'}}>
                                <h1 class="textAlign3">PUBLIC</h1>
                                <img alt="" class="card-img-top2" id="img2" src={committeePicture} style={{ width: "35%" , marginBottom:'20px'}}></img>
                                <h1 class="cardHeader" id = 'neutra' style={{fontSize:"30px"}}>in a small group with</h1>
                            </ReactBootStrap.Col>

                            <ReactBootStrap.Col md={4}>

                                <h1 class="textAlign3">PRICE</h1>
                                <img alt="" class="card-img-top2" id="img2" src={pricePic} style={{ width: "35%" , marginBottom:'25px'}}></img>
                                <h1 class="cardHeader" id = 'neutra' style={{fontSize:"30px"}}>one or two professional musicians</h1>

                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                    </div>
                </ReactBootStrap.Row>



                <ReactBootStrap.Row>
                    <div class="cards4">
                        <br></br>
                        <div style={{marginTop:'30px', marginBottom:'30px'}}>
                        <h1 class="textAlign2">SEND AN IN-PERSON MUSICAL HUG TODAY! </h1>
                        <br></br>
                        <p class="card-text4" style={{fontSize:'25px'}}>Whether for your loved ones or for yourself, <br></br>treat yourself with a privileged moment of home music by clicking on this gift.</p>
                        <br></br>
                        <ReactBootStrap.Row>
                            <div class="center">
                                <a class="center" href={process.env.PUBLIC_URL + '/#/order'}>
                                    <div class="presentBackground">
                                        <img alt="" class="presentImg" src={seventhPicture}></img>
                                    </div>
                                </a>
                            </div>
                        </ReactBootStrap.Row>
                    </div>
                    </div>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                    <div className="cards3">
                        <br></br>
                        <div style={{marginTop:'30px', marginBottom:'50px'}}>

                        <h1 class="textAlign2" style={{paddingTop:'20px', paddingBottom:'50px'}}>THIS IS DANS L'JARDIN!</h1>
                        <div className="player-wrapper">
                            <MediaQuery orientation={"Landscape"}>
                                <ReactPlayer
                                    className="react-player"
                                    url={video}

                                    width="50%"
                                    height="50%"
                                    controls="true"
                                    style={{ outline: "none" }}
                                />
                            </MediaQuery>

                            <MediaQuery orientation={"Portrait"}>
                                <ReactPlayer
                                    className="react-player"
                                    url={video}

                                    width="80%"
                                    height="80%"
                                    controls="true"
                                    style={{ outline: "none" }}
                                />
                            </MediaQuery>
                        </div>
                        <br></br>
                        <div class="textAlign">
                            <p class="card-text5"><span class="card-text6">" </span>The promise of a unique and emotional moment.<span class="card-text6"> "</span></p>
                        </div>
                    </div>
                    </div>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                    <div class="cards4">
                        <br></br>
                        <div style={{marginTop:'20px', marginBottom:'20px'}}>
                        <h1 class="textAlign2">PRACTICAL INFORMATION</h1>
                         <br></br>
                        <p class="card-text4">Everything you need to know about <span class="card-text7">In The Garden.</span></p>
                        <div class="buttonAlign">
                            <a href={process.env.PUBLIC_URL + '/#/info'}>
                                <input type="button" value="Learn More" class="LearnMoreButton"></input>
                            </a>
                        </div>
                        <br></br>
                    </div>
                    </div>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                    <div className="cards3">
                        <br></br>
                        <h1 class="textAlign2" style={{paddingTop:'20px', paddingBottom:'50px'}}>SOME UNFORGETTABLE MOMENTS</h1>
                        
                        <MediaQuery orientation={"landscape"}>

                        
                        <ReactBootStrap.Carousel className="buttonAlign2">
                            <ReactBootStrap.Carousel.Item interval={1000}>
                                <div className="carouseImageContainer" >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={firstPhoto}
                                        alt="First slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={1000}>
                                <div className="carouseImageContainer" >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={secondPhoto}
                                        alt="Third slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={1000}>
                                <div className="carouseImageContainer" >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={thirdPhoto}
                                        alt="Third slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={1000}>
                                <div className="carouseImageContainer" >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={fifthPhoto}
                                        alt="Fourth slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={1000}>
                                <div className="carouseImageContainer" >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={sixthPhoto}
                                        alt="Fifth slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={1000}>
                                <div className="carouseImageContainer" >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={seventhPhoto}
                                        alt="Sixth slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={1000}>
                                <div className="carouseImageContainer" >
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={eighthPhoto}
                                        alt="Seventh slide"
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                        </ReactBootStrap.Carousel>
                        </MediaQuery>

                        <MediaQuery orientation={"portrait"}>

                        <ReactBootStrap.Carousel className="buttonAlign2" >
                            <ReactBootStrap.Carousel.Item interval={1000}>
                                <div className="carouseImageContainer" style={{padding: "20px"}}>
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={firstPhoto}
                                        alt="First slide"
                                        // style={{height: "400px"}}

                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={1000}>
                                <div className="carouseImageContainer" style={{padding: "20px"}}>
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={secondPhoto}
                                        alt="Third slide"
                                        // style={{height: "400px"}}

                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={1000}>
                                <div className="carouseImageContainer" style={{padding: "20px"}}>
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={thirdPhoto}
                                        alt="Third slide"
                                        // style={{height: "400px"}}

                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={1000}>
                                <div className="carouseImageContainer" style={{padding: "20px"}}>
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={fifthPhoto}
                                        alt="Fourth slide"
                                        // style={{height: "400px"}}

                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={1000}>
                                <div className="carouseImageContainer" style={{padding: "20px"}}>
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={sixthPhoto}
                                        alt="Fifth slide"
                                        // style={{height: "400px"}}
                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={1000}>
                                <div className="carouseImageContainer" style={{padding: "20px"}}>
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={seventhPhoto}
                                        alt="Sixth slide"
                                        // style={{height: "400px"}}

                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                            <ReactBootStrap.Carousel.Item interval={1000}>
                                <div className="carouseImageContainer" style={{padding: "20px"}}>
                                    <img
                                        className="carouselImage d-block w-100"
                                        src={eighthPhoto}
                                        alt="Seventh slide"
                                        // style={{height: "400px"}}

                                    />
                                </div>
                            </ReactBootStrap.Carousel.Item>
                        </ReactBootStrap.Carousel>

                        </MediaQuery>
                    </div>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                    <div className="cards3">
                        <br></br>
                        <br></br>
                        <h1 class="textAlign2">FOLLOW US ON SOCIAL MEDIAS</h1>
                        <a href="https://www.facebook.com/dansljardin" target="_blank" rel="noopener noreferrer">
                            <img alt="" src={facebookLogo} className="logo" />
                        </a>
                        <a href="https://www.instagram.com/dans_l_jardin/" target="_blank" rel="noopener noreferrer">
                            <img alt="" src={instagramLogo} className="logo" />
                        </a>
                    </div>

                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                    <div className="cards3">
                <br></br>

                    {/* <Feed userName="dans_l_jardin" className="Feed" classNameLoading="Loading" /> */}
                </div>
                </ReactBootStrap.Row>







            </ReactBootStrap.Container>







        )
    };
};

export default Home