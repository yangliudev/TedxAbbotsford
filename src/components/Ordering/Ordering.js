import React, { Component, useEffect, useState } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Axios from 'axios';

import "./Ordering.css"
import pic1 from "./ordering-assets/GRANDMERE2.png"
import pic2 from "./ordering-assets/02-picto-artiste.png"
import pic3 from "./ordering-assets/institutionnew - Copy.png"
import pic4 from "./ordering-assets/03-picto-don.png"

import pic5 from "./ordering-assets/violonsiteblanc.png"
import pic6 from "./ordering-assets/accordeonisteblanc.png"
import pic7 from "./ordering-assets/saxoblanc.png"
import pic8 from "./ordering-assets/tresorblanc.png"

import pic9 from "./ordering-assets/musiciennesolo.png"
import pic10 from "./ordering-assets/duomusiciens.png"


import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'


function Ordering() {
  function forward1() {
    var x = document.getElementById("order1")
    x.style.display = "none";
    document.getElementById("order2").style.display = "block"
  }

  function back2() {
    var x = document.getElementById("order2")
    x.style.display = "none";
    document.getElementById("order1").style.display = "block"
  }

  function forward2() {
    var x = document.getElementById("order2")
    x.style.display = "none";
    document.getElementById("order3").style.display = "block"
  }

  function back3() {
    var x = document.getElementById("order3")
    x.style.display = "none";
    document.getElementById("order2").style.display = "block"
  }

  function forward3() {
    var x = document.getElementById("order3")
    x.style.display = "none";
    document.getElementById("order4").style.display = "block"
  }

  function back4() {
    var x = document.getElementById("order4")
    x.style.display = "none";
    document.getElementById("order3").style.display = "block"
  }

  function forward4() {
    var x = document.getElementById("order4")
    x.style.display = "none";
    document.getElementById("order5").style.display = "block"
  }

  function back5() {
    var x = document.getElementById("order5")
    x.style.display = "none";
    document.getElementById("order4").style.display = "block"
  }

  function forward5() {
    var x = document.getElementById("order5")
    x.style.display = "none";
    document.getElementById("order6").style.display = "block"
  }

  function back6() {
    var x = document.getElementById("order6")
    x.style.display = "none";
    document.getElementById("order5").style.display = "block"
  }

  function forward6() {
    var x = document.getElementById("order6")
    x.style.display = "none";
    document.getElementById("order7").style.display = "block"
  }

  function back7() {
    var x = document.getElementById("order7")
    x.style.display = "none";
    document.getElementById("order6").style.display = "block"
  }

  function forward7() {
    var x = document.getElementById("order7")
    x.style.display = "none";
    document.getElementById("order8").style.display = "block"
  }

  function back8() {
    var x = document.getElementById("order8")
    x.style.display = "none";
    document.getElementById("order7").style.display = "block"
  }

  function forward8() {
    var x = document.getElementById("order8")
    x.style.display = "none";
    document.getElementById("order9").style.display = "block"
  }

  function back9() {
    var x = document.getElementById("order9")
    x.style.display = "none";
    document.getElementById("order8").style.display = "block"
  }

  function forward9() {
    var x = document.getElementById("order9")
    x.style.display = "none";
    document.getElementById("order10").style.display = "block"
  }

  function back10() {
    var x = document.getElementById("order10")
    x.style.display = "none";
    document.getElementById("order9").style.display = "block"
  }

  function forward10() {
    var x = document.getElementById("order10")
    x.style.display = "none";
    document.getElementById("orderConfirm").style.display = "block"
  }

  function backFinal() {
    var x = document.getElementById("orderConfirm")
    x.style.display = "none";
    document.getElementById("order10").style.display = "block"
  }


  const [musicianName, setMusicianName] = useState("");
  const [musicianType, setMusicianType] = useState("");
  const [musicanList, setMusicanList] = useState([]);


  const [gift, setGift] = useState("_  _  _  _  _  _");
  const [giftText, setGiftText] = useState("_  _  _  _  _  _");
  const [occasion, setOccasion] = useState("_  _  _  _  _  _");
  const [type, setType] = useState("_  _  _  _  _  _");
  const [typeText, setTypeText] = useState("_  _  _  _  _  _");
  const [numberMusicians, setNumberMusicians] = useState("_  _  _  _  _  _");
  const [suprise, setSuprise] = useState("_  _  _  _  _  _");
  const [firstName, setFirstName] = useState("_  _  _  _  _  _");
  const [lastName, setLastName] = useState("_  _  _  _  _  _");
  const [dateService, setDateService] = useState("_  _  _  _  _  _");
  const [timeService, setTimeService] = useState("_  _  _  _  _  _");
  const [offered, setOffered] = useState("_  _  _  _  _  _");
  const [number, setNumber] = useState("_  _  _  _  _  _");
  const [email, setEmail] = useState("_  _  _  _  _  _");
  const [address, setAddress] = useState("_  _  _  _  _  _");
  const [address2, setAddress2] = useState("_  _  _  _  _  _");
  const [city, setCity] = useState("_  _  _  _  _  _");
  const [state, setState] = useState("_  _  _  _  _  _");
  const [zip, setZip] = useState("_  _  _  _  _  _");
  const [comments, setComments] = useState("_  _  _  _  _  _");

  const submitOrder = () => {
    Axios.post("http://localhost:5000/order/insert", {
      orderGift: gift,
      orderOccasion: occasion,
      orderType: type,
      orderNumberMusicians: numberMusicians,
      orderSuprise: suprise,
      orderFirstName: firstName,
      orderLastName: lastName,
      orderDateService: dateService,
      orderTimeService: timeService,
      orderOffered: offered,
      orderNumber: number,
      orderEmail: email,
      orderAddress: address,
      orderAddress2: address2,
      orderCity: city,
      orderState: state,
      orderZip: zip,
      orderComments: comments
    }).then(() => {
      alert("sucessful insert");
    })
  };



  useEffect(() => {
    Axios.get("http://localhost:5000/api/get").then((response) => {
      // console.log(response.data)
      setMusicanList(response.data)
    })
  })

  const submitMusician = () => {
    Axios.post("http://localhost:5000/api/insert", {
      musicianName: musicianName,
      musicianType: musicianType
    }).then(() => {
      alert("sucessful insert");
    })
  };

  return (

    <ReactBootStrap.Container className="top-space">
      <ReactBootStrap.Container className="bg-display" id="order1">

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>1. First step, to whom do you want to offer this musical moment?</h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row>
          <div className="bg-display-test">
            <ReactBootStrap.Col>
              <a onClick={(e) => { setGift("one person"); setGiftText("One person in Particular"); forward1(); }}><img src={pic1} className="pic" /><p>One person <br /> in particular</p></a>
            </ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setGift("small committee"); setGiftText("A small committee"); forward1(); }}><img src={pic2} className="pic" /><p>A small <br />  committee</p></a></ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setGift("institution"); setGiftText("An institution"); forward1(); }}><img src={pic3} className="pic" /><p>An <br />  institution</p></a></ReactBootStrap.Col>
          </div>
        </ReactBootStrap.Row>
      
      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order2">

      <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>2. {giftText}, very good. Who will be the main beneficiary of the concert? </h3></ReactBootStrap.Col>
      </ReactBootStrap.Row>

      <ReactBootStrap.Row className="justify-content-md-center" style={{marginBottom: '30px', marginTop:"-30px" }}>
          <ReactBootStrap.Col><h4>Tell us more about who will be at the centre of this moment, or their name if they live in an institution. For example: "Grandma Léa", "Pré-Fleuri institution" ... </h4></ReactBootStrap.Col>
      </ReactBootStrap.Row>

      <Form style={{ marginLeft: '20px', marginRight: "20px", paddingTop: '10px', marginBottom: "-20px" }}>
        
        <Form.Row className="justify-content-md-center">
          <Form.Group as={Col} xs={6} controlId="formGridFirstName">
            <Form.Control type="text" placeholder="First Name" onChange={(e) => { setFirstName(e.target.value); }} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Control type="text" placeholder="Last Name" onChange={(e) => { setLastName(e.target.value); }} />
          </Form.Group>
        </Form.Row>

          <div class="buttonAlign">
            <ReactBootStrap.Button variant="danger" className='button' onClick={back2}><a>Back</a></ReactBootStrap.Button>
            <ReactBootStrap.Button variant="danger" className='button' onClick={forward2}>Submit</ReactBootStrap.Button>
          </div>

        </Form>

      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order3">
        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>3. {firstName} {lastName}, got it! Now, what are we celebrating</h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center" style={{marginBottom: '30px', marginTop:"-30px" }}>
          <ReactBootStrap.Col><h4>Tell us more about the occasion. For example: "René's 50th birthday", "An aperitif with friends", "A sunny Sunday"...</h4></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row>
          <ReactBootStrap.Col style={{ marginLeft: '20px', marginRight: '20px' }}>
            <div class="md-form">
              <input type="text" id="form1" class="form-control" onChange={(e) => { setOccasion(e.target.value); }} />
            </div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row>
          <ReactBootStrap.Col style={{marginTop: '20px' }}>
            <div class="buttonAlign">
              <ReactBootStrap.Button variant="danger" className='button' onClick={back3}><a>Back</a></ReactBootStrap.Button>
              <ReactBootStrap.Button variant="danger" className='button' onClick={forward3}><a>Submit</a></ReactBootStrap.Button>
            </div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order4">

        <ReactBootStrap.Row className="justify-content-md-center">
            <ReactBootStrap.Col><h3>4. And what style of music would {firstName} like to hear? </h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center" style={{ marginBottom: '30px', marginTop:"-30px" }}>
          <ReactBootStrap.Col><h4>Choose the style of music, we will take care of finding the ideal musician available near you.</h4></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setType("classic"); setTypeText("Classical music");forward4(); }}><img src={pic5} className="pic" /><p>Classical</p></a></ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setType("popular"); setTypeText("Popular music"); forward4(); }}><img src={pic6} className="pic" /><p style={{ fontSize: '19px' }}>Popular Music</p></a></ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setType("jazzy/pop"); setTypeText("Jazzy-Pop music");forward4(); }}><img src={pic7} className="pic" /><p>Jazzy - Pop</p></a></ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setType("suprise"); setTypeText("A surprise"); forward4(); }}><img src={pic8} className="pic" /><p>Suprise!</p></a></ReactBootStrap.Col>
          </div>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row>
          <ReactBootStrap.Col style={{marginTop: '20px' }}>
          <div class="buttonAlign">
            <ReactBootStrap.Button variant="danger" className='button' onClick={back4}><a>Back</a></ReactBootStrap.Button>
          </div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>

      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order5">

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>5. {typeText}, very good choice! How many musicians would you like for this musical rendez-vous?</h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center" style={{ marginBottom: '30px', marginTop:"-30px" }}>
          <ReactBootStrap.Col><h4>A soloist or a duo for 20 minutes</h4></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row sm={1} md={3}>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setNumberMusicians("solo"); forward5(); }}><img src={pic9} className="pic2" /><p>Soloist</p></a></ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setNumberMusicians("duo"); forward5(); }}><img src={pic10} className="pic2" /><p>Duo</p></a></ReactBootStrap.Col>
          </div>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row>
          <ReactBootStrap.Col style={{marginTop: '20px' }}>
          <div class="buttonAlign">
            <ReactBootStrap.Button variant="danger" className='button' onClick={back5}><a>Back</a></ReactBootStrap.Button>
          </div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>

      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order6">

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>6. Good. Is this a suprise?</h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
        <div className="bg-display-button">
          <a onClick={(e) => { setSuprise("yes"); forward6(); }}>
            <ReactBootStrap.Col><p class="surprise">Yes</p></ReactBootStrap.Col>
          </a>
        </div>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
        <div style={{ marginTop: '10px'}} className="bg-display-button">
          <a onClick={(e) => { setSuprise("no"); forward6(); }}>
              <ReactBootStrap.Col><p class="surprise">No</p></ReactBootStrap.Col>
          </a>
        </div>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row>
          <ReactBootStrap.Col style={{marginTop: '20px' }}>
          <div class="buttonAlign">
            <ReactBootStrap.Button variant="danger" className='button' onClick={back6}><a>Back</a></ReactBootStrap.Button>
          </div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>

      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order7">

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>7. All right! When do you want the concert?  </h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <Form style={{ marginLeft: '20px', marginRight: "20px", paddingTop: '10px', marginBottom: "-20px" }}>
          <Form.Row className="justify-content-md-center">
            <Form.Group controlId="formGridDate">
                <Form.Label>Date of Service</Form.Label>
                <h6><i>The order must be placed at least 72 hours in advance to be considered.</i></h6>
                <Form.Control type="date" placeholder="1234 Main St" onChange={(e) => { setDateService("2020-01-01 10:10:10"); }} />
              </Form.Group>
            </Form.Row>

          <Form.Row className="justify-content-md-center">
              <Form.Group controlId="formGridTime">
                <Form.Label>Time of Service</Form.Label>
                <h6><i>Enter the time between 08:00 and 21:00 maximum</i></h6>
                <Form.Control type="time" placeholder="1234 Main St" onChange={(e) => { setTimeService(e.target.value); }} />
              </Form.Group>
          </Form.Row>

          <div class="buttonAlign">
            <ReactBootStrap.Button variant="danger" className='button' onClick={back7}><a>Back</a></ReactBootStrap.Button>
            <ReactBootStrap.Button variant="danger" className='button' onClick={forward7}>Submit</ReactBootStrap.Button>
          </div>

        </Form>

      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order8">

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>8. Perfect! Now where will these festivities take place?  </h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <Form style={{ marginLeft: '20px', marginRight: "20px", paddingTop: '10px', marginBottom: "-20px" }}>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address 1</Form.Label>
              <Form.Control placeholder="1234 Main St" onChange={(e) => { setAddress(e.target.value); }} />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" onChange={(e) => { setAddress2(e.target.value); }} />
            </Form.Group>

            <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control onChange={(e) => { setCity(e.target.value); }} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose..." onChange={(e) => { setState("British Columbia"); }}>
                <option>British Columbia</option>
                <option>Alberta</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control onChange={(e) => { setZip(e.target.value); }} />
            </Form.Group>
          </Form.Row>

          <div class="buttonAlign">
            <ReactBootStrap.Button variant="danger" className='button' onClick={back8}><a>Back</a></ReactBootStrap.Button>
            <ReactBootStrap.Button variant="danger" className='button' onClick={forward8}>Submit</ReactBootStrap.Button>
          </div>

        </Form>

      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order9">

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>9. Everything is good for the concert. We need some information about you to be able to confirm the order.  </h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center" style={{ marginBottom: '30px', marginTop:"-30px" }}>
          <ReactBootStrap.Col><h4>All this information remains confidential and is necessary for security reasons and in case we need to contact you..</h4></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <Form style={{ marginLeft: '20px', marginRight: "20px", paddingTop: '10px', marginBottom: "-20px" }}>
        <div className="justify-content-md-center">
          <div className="w-50 d-inline-block">

            <Form.Group controlId="formGridHost">
              <Form.Label>Offered by</Form.Label>
              <Form.Control type="text" placeholder="Your name here" onChange={(e) => { setOffered(e.target.value); }} />
            </Form.Group>

            <Form.Group controlId="formGridPhone">
              <Form.Label>Contact Number</Form.Label>
              <h6><i>Please enter a canadian number</i> </h6>
              <Form.Control type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" onChange={(e) => { setNumber(e.target.value); }} />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control placeholder="yourname@gmail.com" onChange={(e) => { setEmail(e.target.value); }} />
            </Form.Group>

          </div>
        </div>

          <div class="buttonAlign">
            <ReactBootStrap.Button variant="danger" className='button' onClick={back9}><a>Back</a></ReactBootStrap.Button>
            <ReactBootStrap.Button variant="danger" className='button' onClick={forward9}>Submit</ReactBootStrap.Button>
          </div>
        </Form>

      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order10">

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>10. (Optional) A final comment about the concert or useful information for the musician(s)?  </h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center" style={{ marginBottom: '30px', marginTop:"-30px" }}>
          <ReactBootStrap.Col><h4>For example: "The beneficiary loves the violin", "A big dog guards the garden", "The road is difficult to access in the winter", ...
