import React, { Component, useEffect } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./GamesRules.css"

import firstPhoto from "./../../../assets/logos/arrow.png"

function GamesRules() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
     
        return (
            <ReactBootStrap.Container className="top-space" style={{marginBottom:'200px'}}>
             <div className="info-display">
             <ReactBootStrap.Col><h1 class="info">THE GAME'S RULES</h1>
            </ReactBootStrap.Col>
            <p class="header">Here are some essential recommendations for a musical meeting in the Garden  to go well and take place in the best conditions.</p><br></br>
            <ul class="list">
                <li><p>The concept of <span class="secondTowerText">Dans l'Jardin</span> is suitable for "small groups" from 1 to approx. 14 people and takes place in people's homes. We therefore avoid restaurants, weddings and other public events.</p></li>
                <li><p>Dans l'Jardin offers unique moments. The musician is not there to animate in the background. On the contrary, when the musician comes, we invite you to inform your friends and enjoy with them this format of 20 minutes of music which will be a privileged interlude.</p></li>
                <li><p>The competitive price of the service only works thanks to your flexibility and that of the musicians. Your time is precious, ours and that of the musicians as well, which is why we avoid as much as possible back and forth of messages with the artists. The more precise the information, the better we can serve. Thank you for your understanding.</p></li>
                <li><p>Before ordering, set the time and  place where the artist will perform.</p></li>
                <li><p>Make sure everything is ready at least 15 minutes in advance, so that the artist can prepare as well as possible (chair, etc ...).</p></li>
                <li><p>We invite musicians and listeners to be as strict as possible with regard to safety measures (hygiene rules, distances).</p></li>
                <li><p>Musical time passes very quickly, so savor the moment and let the musician soar to new professional horizons.</p></li>
                <li><p>Remember this is a musical gesture, light for about twenty minutes, the big concert will be for the future when you go to listen to the musician in a beautiful hall. </p></li>
                <li><p>You are our best ambassadors, if the musical rendezvous has delighted you, talk about it around you.</p></li>
                <li><p>If you liked the performance and want to give the musician a little extra tip, the entire amount is for the latter and we will be very happy for them.</p></li>
                <p class="center">Your generosity is greatly appreciated, we look forward to this adventure with you and your family ...</p>
            
            
            
            </ul>
                </div>
            </ReactBootStrap.Container>


        )
};

export default GamesRules