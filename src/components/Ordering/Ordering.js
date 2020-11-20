import React, { useEffect, useState } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Axios from 'axios';

import "./Ordering.css"
import pic1 from "./ordering-assets/GRANDMERE2.png"
import pic2 from "./ordering-assets/02-picto-artiste.png"
import pic3 from "./ordering-assets/institutionnew - Copy.png"
// import pic4 from "./ordering-assets/03-picto-don.png"

import pic5 from "./ordering-assets/violonsiteblanc.png"
import pic6 from "./ordering-assets/accordeonisteblanc.png"
import pic7 from "./ordering-assets/saxoblanc.png"
import pic8 from "./ordering-assets/tresorblanc.png"

import pic9 from "./ordering-assets/musiciennesolo.png"
import pic10 from "./ordering-assets/duomusiciens.png"


import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import MediaQuery from 'react-responsive';
import { Pause } from '@material-ui/icons';


function Ordering() {

  function back1() {
    var x = document.getElementById("order1");
    x.style.display = "block";
    document.getElementById("orderConfirm").style.display = "none"
  }

  function forward1() {
    var x = document.getElementById("order1")
    x.style.display = "none";
    document.getElementById("order2").style.display = "block";
    document.getElementById("orderConfirm").style.display = "none";
    document.getElementById("fNameField").focus();
  }

  function back2() {
    var x = document.getElementById("order2")
    x.style.display = "none";
    document.getElementById("order1").style.display = "block"
    document.getElementById("orderConfirm").style.display = "none"
  }

  function forward2() {
    var x = document.getElementById("order2");
    x.style.display = "none";
    document.getElementById("order3").style.display = "block";
    document.getElementById("orderConfirm").style.display = "none";
    document.getElementById("form1").focus();
  }

  function back3() {
    var x = document.getElementById("order3")
    x.style.display = "none";
    document.getElementById("order2").style.display = "block"
  }

  function forward3() {
    var x = document.getElementById("order3")
    x.style.display = "none";
    document.getElementById("order4").style.display = "block";
    document.getElementById("orderConfirm").style.display = "none"
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
    document.getElementById("orderConfirm").style.display = "none"
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
    document.getElementById("orderConfirm").style.display = "none"
  }

  function back6() {
    var x = document.getElementById("order6")
    x.style.display = "none";
    document.getElementById("order5").style.display = "block"
  }

  function forward6() {
    var x = document.getElementById("order6")
    x.style.display = "none";
    document.getElementById("order7").style.display = "block";
    document.getElementById("orderConfirm").style.display = "none";
    document.getElementById("date-time-field").focus();
  }

  function back7() {
    var x = document.getElementById("order7")
    x.style.display = "none";
    document.getElementById("order6").style.display = "block"
  }

  function forward7() {
    var x = document.getElementById("order7")
    x.style.display = "none";
    document.getElementById("order8").style.display = "block";
    document.getElementById("orderConfirm").style.display = "none";
    document.getElementById("address-line-field").focus();
  }

  function back8() {
    var x = document.getElementById("order8")
    x.style.display = "none";
    document.getElementById("order7").style.display = "block"
  }

  function forward8() {
    var x = document.getElementById("order8")
    x.style.display = "none";
    document.getElementById("order9").style.display = "block";
    document.getElementById("orderConfirm").style.display = "none";
    document.getElementById("offered-field").focus();
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
    document.getElementById("orderConfirm").style.display = "none"
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

  function dateAndTime() {
    var d = new Date();
    d.setDate(d.getDate() + 3);
    var month = d.getMonth() + 1;
    var hour = d.getHours();
    hour = ("0" + hour).slice(-2);
    var minutes = d.getMinutes();
    minutes = ("0" + minutes).slice(-2)
    var dateFormatted = d.getFullYear() + "-" + month + "-" + d.getDate() + "T" + hour + ":" + minutes;
    return dateFormatted
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

  // Validatoin contents below \/ \/
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      if (firstName == "" || firstName == "_  _  _  _  _  _") {
        document.getElementById("fNameLabelReq").style.display = "block";
        document.getElementById("fNameLabelLen").style.display = "block";
        document.getElementById("fNameLabelOK").style.display = "none";
      }
      else if (firstName.length < 3) {
        document.getElementById("fNameLabelReq").style.display = "none";
        document.getElementById("fNameLabelOK").style.display = "none";
        document.getElementById("fNameLabelLen").style.display = "block";
      }
      else if (firstName.length >= 3 & firstName !== "_  _  _  _  _  _") {
        document.getElementById("fNameLabelOK").style.display = "block";
        document.getElementById("fNameLabelReq").style.display = "none";
        document.getElementById("fNameLabelLen").style.display = "none";
      }
      if (lastName == "" || lastName == "_  _  _  _  _  _") {
        document.getElementById("lNameLabelReq").style.display = "block";
        document.getElementById("lNameLabelLen").style.display = "block";
        document.getElementById("lNameLabelOK").style.display = "none";
      }
      else if (lastName.length < 3 ) {
        document.getElementById("lNameLabelReq").style.display = "none";
        document.getElementById("lNameLabelOK").style.display = "none";
        document.getElementById("lNameLabelLen").style.display = "block";
      }
      else if (lastName.length >= 3) {
        document.getElementById("lNameLabelOK").style.display = "block";
        document.getElementById("lNameLabelReq").style.display = "none";
        document.getElementById("lNameLabelLen").style.display = "none";
      }
    }
    else {
      document.getElementById("lNameLabelOK").style.display = "block";
      document.getElementById("lNameLabelReq").style.display = "none";
      document.getElementById("lNameLabelLen").style.display = "none";
      document.getElementById("fNameLabelOK").style.display = "block";
      document.getElementById("fNameLabelReq").style.display = "none";
      document.getElementById("fNameLabelLen").style.display = "none";
      event.preventDefault();
      event.stopPropagation();
      console.log("true");
      forward2();
    }
  }

  const handleSubmit2 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      if (occasion == "" || occasion == "_  _  _  _  _  _") {
        document.getElementById("occasionReq").style.display = "block";
        document.getElementById("occasionLen").style.display = "block";
        document.getElementById("occasionOK").style.display = "none";
      }
      else if (occasion.length < 3 && occasion !== "") {
        document.getElementById("occasionReq").style.display = "none";
        document.getElementById("occasionLen").style.display = "block";
        document.getElementById("occasionOK").style.display = "none";
      }
    }
    else {
      document.getElementById("occasionOK").style.display = "block";
      document.getElementById("occasionReq").style.display = "none";
      document.getElementById("occasionLen").style.display = "none";
      event.preventDefault();
      event.stopPropagation();
      console.log("true");
      forward3();
    }
  }

  const handleSubmit7 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      if (dateService == "" || dateService == "_  _  _  _  _  _") {
        document.getElementById("date-timeReq").style.display = "block";
      }
    }
    else {
      document.getElementById("date-timeOK").style.display = "block";
      document.getElementById("date-timeReq").style.display = "none";
      event.preventDefault();
      event.stopPropagation();
      console.log("true");
      forward7();
    }
  }

  const handleSubmit8 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      if (address == "" || address == "_  _  _  _  _  _") {
        document.getElementById("addressLineReq").style.display = "block";
        document.getElementById("addressLineOK").style.display = "none";
      }
      if (address.length < 4 && address.length >= 1) {
        document.getElementById("addressLineLen").style.display = "block";
        document.getElementById("addressLineReq").style.display = "none";
        document.getElementById("addressLineOK").style.display = "none";
      }
      if (address.length >= 4 && address != "_  _  _  _  _  _") {
        document.getElementById("addressLineLen").style.display = "none";
        document.getElementById("addressLineReq").style.display = "none";
        document.getElementById("addressLineOK").style.display = "block";
      }
      if (city == "" || city == "_  _  _  _  _  _") {
        document.getElementById("cityReq").style.display = "block";
        document.getElementById("cityOK").style.display = "none";
      }
      if (city.length < 3 && city.length >= 1) {
        document.getElementById("cityLen").style.display = "block";
        document.getElementById("cityReq").style.display = "none";
        document.getElementById("cityOK").style.display = "none";
      }
      if (city.length >= 3 && city != "_  _  _  _  _  _") {
        document.getElementById("cityLen").style.display = "none";
        document.getElementById("cityReq").style.display = "none";
        document.getElementById("cityOK").style.display = "block";
      }
      if (state == "" || state == "_  _  _  _  _  _") {
        document.getElementById("stateReq").style.display = "block";
        document.getElementById("stateOK").style.display = "none";
      }
      if (state !== "" && state !== "_  _  _  _  _  _") {
        document.getElementById("stateReq").style.display = "none";
        document.getElementById("stateOK").style.display = "block";
      }
      if (zip == "" || zip == "_  _  _  _  _  _") {
        document.getElementById("zipReq").style.display = "block";
        document.getElementById("zipOK").style.display = "none";
      }
      if (zip.length < 6 && zip.length >= 1) {
        document.getElementById("zipLen").style.display = "block";
        document.getElementById("zipReq").style.display = "none";
        document.getElementById("zipOK").style.display = "none";
      }
      if (zip.length >= 6 && zip != "_  _  _  _  _  _") {
        document.getElementById("zipLen").style.display = "none";
        document.getElementById("zipReq").style.display = "none";
        document.getElementById("zipOK").style.display = "block";
      }
    }
    else {
      document.getElementById("zipLen").style.display = "none";
      document.getElementById("zipReq").style.display = "none";
      document.getElementById("zipOK").style.display = "block";
      document.getElementById("stateReq").style.display = "none";
      document.getElementById("stateOK").style.display = "block";
      document.getElementById("cityLen").style.display = "none";
      document.getElementById("cityReq").style.display = "none";
      document.getElementById("cityOK").style.display = "block";
      document.getElementById("addressLineLen").style.display = "none";
      document.getElementById("addressLineReq").style.display = "none";
      document.getElementById("addressLineOK").style.display = "block";
      event.preventDefault();
      event.stopPropagation();
      console.log("true");
      forward8();
    }
  }

  const handleSubmit9 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("personal information is not valid");
      if (offered == "" || offered == "_  _  _  _  _  _") {
        document.getElementById("offeredByReq").style.display = "block";
        document.getElementById("offeredByOK").style.display = "none";
      }
      if (offered.length < 3 && offered.length >= 1) {
        document.getElementById("offeredByLen").style.display = "block";
        document.getElementById("offeredByReq").style.display = "none";
        document.getElementById("offeredByOK").style.display = "none";
      }
      if (offered.length >= 3 && offered != "_  _  _  _  _  _") {
        document.getElementById("offeredByLen").style.display = "none";
        document.getElementById("offeredByReq").style.display = "none";
        document.getElementById("offeredByOK").style.display = "block";
      }
      if (number == "" || number == "_  _  _  _  _  _") {
        document.getElementById("phoneNumberReq").style.display = "block";
        document.getElementById("phoneNumberOK").style.display = "none";
        document.getElementById("phoneNumberNums").style.display = "none";
      }
      if (number.length < 10 && number.length >=1) {
        document.getElementById("phoneNumberLen").style.display = "block";
        document.getElementById("phoneNumberReq").style.display = "none";
        document.getElementById("phoneNumberOK").style.display = "none";
      }
      if (number.length >= 10 && number != "_  _  _  _  _  _") {
        document.getElementById("phoneNumberLen").style.display = "none";
        document.getElementById("phoneNumberReq").style.display = "none";
        document.getElementById("phoneNumberNums").style.display = "none";
        document.getElementById("phoneNumberOK").style.display = "block";
      }
      if (number.match("[a-zA-Z]+") || number.length > 10){
        document.getElementById("phoneNumberLen").style.display = "none";
        document.getElementById("phoneNumberReq").style.display = "none";
        document.getElementById("phoneNumberOK").style.display = "none";
        document.getElementById("phoneNumberNums").style.display = "block";
      }
      if (email == "" || email == "_  _  _  _  _  _") {
        document.getElementById("emailReq").style.display = "block";
        document.getElementById("emailOK").style.display = "none";
      }
      if (email.length < 3 && email.length >= 1) {
        document.getElementById("emailLen").style.display = "block";
        document.getElementById("emailReq").style.display = "none";
        document.getElementById("emailOK").style.display = "none";
      }
      if (email.length >= 3 && email != "_  _  _  _  _  _" ) {
        document.getElementById("emailLen").style.display = "none";
        document.getElementById("emailReq").style.display = "none";
        document.getElementById("emailOK").style.display = "block";
      }
      
    }
    else {
      document.getElementById("offeredByLen").style.display = "none";
      document.getElementById("offeredByReq").style.display = "none";
      document.getElementById("offeredByOK").style.display = "block";
      document.getElementById("phoneNumberLen").style.display = "none";
      document.getElementById("phoneNumberReq").style.display = "none";
      document.getElementById("phoneNumberOK").style.display = "block";
      document.getElementById("phoneNumberLen").style.display = "none";
      document.getElementById("phoneNumberReq").style.display = "none";
      document.getElementById("phoneNumberNums").style.display = "none";
      document.getElementById("phoneNumberOK").style.display = "block";
      document.getElementById("emailLen").style.display = "none";
        document.getElementById("emailReq").style.display = "none";
        document.getElementById("emailOK").style.display = "block";
      event.preventDefault();
      event.stopPropagation();
      console.log("true");
      forward9();
    }

  };


  return (

    <ReactBootStrap.Container className="top-space-ordering">
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

        <ReactBootStrap.Row className="justify-content-md-center" style={{ marginBottom: '30px', marginTop: "-30px" }}>
          <ReactBootStrap.Col><h4>&#x1F6C8; Tell us more about who will be at the centre of this moment, or their name if they live in an institution. For example: "Grandma Léa", "Pré-Fleuri institution" ... </h4></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ marginLeft: '20px', marginRight: "20px", paddingTop: '10px', marginBottom: "-20px" }}>

          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} xs={6} controlId="formGridFirstName">
              <Form.Control className="form-control" required minLength="3" type="text" id="fNameField" placeholder="First Name" onChange={(e) => { setFirstName(e.target.value); }} />
              <span id="fNameLabelOK">Looks Good!</span>
              <span id="fNameLabelReq">First Name is required!</span>
              <span id="fNameLabelLen">Minimum length of 3 is required!</span>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Control className="form-control" required minLength="3" type="text" placeholder="Last Name" onChange={(e) => { setLastName(e.target.value); }} />
              <span id="lNameLabelOK">Looks Good!</span>
              <span id="lNameLabelReq">Last Name is required!</span>
              <span id="lNameLabelLen">Minimum length of 3 is required!</span>
            </Form.Group>
          </Form.Row>

          <div class="buttonAlign">
            <ReactBootStrap.Button variant="danger" className='button' onClick={back2}><a>Back</a></ReactBootStrap.Button>
            <ReactBootStrap.Button type="submit" variant="success" className='button'>Next</ReactBootStrap.Button>
          </div>

        </Form>

      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order3">
        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>3. {firstName} {lastName}, got it! Now, what are we celebrating</h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center" style={{ marginBottom: '30px', marginTop: "-30px" }}>
          <ReactBootStrap.Col><h4>&#x1F6C8; Tell us more about the occasion. For example: "René's 50th birthday", "An aperitif with friends", "A sunny Sunday"...</h4></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <Form noValidate validated={validated} onSubmit={handleSubmit2}>
          <ReactBootStrap.Row>
            <ReactBootStrap.Col style={{ marginLeft: '20px', marginRight: '20px' }}>

              <Form.Group>
                <div class="md-form">
                  <input type="text" required minLength="3" id="form1" class="form-control" onChange={(e) => { setOccasion(e.target.value); }} />
                  <span id="occasionOK">Looks Good!</span>
                  <span id="occasionReq">Occasion is required!</span>
                  <span id="occasionLen">Minimum length of 3 is required!</span>
                </div>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>


            </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
            <ReactBootStrap.Col style={{ marginTop: '20px' }}>
              <div class="buttonAlign">
                <ReactBootStrap.Button variant="danger" className='button' onClick={back3}><a>Back</a></ReactBootStrap.Button>
                <ReactBootStrap.Button type="submit" variant="success" className='button'><a>Next</a></ReactBootStrap.Button>
              </div>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
        </Form>
      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order4">

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>4. And what style of music would {firstName} like to hear? </h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center" style={{ marginBottom: '30px', marginTop: "-30px" }}>
          <ReactBootStrap.Col><h4>&#x1F6C8; Choose the style of music, we will take care of finding the ideal musician available near you.</h4></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setType("classic"); setTypeText("Classical music"); forward4(); }}><img src={pic5} className="pic" /><p>Classical</p></a></ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setType("popular"); setTypeText("Popular music"); forward4(); }}><img src={pic6} className="pic" /><p style={{ fontSize: '19px' }}>Popular Music</p></a></ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setType("jazzy/pop"); setTypeText("Jazzy-Pop music"); forward4(); }}><img src={pic7} className="pic" /><p>Jazzy - Pop</p></a></ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setType("suprise"); setTypeText("A surprise"); forward4(); }}><img src={pic8} className="pic" /><p>Suprise!</p></a></ReactBootStrap.Col>
          </div>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row>
          <ReactBootStrap.Col style={{ marginTop: '20px' }}>
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

        <ReactBootStrap.Row className="justify-content-md-center" style={{ marginBottom: '30px', marginTop: "-30px" }}>
          <ReactBootStrap.Col><h4>&#x1F6C8; A soloist or a duo for 20 minutes</h4></ReactBootStrap.Col>
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
          <ReactBootStrap.Col style={{ marginTop: '20px' }}>
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
          <div style={{ marginTop: '10px' }} className="bg-display-button">
            <a onClick={(e) => { setSuprise("no"); forward6(); }}>
              <ReactBootStrap.Col><p class="surprise">No</p></ReactBootStrap.Col>
            </a>
          </div>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row>
          <ReactBootStrap.Col style={{ marginTop: '20px' }}>
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

        <ReactBootStrap.Row className="justify-content-md-center">
          <h6><i>&#x1F6C8; The order must be placed at least 72 hours in advance to be considered.</i></h6>
          <h6><i>&#x1F6C8; Enter the time between 08:00 and 21:00 maximum</i></h6>
        </ReactBootStrap.Row>

        <Form noValidate validated={validated} onSubmit={handleSubmit7} style={{ marginLeft: '20px', marginRight: "20px", paddingTop: '10px', marginBottom: "-20px" }}>
          <Form.Row className="justify-content-md-center">
            <Form.Group controlId="formGridDate" className="justify-content-md-center">
              {/* <Form.Label>Date and Time of Service</Form.Label> */}
              <Form.Control
                required
                id="date-time-field"
                type="datetime-local"
                min={dateAndTime()}
                onChange={(e) => { let date = e.target.value.substring(0, 10); let time = e.target.value.substring(11, 16); setDateService(date); setTimeService(time); }} />
              <span id="date-timeOK">Looks Good!</span>
              <span id="date-timeReq">Date and Time is required!</span>
            </Form.Group>
          </Form.Row>
          <p id="a"></p>

          {/* <Form.Row className="justify-content-md-center">
            <Form.Group controlId="formGridTime">
              <Form.Label>Time of Service</Form.Label>
              
              <Form.Control required type="time" placeholder="1234 Main St" onChange={(e) => { setTimeService(e.target.value); }} />
            </Form.Group>
          </Form.Row> */}

          <div class="buttonAlign">
            <ReactBootStrap.Button variant="danger" className='button' onClick={back7}><a>Back</a></ReactBootStrap.Button>
            <ReactBootStrap.Button type="submit" variant="success" className='button'>Next</ReactBootStrap.Button>
          </div>

        </Form>

      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order8">

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>8. Perfect! Now where will these festivities take place?  </h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <Form noValidate validated={validated} onSubmit={handleSubmit8} style={{ marginLeft: '20px', marginRight: "20px", paddingTop: '10px', marginBottom: "-20px" }}>
          <MediaQuery orientation={"landscape"}>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address Line</Form.Label>
              <Form.Control required minLength="4" placeholder="1234 Main St" id="address-line-field" onChange={(e) => { setAddress(e.target.value); }} />
              <span id="addressLineOK">Looks Good!</span>
              <span id="addressLineReq">Address line is required!</span>
              <span id="addressLineLen">Minimum length of 4 is required!</span>
            </Form.Group>
          </MediaQuery>

          <MediaQuery orientation={"Portrait"}>
            <Form.Group controlId="formGridAddress1" class="justify-content-md-center">
              <Form.Label class="justify-content-md-center">Address Line</Form.Label>
              <Form.Control required minLength="4" placeholder="1234 Main St" id="address-line-field" onChange={(e) => { setAddress(e.target.value); }} />
              <span id="addressLineOK">Looks Good!</span>
              <span id="addressLineReq">Address line is required!</span>
              <span id="addressLineLen">Minimum length of 4 is required!</span>
            </Form.Group>
          </MediaQuery>

          {/* <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" onChange={(e) => { setAddress2(e.target.value); }} />
          </Form.Group> */}
          <MediaQuery orientation={"Landscape"}>
            <Form.Row>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control required minLength="3" placeholder="Burnaby" onChange={(e) => { setCity(e.target.value); }} />
                <span id="cityOK">Looks Good!</span>
                <span id="cityReq">City is required!</span>
                <span id="cityLen">Minimum length of 3 is required!</span>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control required as="select" minLength="3" defaultValue="Choose..." onChange={(e) => { setState(e.target.value); }}>
                  <option value="">Choose from below</option>
                  <option value="British Columbia">British Columbia</option>
                  <option value="Alberta">Alberta</option>
                </Form.Control>
                <span id="stateOK">Looks Good!</span>
                <span id="stateReq">State is required!</span>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control required minLength="6" placeholder="V3W9N3" onChange={(e) => { setZip(e.target.value); }} />
                <span id="zipOK">Looks Good!</span>
                <span id="zipReq">ZIP is required!</span>
                <span id="zipLen">Enter zip like V3W9N3!</span>
              </Form.Group>
            </Form.Row>
          </MediaQuery>


          <MediaQuery orientation={"portrait"}>
            <Form.Row class="justify-content-md-center">
              <Form.Group controlId="formGridCity">
                <div>
                  <Form.Label>City</Form.Label>
                  <Form.Control required placeholder="Burnaby" onChange={(e) => { setCity(e.target.value); }} />
                  <span id="cityOK">Looks Good!</span>
                  <span id="cityReq">City is required!</span>
                  <span id="cityLen">Minimum length of 3 is required!</span>
                </div>
              </Form.Group>

              <Form.Group controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control required as="select" defaultValue="Choose..." onChange={(e) => { setState(e.target.value); }}>
                  <option value="">Choose from below</option>
                  <option value="British Columbia">British Columbia</option>
                  <option value="Alberta">Alberta</option>
                  <span id="stateOK">Looks Good!</span>
                  <span id="stateReq">State is required!</span>
                </Form.Control>

              </Form.Group>

              <Form.Group controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control required placeholder="V3W9N3" onChange={(e) => { setZip(e.target.value); }} />
                <span id="zipOK">Looks Good!</span>
                <span id="zipReq">ZIP is required!</span>
                <span id="zipLen">Enter zip like V3W9N3!</span>
              </Form.Group>
            </Form.Row>
          </MediaQuery>



          <div class="buttonAlign">
            <ReactBootStrap.Button variant="danger" className='button' onClick={back8}><a>Back</a></ReactBootStrap.Button>
            <ReactBootStrap.Button type="submit" variant="success" className='button'>Next</ReactBootStrap.Button>
          </div>

        </Form>

      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order9">

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>9. Everything is good for the concert. We need some information about you to be able to confirm the order.  </h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center" style={{ marginBottom: '30px', marginTop: "-30px" }}>
          <ReactBootStrap.Col><h4>&#x1F6C8; All this information remains confidential and is necessary for security reasons and in case we need to contact you..</h4></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <Form noValidate validated={validated} onSubmit={handleSubmit9} style={{ marginLeft: '20px', marginRight: "20px", paddingTop: '10px', marginBottom: "-20px" }}>
          <div className="justify-content-md-center">
            <div>

              <Form.Group controlId="formGridHost">
                <Form.Label>Offered by</Form.Label>
                <Form.Control required minLength="3" type="text" placeholder="Your name here" id="offered-field" onChange={(e) => { setOffered(e.target.value); }} />
                <span id="offeredByOK">Looks Good!</span>
                <span id="offeredByReq">Offered by is required!</span>
                <span id="offeredByLen">Minimum length of 3 is required!</span>
              </Form.Group>

              <Form.Group controlId="formGridPhone">
                <Form.Label>Contact Number</Form.Label>
                <h6><i>&#x1F6C8; Please enter a canadian number without +1</i> </h6>
                <Form.Control required minLength="10" type="tel" pattern="^\d{10}$" placeholder="778238xxxx" onChange={(e) => { setNumber(e.target.value); }} />
                <span id="phoneNumberOK">Looks Good!</span>
                <span id="phoneNumberReq">Phone number is required!</span>
                <span id="phoneNumberLen">Required pattern is 10 digits</span>
                <span id="phoneNumberNums">Enter digits from 0-9 only!</span>
              </Form.Group>

              <Form.Group controlId="formGridEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control required minLength="4" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" type="email" placeholder="yourname@gmail.com" onChange={(e) => { setEmail(e.target.value); }} />
                <span id="emailOK">Looks Good!</span>
                <span id="emailReq">Email is required!</span>
                <span id="emailLen">Valid pattern is abc@email.co</span>
              </Form.Group>

            </div>
          </div>

          <div class="buttonAlign">
            <ReactBootStrap.Button variant="danger" className='button' onClick={back9}><a>Back</a></ReactBootStrap.Button>
            <ReactBootStrap.Button type="submit" variant="success" className='button'>Next</ReactBootStrap.Button>
          </div>
        </Form>

      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order10">

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>10. (Optional) A final comment about the concert or useful information for the musician(s)?  </h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center" style={{ marginBottom: '30px', marginTop: "-30px" }}>
          <ReactBootStrap.Col><h4>&#x1F6C8; For example: "The beneficiary loves the violin", "A big dog guards the garden", "The road is difficult to access in the winter", ...