</h4></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <Form style={{ marginLeft: '20px', marginRight: "20px", paddingTop: '10px', marginBottom: "-20px" }}>
          <Form.Group controlId="formGridComment">
            <Form.Control as="textarea" rows={3} placeholder="Anything you'd like us to know" onChange={(e) => { setComments(e.target.value); }} />
          </Form.Group>

          <div class="buttonAlign">
            <ReactBootStrap.Button variant="danger" className='button' onClick={back10}><a>Back</a></ReactBootStrap.Button>
            <ReactBootStrap.Button variant="danger" className='button' onClick={forward10}>Submit</ReactBootStrap.Button>
          </div>

        </Form>

      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="orderConfirm">
        <div style={{marginLeft:"30px"}}>
        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><h3>Perfect, we have everything. Here is a summary of your order before entering payment details.</h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="confirmHeader">Beneficiary</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p>{firstName} {lastName}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p>({giftText})</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Occasion:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{occasion}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>
        
        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="confirmHeader">Information about the concert</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Suprise concert:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto" ><p>{suprise}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Style of music:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{type}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Number of Musicians:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{numberMusicians}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Date of Service:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{dateService}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Time of Service:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{timeService}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Address:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{address}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Address 2:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{address2}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">City:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{city}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">State:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{state}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Zip:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{zip}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="confirmHeader">Thanks to the generosity of:</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p>{offered}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Phone Number:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{number}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Email:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{email}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="confirmHeader">Comment (optional)</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p>{comments}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>


        <ReactBootStrap.Row className="justify-content-md-center"> 
        <div class="buttonAlign">
        <ReactBootStrap.Button variant="danger" className='button' onClick={backFinal}><a>Back</a></ReactBootStrap.Button>
        <a href={process.env.PUBLIC_URL + '/#/'}><ReactBootStrap.Button md="auto" variant="danger" className='button' onClick={submitOrder}>Submit</ReactBootStrap.Button></a>
        </div>
        </ReactBootStrap.Row>

        </div>
      </ReactBootStrap.Container>

    </ReactBootStrap.Container>

  )
};

export default Ordering