import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./Info.css"

class Info extends Component {

    render() {

     
        return (
            <ReactBootStrap.Container className="top-space">
             <div className="bg-display">
            
            <ReactBootStrap.Row className="justify-content-md-center" >
                <ReactBootStrap.Col><h1 class="info">Practical Information</h1>
                </ReactBootStrap.Col>
                </ReactBootStrap.Row>

           
                <ReactBootStrap.Container>
                <ReactBootStrap.Row >

                
<<<<<<< Updated upstream:src/components/Info/Info.js
                <ReactBootStrap.Col md={{ span: 3, offset: 2 }} style={{backgroundColor:"rgb(93, 188, 210)",
                padding: '10px', borderRadius:'15px', color:'white',textAlign:'center',marginBottom:'30px' }}><p class='title'>About In The Garden</p>
                <p class='size'>The platform  in the Garden  was created by Klangbox <br></br> on May 1, 2020 with the aim of brightening up <br></br> the daily lives of people ...</p>
=======
                <ReactBootStrap.Col md={{ span: 4, offset: 1 }} className="infobox1"><p class='title'>About In The Garden</p>
                <p class='size'>The platform  in the Garden  was created by Klangbox on May 1, 2020 with the aim of brightening up the daily lives of people ...</p>
>>>>>>> Stashed changes:src/components/Pages/Info/Info.js
                
                <a href="/#/about">
                <button class="button1" href="/#/about">
                Learn More
                </button>
                </a>
              
                </ReactBootStrap.Col>
             
  

          
<<<<<<< Updated upstream:src/components/Info/Info.js
                <ReactBootStrap.Col   md={{ span: 3, offset: 1 }} style={{backgroundColor:"rgb(93, 188, 210)",
                padding: '20px',marginBottom:'30px' , borderRadius:'15px',color:'white',textAlign:'center' }}>
                    <p class='title'>The Games Rules</p>
                    <p class='size'>Some little information so that everything goes well during a musical performance in the Garden.</p>
               
                    <ReactBootStrap.Button variant="primary" size="md" href="/#/test">
                        Learn More
                        </ReactBootStrap.Button>{' '}
=======
                <ReactBootStrap.Col md={{ span: 4, offset: 2 }} className="infobox1">
                    <br></br><br></br>
                <p class='title'>Our Musicians</p>
                <p class='size'>100% musiquality!</p>

                <a href="/#/ourmusicians">
                <button class="button1" herf="/#/ourmusicians">
                Learn More
                </button>
                </a>
>>>>>>> Stashed changes:src/components/Pages/Info/Info.js

                </ReactBootStrap.Col>
                


                </ReactBootStrap.Row>
                </ReactBootStrap.Container>

                <ReactBootStrap.Container >

                <ReactBootStrap.Row >
                
<<<<<<< Updated upstream:src/components/Info/Info.js
                <ReactBootStrap.Col  md={{ span: 3, offset: 2 }} style={{backgroundColor:"	rgb(215, 11, 82)",
                padding: '50px',marginBottom:'30px', borderRadius:'15px', color:'white' ,textAlign:'center' }}>
                    <p class='title'>Our Musicians</p>
                    <p class='size'>100% musiquality!</p>
               
                    <ReactBootStrap.Button variant="primary" size="md">
=======
                <ReactBootStrap.Col  md={{ span: 4, offset: 1 }} className="infobox2">
                    <p class='title'>The Games Rules</p>
                    <p class='size'>Some little information so that everything goes well during a musical performance in the Garden.</p>
               
                    <a href="/#/gamesrules">
                    <button className="button2" href="/#/gamesrules">
>>>>>>> Stashed changes:src/components/Pages/Info/Info.js
                        Learn More
                    </button>
                    </a>

                </ReactBootStrap.Col>

<<<<<<< Updated upstream:src/components/Info/Info.js
                <ReactBootStrap.Col md={{ span: 3, offset: 1 }} style={{backgroundColor:"	rgb(215, 11, 82)", 
                padding: '10px',marginBottom:'30px', borderRadius:'15px', color:'white' ,textAlign:'center' }}>
                    <p class='title'>FAQ</p>
                    <p class='size'>Looking for useful information? Find out what our clients ask us most frequently</p>
               
                    <ReactBootStrap.Button variant="primary" size="md">
=======
                <ReactBootStrap.Col md={{ span: 4, offset: 2 }} className="infobox2">
                    <p class='title'>FAQ</p>
                    <p class='size'>Looking for useful information? Find out what our clients ask us most frequently</p>
               
                    <a href="/#/faq">
                    <button className="button2" href="/#/faq">
>>>>>>> Stashed changes:src/components/Pages/Info/Info.js
                        Learn More
                    </button>
                    </a>

                </ReactBootStrap.Col>
                </ReactBootStrap.Row></ReactBootStrap.Container>

                <ReactBootStrap.Container >

                <ReactBootStrap.Row style={{marginBottom:'200px' }}>
<<<<<<< Updated upstream:src/components/Info/Info.js
                <ReactBootStrap.Col  md={{ span: 3, offset: 2 }}  style={{backgroundColor:"	rgb(186, 218, 85)",
                padding: '10px',marginBottom:'30px', borderRadius:'15px', color:'white' ,textAlign:'center' }}>
                    <p class='title'>"Green" concerts</p>
                    <p class='size'>After the "slow food" , <br></br>here is the "slow music" !</p>
               
                    <ReactBootStrap.Button variant="primary" size="md">
                        Learn More
                        </ReactBootStrap.Button>{' '}

                </ReactBootStrap.Col>

                <ReactBootStrap.Col  md={{ span: 3, offset: 1 }}  style={{backgroundColor:"	rgb(186, 218, 85)",
                padding: '10px',marginBottom:'30px', borderRadius:'15px', color:'white' ,textAlign:'center' }}>
                    <p class='title'>we are talking about it !</p>
                    <p class='size'>TVs, radios, newspapers ... <br></br>Our interventions on traditional media </p>
               
                    <ReactBootStrap.Button variant="primary" size="md">
=======
                <ReactBootStrap.Col  md={{ span: 4, offset: 4}} className="infobox3">
                    <p class='title'>"Green" concerts</p>
                    <p class='size'>After the "slow food" , <br></br>here is the "slow music"!</p>

                    <a href="/#/greenconcerts">
                    <button className="button3" href="/#/greenconcerts">
>>>>>>> Stashed changes:src/components/Pages/Info/Info.js
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