</h4></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <Form style={{ marginLeft: '20px', marginRight: "20px", paddingTop: '10px', marginBottom: "-20px" }}>
          <Form.Group controlId="formGridComment">
            <Form.Control as="textarea" rows={3} placeholder="Anything you'd like us to know" onChange={(e) => { setComments(e.target.value); }} />
          </Form.Group>

          <div class="buttonAlign">
            <ReactBootStrap.Button variant="danger" className='button' onClick={back10}><a>Back</a></ReactBootStrap.Button>
            <ReactBootStrap.Button variant="success" className='button' onClick={forward10}>Submit</ReactBootStrap.Button>
          </div>

        </Form>

      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="orderConfirm">
        <div>
          <ReactBootStrap.Row className="justify-content-md-center">
            <ReactBootStrap.Col md="auto"><h3>Perfect, we have everything. Here is a summary of your order before entering payment details.</h3></ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <ReactBootStrap.Col md="auto"><p className="confirmHeader">Beneficiary</p></ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="tooltip" onClick={forward1}>
              <ReactBootStrap.Col md="auto">
                <p>{firstName} {lastName}</p>
              </ReactBootStrap.Col>
              <span class="tooltiptext">Click here to change this detail</span>
            </div>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="tooltip" onClick={back1}>
              <ReactBootStrap.Col md="auto">
                <p>({giftText})</p>
                <span class="tooltiptext">Click here to change this detail</span>
              </ReactBootStrap.Col>
            </div>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="tooltip" onClick={forward2}>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p className="intro">Occasion:</p>

              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p>{occasion}</p>
                <span class="tooltiptext">Click here to change this detail</span>
              </ReactBootStrap.Col>
            </div>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <ReactBootStrap.Col md="auto"><p className="confirmHeader">Information about the concert</p></ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="tooltip" onClick={forward5}>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p className="intro">Suprise concert:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p>{suprise}</p>
                <span class="tooltiptext">Click here to change this detail</span>
              </ReactBootStrap.Col>
            </div>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="tooltip" onClick={forward3}>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p className="intro">Style of music:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p>{type}</p>
                <span class="tooltiptext">Click here to change this detail</span>
              </ReactBootStrap.Col>
            </div>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="tooltip" onClick={forward4}>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p className="intro">Number of Musicians:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p>{numberMusicians}</p>
                <span class="tooltiptext">Click here to change this detail</span>
              </ReactBootStrap.Col>
            </div>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="tooltip" onClick={forward6}>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p className="intro" >Date of Service:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p>{dateService}</p>
                <span class="tooltiptext">Click here to change this detail</span>
              </ReactBootStrap.Col>
            </div>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="tooltip" onClick={forward6}>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p className="intro">Time of Service:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p>{timeService}</p>
                <span class="tooltiptext">Click here to change this detail</span>
              </ReactBootStrap.Col>
            </div>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="tooltip" onClick={forward7}>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p className="intro">Address:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p>{address}</p>
                <span class="tooltiptext">Click here to change this detail</span>
              </ReactBootStrap.Col>
            </div>
          </ReactBootStrap.Row>

          {/* <ReactBootStrap.Row className="justify-content-md-center">
            <ReactBootStrap.Col md="auto"><p className="intro">Address 2:</p></ReactBootStrap.Col>
            <ReactBootStrap.Col md="auto"><p>{address2}</p></ReactBootStrap.Col>
          </ReactBootStrap.Row> */}

          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="tooltip" onClick={forward7}>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p className="intro">City:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p>{city}</p>
                <span class="tooltiptext">Click here to change this detail</span>
              </ReactBootStrap.Col>
            </div>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="tooltip" onClick={forward7}>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p className="intro">State:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p>{state}</p>
                <span class="tooltiptext">Click here to change this detail</span>
              </ReactBootStrap.Col>
            </div>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="tooltip" onClick={forward7}>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p className="intro">Zip:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p>{zip}</p>
                <span class="tooltiptext">Click here to change this detail</span>
              </ReactBootStrap.Col>
            </div>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <ReactBootStrap.Col md="auto"><p className="confirmHeader">Thanks to the generosity of:</p></ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="tooltip" onClick={forward8}>
              <ReactBootStrap.Col md="auto">
                <p>{offered}</p>
                <span class="tooltiptext">Click here to change this detail</span>
              </ReactBootStrap.Col>
            </div>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="tooltip" onClick={forward8}>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p className="intro">Phone Number:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p>{number}</p>
                <span class="tooltiptext">Click here to change this detail</span>
              </ReactBootStrap.Col>
            </div>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="tooltip" onClick={forward8}>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p className="intro">Email:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto" className="tooltipCol">
                <p>{email}</p>
                <span class="tooltiptext">Click here to change this detail</span>
              </ReactBootStrap.Col>
            </div>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <ReactBootStrap.Col md="auto"><p className="confirmHeader">Comment (optional)</p></ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="tooltip" onClick={backFinal}>
              <ReactBootStrap.Col md="auto">
                <p>{comments}</p>
                <span class="tooltiptext">Click here to change this detail</span>
              </ReactBootStrap.Col>
            </div>
          </ReactBootStrap.Row>


          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="buttonAlign">
              <ReactBootStrap.Button variant="danger" className='button' onClick={backFinal}><a>Back</a></ReactBootStrap.Button>
              <a href={process.env.PUBLIC_URL + '/#/'}><ReactBootStrap.Button md="auto" variant="success" className='button' style={{ width: '185px' }} onClick={submitOrder}>Go back to Home</ReactBootStrap.Button></a>
            </div>
          </ReactBootStrap.Row>

        </div>
      </ReactBootStrap.Container>

    </ReactBootStrap.Container>

  )
};

export default Ordering