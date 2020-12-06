import React, { useState } from 'react';
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
import editButton from "./ordering-assets/edit.png"


import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import MediaQuery from 'react-responsive';
// import { Pause } from '@material-ui/icons';


function Ordering() {

  /*Functions to go back or forward 1 step in the ordering process */
  // function back1() {
  //   var x = document.getElementById("order1");
  //   x.style.display = "block";
  //   document.getElementById("orderConfirm").style.display = "none"
  // }

  function forward1() {
    var x = document.getElementById("order1")
    x.style.display = "none";
    document.getElementById("order2").style.display = "block";
    document.getElementById("orderConfirm").style.display = "none";
    document.getElementById("form1").focus();
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
    // document.getElementById("address-line-field").focus();
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
    document.getElementById("offered-field").focus();
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
    // document.getElementById("fNameField").focus();
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

  /*Function to format the minimum date and time allowed for the ordering process */
  function dateAndTime() {
    var d = new Date();
    d.setDate(d.getDate() + 3);
    let day = ("0" + d.getDate()).slice(-2)
    let month = d.getMonth() + 1;
    let hour = d.getHours();
    hour = ("0" + hour).slice(-2);
    let minutes = d.getMinutes();
    minutes = ("0" + minutes).slice(-2)
    let dateFormatted = d.getFullYear() + "-" + month + "-" + day + "T" + hour + ":" + minutes;
    return dateFormatted
  }

  /*Constants for the details required in the ordering process, including the
  detail variable, function to set the detail, and the default value of the detail */
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
  // const [address2, setAddress2] = useState("_  _  _  _  _  _");
  const [city, setCity] = useState("_  _  _  _  _  _");
  const [state, setState] = useState("_  _  _  _  _  _");
  const [zip, setZip] = useState("_  _  _  _  _  _");
  const [comments, setComments] = useState("_  _  _  _  _  _");

  /*Function to send the order to the database through Axios */
  const submitOrder = () => {
    Axios.post("/order/insert", {
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
      // orderAddress2: address2,
      orderCity: city,
      orderState: state,
      orderZip: zip,
      orderComments: comments
    }).then(() => {
      console.log("sucessful insert");
    })
    // alert("Sucesfully created order, email has been sent.");
  };


  // Validatoin contents below \/ \/
  const [validated] = useState(false);
  // const [validated, setValidated] = useState(false);

  /*Validation for first and last name of the beneficiary */
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      if (firstName === "" || firstName === "_  _  _  _  _  _") {
        document.getElementById("fNameLabelReq").style.display = "block";
        document.getElementById("fNameLabelLen").style.display = "block";
        document.getElementById("fNameLabelOK").style.display = "none";
      }
      else if (firstName.length < 2) {
        document.getElementById("fNameLabelReq").style.display = "none";
        document.getElementById("fNameLabelOK").style.display = "none";
        document.getElementById("fNameLabelLen").style.display = "block";
      }
      else if (firstName.length >= 2 & firstName !== "_  _  _  _  _  _") {
        document.getElementById("fNameLabelOK").style.display = "block";
        document.getElementById("fNameLabelReq").style.display = "none";
        document.getElementById("fNameLabelLen").style.display = "none";
      }
      if (lastName === "" || lastName === "_  _  _  _  _  _") {
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

  /*Validation for the occasion */
  const handleSubmit2 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      if (occasion === "" || occasion === "_  _  _  _  _  _") {
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

  /*Validation for the date and time of the performance */
  const handleSubmit7 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      if (dateService === "" || dateService === "_  _  _  _  _  _") {
        document.getElementById("date-timeReq").style.display = "block";
        document.getElementById("date-timeEditOK").style.display = "none";
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

  /*Validation for the address, city, state, and zip code of the performance */
  const handleSubmit8 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      if (address === "" || address === "_  _  _  _  _  _") {
        document.getElementById("addressLineReq").style.display = "block";
        document.getElementById("addressLineOK").style.display = "none";
      }
      if (address.length < 4 && address.length >= 1) {
        document.getElementById("addressLineLen").style.display = "block";
        document.getElementById("addressLineReq").style.display = "none";
        document.getElementById("addressLineOK").style.display = "none";
      }
      if (address.length >= 4 && address !== "_  _  _  _  _  _") {
        document.getElementById("addressLineLen").style.display = "none";
        document.getElementById("addressLineReq").style.display = "none";
        document.getElementById("addressLineOK").style.display = "block";
      }
      if (city === "" || city === "_  _  _  _  _  _") {
        document.getElementById("cityReq").style.display = "block";
        document.getElementById("cityOK").style.display = "none";
      }
      if (city !== "" && city !== "_  _  _  _  _  _") {
        document.getElementById("cityReq").style.display = "none";
        document.getElementById("cityOK").style.display = "block";
      }
      if (state === "" || state === "_  _  _  _  _  _") {
        document.getElementById("stateReq").style.display = "block";
        document.getElementById("stateOK").style.display = "none";
      }
      if (state !== "" && state !== "_  _  _  _  _  _") {
        document.getElementById("stateReq").style.display = "none";
        document.getElementById("stateOK").style.display = "block";
      }
      if (zip === "" || zip === "_  _  _  _  _  _") {
        document.getElementById("zipReq").style.display = "block";
        document.getElementById("zipOK").style.display = "none";
      }
      if (zip.length < 6 && zip.length >= 1) {
        document.getElementById("zipLen").style.display = "block";
        document.getElementById("zipReq").style.display = "none";
        document.getElementById("zipOK").style.display = "none";
      }
      if (zip.length >= 6 && zip !== "_  _  _  _  _  _") {
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

  /*Validation for the orderer's name, phone number, and email */
  const handleSubmit9 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("personal information is not valid");
      if (offered === "" || offered === "_  _  _  _  _  _") {
        document.getElementById("offeredByReq").style.display = "block";
        document.getElementById("offeredByOK").style.display = "none";
      }
      if (offered.length < 3 && offered.length >= 1) {
        document.getElementById("offeredByLen").style.display = "block";
        document.getElementById("offeredByReq").style.display = "none";
        document.getElementById("offeredByOK").style.display = "none";
      }
      if (offered.length >= 3 && offered !== "_  _  _  _  _  _") {
        document.getElementById("offeredByLen").style.display = "none";
        document.getElementById("offeredByReq").style.display = "none";
        document.getElementById("offeredByOK").style.display = "block";
      }
      if (number === "" || number === "_  _  _  _  _  _") {
        document.getElementById("phoneNumberReq").style.display = "block";
        document.getElementById("phoneNumberOK").style.display = "none";
        document.getElementById("phoneNumberNums").style.display = "none";
      }
      if (number.length < 10 && number.length >=1) {
        document.getElementById("phoneNumberLen").style.display = "block";
        document.getElementById("phoneNumberReq").style.display = "none";
        document.getElementById("phoneNumberOK").style.display = "none";
      }
      if (number.length >= 10 && number !== "_  _  _  _  _  _") {
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
      if (email === "" || email === "_  _  _  _  _  _") {
        document.getElementById("emailReq").style.display = "block";
        document.getElementById("emailOK").style.display = "none";
        document.getElementById("emailLen").style.display = "none";
      }
      if (email.length >= 5 && !email.includes("@") && !email.includes(".") && email !== "_  _  _  _  _  _" && email !== "") {
        document.getElementById("emailLen").style.display = "block";
        document.getElementById("emailReq").style.display = "none";
        document.getElementById("emailOK").style.display = "none";
      }
      if (email.includes("@") && email.includes(".")) {
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
      // document.getElementById("emailLen").style.display = "none";
        document.getElementById("emailReq").style.display = "none";
        document.getElementById("emailOK").style.display = "block";
      event.preventDefault();
      event.stopPropagation();
      console.log("true");
      forward9();
    }

  };

  /*Insert all values into editable fields in summary page */
  function startEdit() {
    document.getElementById("summaryDetails").style.display="none"
    document.getElementById("editFields").style.display="block"
    document.getElementById("fNameFieldEdit").value=firstName
    document.getElementById("lNameFieldEdit").value=lastName
    let giftField = document.getElementById("giftEdit")
    for (let i = 0; i < giftField.options.length; i++) {
      if (giftField.options[i].text=== gift) {
          giftField.options[i].selected = true;
          break;
      }
  }
    document.getElementById("form1Edit").value=occasion
    let surpriseField = document.getElementById("surpriseEdit")
    for (let i = 0; i < surpriseField.options.length; i++) {
      if (surpriseField.options[i].text=== suprise) {
          surpriseField.options[i].selected = true;
          break;
      }
  }
    let typeField = document.getElementById("typeEdit")
    for (let i = 0; i < typeField.options.length; i++) {
      if (typeField.options[i].text=== type) {
          typeField.options[i].selected = true;
          break;
      }
  }
    let numberMusiciansField = document.getElementById("numberMusiciansEdit")
    for (let i = 0; i < numberMusiciansField.options.length; i++) {
      if (numberMusiciansField.options[i].text=== numberMusicians) {
          numberMusiciansField.options[i].selected = true;
          break;
      }
  }
  document.getElementById("date-time-fieldEdit").value= dateService + "T" + timeService
  document.getElementById("address-line-fieldEdit").value = address
  let cityField = document.getElementById("cityEdit")
  for (let i = 0; i < cityField.options.length; i++) {
    if (cityField.options[i].text=== city) {
        cityField.options[i].selected = true;
        break;
    }
}
    document.getElementById("zipEdit").value = zip
    document.getElementById("offered-fieldEdit").value = offered
    document.getElementById("phoneEdit").value = number
    document.getElementById("emailEdit").value = email
    document.getElementById("commentEdit").value = comments
}

  /*After edit in summary page, check if each value is in the right format. 
  Stop edit when they are, and do not stop if they are not. */
  const saveEdit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

    /*First Name Check*/
    if (firstName === "" || firstName === "_  _  _  _  _  _") {
      document.getElementById("fNameLabelEditReq").style.display = "block";
      document.getElementById("fNameLabelEditLen").style.display = "block";
      document.getElementById("fNameLabelEditOK").style.display = "none";
    }
    else if (firstName.length < 3) {
      document.getElementById("fNameLabelEditReq").style.display = "none";
      document.getElementById("fNameLabelEditOK").style.display = "none";
      document.getElementById("fNameLabelEditLen").style.display = "block";
    }
    else if (firstName.length >= 3 & firstName !== "_  _  _  _  _  _") {
      document.getElementById("fNameLabelEditOK").style.display = "block";
      document.getElementById("fNameLabelEditReq").style.display = "none";
      document.getElementById("fNameLabelEditLen").style.display = "none";
    }

    /*Last Name Check */
    if (lastName === "" || lastName === "_  _  _  _  _  _") {
      document.getElementById("lNameLabelEditReq").style.display = "block";
      document.getElementById("lNameLabelEditLen").style.display = "block";
      document.getElementById("lNameLabelEditOK").style.display = "none";
    }
    else if (lastName.length < 3 ) {
      document.getElementById("lNameLabelEditReq").style.display = "none";
      document.getElementById("lNameLabelEditOK").style.display = "none";
      document.getElementById("lNameLabelEditLen").style.display = "block";
    }
    else if (lastName.length >= 3) {
      document.getElementById("lNameLabelEditOK").style.display = "block";
      document.getElementById("lNameLabelEditReq").style.display = "none";
      document.getElementById("lNameLabelEditLen").style.display = "none";
    }

    /*Occassion Check*/
    if (occasion === "" || occasion === "_  _  _  _  _  _") {
      document.getElementById("occasionEditReq").style.display = "block";
      document.getElementById("occasionEditLen").style.display = "block";
      document.getElementById("occasionEditOK").style.display = "none";
    }
    else if (occasion.length < 3 && occasion !== "") {
      document.getElementById("occasionEditReq").style.display = "none";
      document.getElementById("occasionEditLen").style.display = "block";
      document.getElementById("occasionEditOK").style.display = "none";
    }

    /*Date and Time Check */
    if (dateService === "" || dateService === "_  _  _  _  _  _") {
        document.getElementById("date-timeEditReq").style.display = "block";
        document.getElementById("date-timeEditOK").style.display = "none";
      }
    
    /*Address Check */
    if (address === "" || address === "_  _  _  _  _  _") {
      document.getElementById("addressLineEditReq").style.display = "block";
      document.getElementById("addressLineEditOK").style.display = "none";
    }
    if (address.length < 4 && address.length >= 1) {
      document.getElementById("addressLineEditLen").style.display = "block";
      document.getElementById("addressLineEditReq").style.display = "none";
      document.getElementById("addressLineEditOK").style.display = "none";
    }
    if (address.length >= 4 && address !== "_  _  _  _  _  _") {
      document.getElementById("addressLineEditLen").style.display = "none";
      document.getElementById("addressLineEditReq").style.display = "none";
      document.getElementById("addressLineEditOK").style.display = "block";
    }

    /*City Check */
    if (city === "" || city === "_  _  _  _  _  _") {
      document.getElementById("cityEditReq").style.display = "block";
      document.getElementById("cityEditOK").style.display = "none";
    }
    if (city !== "" && city !== "_  _  _  _  _  _") {
      document.getElementById("cityEditReq").style.display = "none";
      document.getElementById("cityEditOK").style.display = "block";
    }

    /*State Check */
    if (state === "" || state === "_  _  _  _  _  _") {
      document.getElementById("stateEditReq").style.display = "block";
      document.getElementById("stateEditOK").style.display = "none";
    }
    if (state !== "" && state !== "_  _  _  _  _  _") {
      document.getElementById("stateEditReq").style.display = "none";
      document.getElementById("stateEditOK").style.display = "block";
    }

    /*Zip Check */
    if (zip ===  "" || zip ===  "_  _  _  _  _  _") {
      document.getElementById("zipEditReq").style.display = "block";
      document.getElementById("zipEditOK").style.display = "none";
    }
    if (zip.length < 6 && zip.length >= 1) {
      document.getElementById("zipEditLen").style.display = "block";
      document.getElementById("zipEditReq").style.display = "none";
      document.getElementById("zipEditOK").style.display = "none";
    }
    if (zip.length >= 6 && zip !== "_  _  _  _  _  _") {
      document.getElementById("zipEditLen").style.display = "none";
      document.getElementById("zipEditReq").style.display = "none";
      document.getElementById("zipEditOK").style.display = "block";
    }

    /*Offered By Check */
    if (offered ===  "" || offered ===  "_  _  _  _  _  _") {
      document.getElementById("offeredByEditReq").style.display = "block";
      document.getElementById("offeredByEditOK").style.display = "none";
    }
    if (offered.length < 3 && offered.length >= 1) {
      document.getElementById("offeredByEditLen").style.display = "block";
      document.getElementById("offeredByEditReq").style.display = "none";
      document.getElementById("offeredByEditOK").style.display = "none";
    }
    if (offered.length >= 3 && offered !== "_  _  _  _  _  _") {
      document.getElementById("offeredByEditLen").style.display = "none";
      document.getElementById("offeredByEditReq").style.display = "none";
      document.getElementById("offeredByEditOK").style.display = "block";
    }

    /*Phone Number Check */
    if (number ===  "" || number ===  "_  _  _  _  _  _") {
      document.getElementById("phoneNumberEditReq").style.display = "block";
      document.getElementById("phoneNumberEditOK").style.display = "none";
      document.getElementById("phoneNumberEditNums").style.display = "none";
    }
    if (number.length < 10 && number.length >=1) {
      document.getElementById("phoneNumberEditLen").style.display = "block";
      document.getElementById("phoneNumberEditReq").style.display = "none";
      document.getElementById("phoneNumberEditOK").style.display = "none";
    }
    if (number.length >= 10 && number !== "_  _  _  _  _  _") {
      document.getElementById("phoneNumberEditLen").style.display = "none";
      document.getElementById("phoneNumberEditReq").style.display = "none";
      document.getElementById("phoneNumberEditNums").style.display = "none";
      document.getElementById("phoneNumberEditOK").style.display = "block";
    }
    if (number.match("[a-zA-Z]+") || number.length > 10){
      document.getElementById("phoneNumberEditLen").style.display = "none";
      document.getElementById("phoneNumberEditReq").style.display = "none";
      document.getElementById("phoneNumberEditOK").style.display = "none";
      document.getElementById("phoneNumberEditNums").style.display = "block";
    }

    /*Email Check */
    if (email ===  "" || email ===  "_  _  _  _  _  _") {
      document.getElementById("emailEditReq").style.display = "block";
      document.getElementById("emailEditOK").style.display = "none";
    }
    if (email.length < 3 && email.length >= 1) {
      document.getElementById("emailEditLen").style.display = "block";
      document.getElementById("emailEditReq").style.display = "none";
      document.getElementById("emailEditOK").style.display = "none";
    }
    if (email.length >= 3 && email !== "_  _  _  _  _  _" ) {
      document.getElementById("emailEditLen").style.display = "none";
      document.getElementById("emailEditReq").style.display = "none";
      document.getElementById("emailEditOK").style.display = "block";
    }
  }

  /*Everything Passes */
  else {
    event.preventDefault();
    event.stopPropagation();
    document.getElementById("lNameLabelEditOK").style.display = "block";
    document.getElementById("lNameLabelEditReq").style.display = "none";
    document.getElementById("lNameLabelEditLen").style.display = "none";

    document.getElementById("fNameLabelEditOK").style.display = "block";
    document.getElementById("fNameLabelEditReq").style.display = "none";
    document.getElementById("fNameLabelEditLen").style.display = "none";

    document.getElementById("occasionEditOK").style.display = "block";
    document.getElementById("occasionEditReq").style.display = "none";
    document.getElementById("occasionEditLen").style.display = "none";

    document.getElementById("date-timeEditOK").style.display = "block";
    document.getElementById("date-timeEditReq").style.display = "none";

    document.getElementById("zipEditLen").style.display = "none";
    document.getElementById("zipEditReq").style.display = "none";
    document.getElementById("zipEditOK").style.display = "block";

    document.getElementById("stateEditReq").style.display = "none";
    document.getElementById("stateEditOK").style.display = "block";

    document.getElementById("cityEditLen").style.display = "none";
    document.getElementById("cityEditReq").style.display = "none";
    document.getElementById("cityEditOK").style.display = "block";

    document.getElementById("addressLineEditLen").style.display = "none";
    document.getElementById("addressLineEditReq").style.display = "none";
    document.getElementById("addressLineEditOK").style.display = "block";

    document.getElementById("offeredByEditLen").style.display = "none";
    document.getElementById("offeredByEditReq").style.display = "none";
    document.getElementById("offeredByEditOK").style.display = "block";

    document.getElementById("phoneNumberEditLen").style.display = "none";
    document.getElementById("phoneNumberEditReq").style.display = "none";
    document.getElementById("phoneNumberEditOK").style.display = "block";
    document.getElementById("phoneNumberEditNums").style.display = "none";

    document.getElementById("emailEditLen").style.display = "none";
    document.getElementById("emailEditReq").style.display = "none";
    document.getElementById("emailEditOK").style.display = "block";

    console.log("true");
    document.getElementById("summaryDetails").style.display="block"
    document.getElementById("editFields").style.display="none"
  }
}

/*Edit Gift Value & Text in Summary Page*/
function editGift() {
  let currentGift = document.getElementById("giftEdit").value
  if (currentGift ===  "one person") {
    setGift("one person"); 
    setGiftText("One person in Particular");
  }

  else if (currentGift ===  "small committee") {
    setGift("small committee"); 
    setGiftText("A Small Committee")
  }

  else if (currentGift ===  "institution") {
    setGift("institution"); 
    setGiftText("An Instution");
  }
}

/*Edit Type Value & Check in Summary Page*/
function editType() {
  let currentType = document.getElementById("typeEdit").value
  if (currentType ===  "classic") {
    setType("classic"); 
    setTypeText("Classical Music");
  }

  else if (currentType ===  "popular") {
    setType("popular"); 
    setTypeText("Popular Music")
  }

  else if (currentType ===  "jazzy/pop") {
    setType("jazzy/pop"); 
    setTypeText("Jazzy-Pop music");
  }

  else if (currentType ===  "surprise") {
    setType("suprise"); 
    setTypeText("A surprise");
  }
}

function submitOrderModal() {
  // Get the modal
  document.getElementById("orderModal").style.display = "block";
}

function closeModal() {
  window.location.replace(process.env.PUBLIC_URL + '/#/')
}

window.onclick = function(event) {
  let modal = document.getElementById("orderModal")
  if (event.target == modal) {
    window.location.replace(process.env.PUBLIC_URL + '/#/');
  }
}


  return (
    /*HTML/React for the ordering process */
    <ReactBootStrap.Container className="top-space-ordering" style={{marginTop:"50px"}}>
      <ReactBootStrap.Container className="bg-display" id="order1">

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>1. First step, to whom do you want to offer this musical moment?</h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row>
        <div className="bg-display-test">
            <ReactBootStrap.Col onClick={(e) => { setGift("one person"); setGiftText("One person in Particular"); forward1(); }}>
              <button id="trans-button-style"><img src={pic1} className="pic" alt=""/><p>One person <br /> in particular</p></button>
            </ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col onClick={(e) => { setGift("small committee"); setGiftText("A small committee"); forward1(); }}>
              <button id="trans-button-style"><img src={pic2} className="pic" alt=""/><p>A small <br />  committee</p></button>
            </ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col onClick={(e) => { setGift("institution"); setGiftText("An institution"); forward1(); }}>
              <button id="trans-button-style"><img src={pic3} className="pic" alt=""/><p>An <br />  institution</p></button>
            </ReactBootStrap.Col>
          </div>
        </ReactBootStrap.Row>

      </ReactBootStrap.Container>

      <ReactBootStrap.Container className="bg-display" id="order2">

      <ReactBootStrap.Row className="justify-content-md-center">
        <ReactBootStrap.Col><h3>2. Good. Now, who will be the main beneficiary of the concert? </h3></ReactBootStrap.Col>
      </ReactBootStrap.Row>

      <ReactBootStrap.Row className="justify-content-md-center" style={{ marginBottom: '30px', marginTop: "-30px" }}>
        <ReactBootStrap.Col><h4>&#x1F6C8; Tell us more about who will be at the centre of this moment, or their name if they live in an institution. For example: "Grandma Léa", "Pré-Fleuri institution" ... </h4></ReactBootStrap.Col>
      </ReactBootStrap.Row>

      <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ marginLeft: '20px', marginRight: "20px", paddingTop: '10px', marginBottom: "-20px" }}>

        <Form.Row className="justify-content-md-center">
          <Form.Group as={Col} xs={6} controlId="formGridFirstName">
            <Form.Control className="form-control" required minLength="2" type="text" id="fNameField" placeholder="First Name" onChange={(e) => { setFirstName(e.target.value); }} />
            <span id="fNameLabelOK">Looks Good!</span>
            <span id="fNameLabelReq">First Name is required!</span>
            <span id="fNameLabelLen"></span>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Control className="form-control" required minLength="2" type="text" placeholder="Last Name" onChange={(e) => { setLastName(e.target.value); }} />
            <span id="lNameLabelOK">Looks Good!</span>
            <span id="lNameLabelReq">Last Name is required!</span>
            <span id="lNameLabelLen"></span>
          </Form.Group>
        </Form.Row>

        <div class="buttonAlign">
          <input type="button" value="Back" className="ordering_back_button" onClick={back2}/>
          <input type="button" value="Next" className="ordering_next_button" type="submit"/>
          {/* <ReactBootStrap.Button variant="danger" className='button' onClick={back2}>Back</ReactBootStrap.Button> */}
          {/* <ReactBootStrap.Button type="submit" variant="success" className='button'>Next</ReactBootStrap.Button> */}
        </div>

      </Form>

      </ReactBootStrap.Container>

      <ReactBootStrap.Container className="bg-display" id="order3">
        <ReactBootStrap.Row className="justify-content-md-center">
  <ReactBootStrap.Col><h3>3. {firstName} {lastName}, Got it! Now, what are we celebrating</h3></ReactBootStrap.Col>
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
                  <span id="occasionLen"></span>
                </div>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>


            </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
            <ReactBootStrap.Col style={{ marginTop: '20px' }}>
              <div class="buttonAlign">
              <input type="button" value="Back" className="ordering_back_button" onClick={back3}/>
              <input type="button" value="Next" className="ordering_next_button" type="submit"/>
                {/* <ReactBootStrap.Button variant="danger" className='button' onClick={back3}>Back</ReactBootStrap.Button>
                <ReactBootStrap.Button type="submit" variant="success" className='button'>Next</ReactBootStrap.Button> */}
              </div>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
        </Form>
      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order4">

        <ReactBootStrap.Row className="justify-content-md-center">
  <ReactBootStrap.Col><h3>4. And what style of music would {firstName} {lastName} like to hear? </h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center" style={{ marginBottom: '30px', marginTop: "-30px" }}>
          <ReactBootStrap.Col><h4>&#x1F6C8; Choose the style of music, we will take care of finding the ideal musician available near you.</h4></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row>
          <div className="bg-display-test">
            <ReactBootStrap.Col onClick={(e) => { setType("classic"); setTypeText("Classical music"); forward4(); }}>
              <button id="trans-button-style"><img src={pic5} className="pic" alt=""/><p>Classical</p></button>
            </ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col onClick={(e) => { setType("popular"); setTypeText("Popular music"); forward4(); }}>
              <button id="trans-button-style" ><img src={pic6} className="pic" alt=""/><p style={{ fontSize: '18px' }}>Popular Music</p></button>
            </ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col onClick={(e) => { setType("jazzy/pop"); setTypeText("Jazzy-Pop music"); forward4(); }}>
              <button id="trans-button-style" ><img src={pic7} className="pic" alt=""/><p>Jazzy - Pop</p></button>
            </ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col onClick={(e) => { setType("suprise"); setTypeText("A surprise"); forward4(); }}>
              <button id="trans-button-style" ><img src={pic8} className="pic" alt=""/><p>Surprise!</p></button>
            </ReactBootStrap.Col>
          </div>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row>
          <ReactBootStrap.Col style={{ marginTop: '20px' }}>
            <div class="buttonAlign">
              {/* <ReactBootStrap.Button variant="danger" className='button' onClick={back4}>Back</ReactBootStrap.Button> */}
              <input type="button" value="Back" className="ordering_back_button" onClick={back4}/>
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
            <ReactBootStrap.Col onClick={(e) => { setNumberMusicians("solo"); forward5(); }}>
              <button id="trans-button-style"><img src={pic9} className="pic2" alt=""/><p>Soloist</p></button>
            </ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col onClick={(e) => { setNumberMusicians("duo"); forward5(); }}>
              <button id="trans-button-style"><img src={pic10} className="pic2" alt=""/><p>Duo</p></button>
            </ReactBootStrap.Col>
          </div>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row>
          <ReactBootStrap.Col style={{ marginTop: '20px' }}>
            <div class="buttonAlign">
            <input type="button" value="Back" className="ordering_back_button" onClick={back5}/>
              {/* <ReactBootStrap.Button variant="danger" className='button' onClick={back5}>Back</ReactBootStrap.Button> */}
            </div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>

      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order6">

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>6. Good. Is this a surprise?</h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <div className="bg-display-button" onClick={(e) => { setSuprise("yes"); forward6(); }}>
            <button id="trans-button-style" >
              <ReactBootStrap.Col><p class="surprise">Yes</p></ReactBootStrap.Col>
            </button>
          </div>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <div style={{ marginTop: '10px' }} className="bg-display-button" onClick={(e) => { setSuprise("no"); forward6(); }}>
            <button id="trans-button-style" >
              <ReactBootStrap.Col><p class="surprise">No</p></ReactBootStrap.Col>
            </button>
          </div>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row>
          <ReactBootStrap.Col style={{ marginTop: '20px' }}>
            <div class="buttonAlign">
              <input type="button" value="Back" className="ordering_back_button" onClick={back6} style={{marginRight:"0px"}}/>
              {/* <ReactBootStrap.Button variant="danger" className='button' onClick={back6}>Back</ReactBootStrap.Button> */}
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
                format-value="yyyy-MM-dTHH:mm"
                min={dateAndTime()}
                onChange={(e) => { let date = e.target.value.substring(0, 10); let time = e.target.value.substring(11, 16); setDateService(date); setTimeService(time);}}></Form.Control>
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
              <input type="button" value="Back" className="ordering_back_button" onClick={back7}/>
              <input type="button" value="Next" className="ordering_next_button" type="submit"/>
            {/* <ReactBootStrap.Button variant="danger" className='button' onClick={back7}>Back</ReactBootStrap.Button>
            <ReactBootStrap.Button type="submit" variant="success" className='button'>Next</ReactBootStrap.Button> */}
          </div>

        </Form>

      </ReactBootStrap.Container>



      <ReactBootStrap.Container className="bg-display" id="order8">

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>8. Perfect! Now where will these festivities take place?  </h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <Form noValidate validated={validated} onSubmit={handleSubmit8} style={{ marginLeft: '20px', marginRight: "20px", paddingTop: '10px', marginBottom: "-20px" }}>
          {/* <MediaQuery orientation={"landscape"}> */}
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address Line</Form.Label>
              <Form.Control required minLength="4" placeholder="1234 Main St" id="address-line-field" onChange={(e) => { setAddress(e.target.value); }} />
              <span id="addressLineOK">Looks Good!</span>
              <span id="addressLineReq">Address line is required!</span>
              <span id="addressLineLen">Minimum length of 4 is required!</span>
            </Form.Group>
          {/* </MediaQuery> */}

          {/* <MediaQuery orientation={"Portrait"}>
            <Form.Group controlId="formGridAddress1" class="justify-content-md-center">
              <Form.Label class="justify-content-md-center">Address Line</Form.Label>
              <Form.Control required minLength="4" placeholder="1234 Main St" id="address-line-field" onChange={(e) => { setAddress(e.target.value); }} />
              <span id="addressLineOK">Looks Good!</span>
              <span id="addressLineReq">Address line is required!</span>
              <span id="addressLineLen">Minimum length of 4 is required!</span>
            </Form.Group>
          </MediaQuery> */}

          {/* <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" onChange={(e) => { setAddress2(e.target.value); }} />
          </Form.Group> */}
            <Form.Row>

            <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control required as="select" defaultValue="Choose..." onChange={(e) => { setCity(e.target.value); }}>
                  <option value="">Choose from below</option>
                  <option value="Vancouver">Vancouver</option>
                  <option value="Surrey">Surrey</option>
                  <option value="Burnaby">Burnaby</option>
                  <option value="New Westminster">New Westminster</option>
                  <option value="Port Coquitlam">Port Coquitlam</option>
                  <option value="North Vancouver">North Vancouver</option>
                  <option value="Langley">Langley</option>
                  <option value="Delta">Delta</option>
                  <option value="Richmond">Richmond</option>
                  </Form.Control>
                  <span id="cityOK">Looks Good!</span>
                  <span id="cityReq">City is required!</span>
                  <span id="cityLen"></span>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control required as="select" minLength="3" defaultValue="Choose..." onChange={(e) => { setState(e.target.value); }}>
                  <option value="">Choose from below</option>
                  <option value="British Columbia">British Columbia</option>
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


          {/* <MediaQuery orientation={"portrait"}>
            <Form.Row class="justify-content-md-center">
              <Form.Group controlId="formGridCity">
                <div>
                  <Form.Label>City</Form.Label>
                  <Form.Control required placeholder="Burnaby" onChange={(e) => { setCity(e.target.value); }} />
                  <span id="cityOK">Looks Good!</span>
                  <span id="cityReq">City is required!</span>
                  <span id="cityLen"></span>
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
          </MediaQuery> */}

          <div class="buttonAlign" style={{paddingTop:"50px", paddingBottom:"100px"}}>
            <input type="button" value="Back" className="ordering_back_button" onClick={back8}/>
            <input type="button" value="Next" className="ordering_next_button" type="submit"/>
            {/* <ReactBootStrap.Button variant="danger" className='button' onClick={back8}>Back</ReactBootStrap.Button>
            <ReactBootStrap.Button type="submit" variant="success" className='button'>Next</ReactBootStrap.Button> */}
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
                <span id="offeredByLen"></span>
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
            <input type="button" value="Back" className="ordering_back_button" onClick={back9}/>
            <input type="button" value="Next" className="ordering_next_button" type="submit"/>
            {/* <ReactBootStrap.Button variant="danger" className='button' onClick={back9}>Back</ReactBootStrap.Button> */}
            {/* <ReactBootStrap.Button type="submit" variant="success" className='button'>Next</ReactBootStrap.Button> */}
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
            <input type="button" value="Back" className="ordering_back_button" onClick={back10}/>
            <input type="button" value="Next" className="ordering_next_button" onClick={forward10}/>
            {/* <ReactBootStrap.Button variant="danger" className='button' onClick={back10}>Back</ReactBootStrap.Button> */}
            {/* <ReactBootStrap.Button variant="success" className='button' onClick={forward10}>Submit</ReactBootStrap.Button> */}
          </div>

        </Form>

      </ReactBootStrap.Container>


      {/*
        Summary Page without editing
      */}
      <ReactBootStrap.Container className="bg-display" id="orderConfirm">
        <ReactBootStrap.Container id="summaryDetails">
          <ReactBootStrap.Row className="justify-content-md-center">
            <ReactBootStrap.Col md="auto"><h3>Perfect, we have everything. Here is a summary of your order before entering payment details.</h3></ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <ReactBootStrap.Col md="auto"><h6 className="editText">You can make changes by clicking the edit button below</h6></ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className = "justify-content-md-center">
            <div className="bg-display-test">
            <ReactBootStrap.Col md="auto" onClick={startEdit}>
              <img src={editButton} alt="" className="editButton"  />
            </ReactBootStrap.Col>
          </div>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <h6 className="orderLineText">Beneficiary</h6>
              <hr className="orderLine"/>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
          <ReactBootStrap.Col md="auto">
                <p className="intro">First Name:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto" id="summaryDetails">
                <p>{firstName}</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
          <ReactBootStrap.Col md="auto">
                <p className="intro">Last Name:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto" id="summaryDetails">
                <p>{lastName}</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
          <ReactBootStrap.Col md="auto">
                <p className="intro">For:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <p>({giftText})</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
              <ReactBootStrap.Col md="auto">
                <p className="intro">Occasion:</p>

              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <p>{occasion}</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <h6 className="orderLineText">Information about the concert</h6>
              <hr className="orderLine"/>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
              <ReactBootStrap.Col md="auto">
                <p className="intro">Surprise concert:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <p>{suprise}</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
              <ReactBootStrap.Col md="auto">
                <p className="intro">Style of music:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <p>{typeText}</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row >
              <ReactBootStrap.Col md="auto">
                <p className="intro">Number of Musicians:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <p>{numberMusicians}</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row >
              <ReactBootStrap.Col md="auto">
                <p className="intro" >Date of Service:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <p>{dateService}</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row >
              <ReactBootStrap.Col md="auto">
                <p className="intro">Time of Service:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <p>{timeService}</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row >
              <ReactBootStrap.Col md="auto">
                <p className="intro">Address:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <p>{address}</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row >
              <ReactBootStrap.Col md="auto">
                <p className="intro">City:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <p>{city}</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row >
              <ReactBootStrap.Col md="auto">
                <p className="intro">State:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <p>{state}</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row >
              <ReactBootStrap.Col md="auto">
                <p className="intro">Zip:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <p>{zip}</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row >
            <ReactBootStrap.Col>
              <h6 className="orderLineText">Thanks to the generosity of:</h6>
              <hr className="orderLine"/>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
          <ReactBootStrap.Col md="auto">
                <p className="intro">Offered By:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <p>{offered}</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row >
              <ReactBootStrap.Col md="auto">
                <p className="intro">Phone Number:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <p>{number}</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row >
              <ReactBootStrap.Col md="auto">
                <p className="intro">Email:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <p>{email}</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row >
            <ReactBootStrap.Col>
              <h6 className="orderLineText">Comment (optional)</h6>
              <hr className="orderLine"/>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row >
              <ReactBootStrap.Col md="auto">
                <p>{comments}</p>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>


          <ReactBootStrap.Row className="justify-content-md-center">
            <div class="buttonAlign">
            <input type="button" value="Back" className="ordering_back_button" onClick={backFinal}/>
            <input type="button" value="Submit Order" className="ordering_next_button" onClick={(e) => {submitOrderModal(); submitOrder() }}/>
            {/* <a href={process.env.PUBLIC_URL + '/#/'}><input type="button" value="Submit Order" className="ordering_next_button" onClick={submitOrder}/></a> */}
              {/* <ReactBootStrap.Button variant="danger" className='button' onClick={backFinal}>Back</ReactBootStrap.Button> */}
              {/* <a href={process.env.PUBLIC_URL + '/#/'}> */}
                {/* <ReactBootStrap.Button md="auto" variant="success" className='button' style={{ width: '185px' }} onClick={submitOrder}>Submit Order</ReactBootStrap.Button> */}
              {/* </a> */}
            </div>
          </ReactBootStrap.Row>

        </ReactBootStrap.Container>


        {/*
          Summary Page during editing
        */}
        <ReactBootStrap.Container id="editFields">
        <ReactBootStrap.Row className="justify-content-md-center">
            <ReactBootStrap.Col md="auto"><h3>Perfect, we have everything. Here is a summary of your order before entering payment details.</h3></ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className="justify-content-md-center">
            <ReactBootStrap.Col md="auto"><h6 className="editText">You can make changes by clicking the edit button below</h6></ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row className = "justify-content-md-center">
            <div className="bg-display-test">
            <ReactBootStrap.Col md="auto">
              <img src={editButton} alt="" className="editButton" onClick={startEdit} />
            </ReactBootStrap.Col>
          </div>
          </ReactBootStrap.Row>
          

          <ReactBootStrap.Row className="justify-content-md-center">
            <ReactBootStrap.Col>
              <h6 className="orderLineText">Beneficiary</h6>
              <hr className="orderLine"/>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>
          

          <Form noValidate validated={validated} onSubmit={saveEdit} style={{ marginLeft: '20px', marginRight: "20px", paddingTop: '10px', marginBottom: "-20px" }}>
          <ReactBootStrap.Row>
          <ReactBootStrap.Col md="auto">
          <p className="intro">First Name:</p>
          </ReactBootStrap.Col>

              <ReactBootStrap.Col md="auto">
                <Form.Row>
                  <Form.Group as={Col} xs={6} controlId="formGridFirstNameEdit">
                    <Form.Control className="form-control" required minLength="3" type="text" id="fNameFieldEdit" placeholder="First Name" onChange={(e) => { setFirstName(e.target.value); }} />
                    <span id="fNameLabelEditOK">Looks Good!</span>
                    <span id="fNameLabelEditReq">First Name is required!</span>
                    <span id="fNameLabelEditLen"></span>
                  </Form.Group>
                </Form.Row>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>


          <ReactBootStrap.Row>
          <ReactBootStrap.Col md="auto">
          <p className="intro">Last Name:</p>
          </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridLastNameEdit">
                    <Form.Control className="form-control" required minLength="3" type="text" id="lNameFieldEdit" placeholder="Last Name" onChange={(e) => { setLastName(e.target.value); }} />
                    <span id="lNameLabelEditOK">Looks Good!</span>
                    <span id="lNameLabelEditReq">Last Name is required!</span>
                    <span id="lNameLabelEditLen"></span>
                  </Form.Group>
                </Form.Row>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
          <ReactBootStrap.Col md="auto">
          <p className="intro">For:</p>
          </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <Form.Row>
                  <Form.Group>
                    <Form.Control className="form-control" required as="select" id="giftEdit" onChange={editGift}>
                      <option>one person</option>
                      <option>small committee</option>
                      <option>institution</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
              <ReactBootStrap.Col md="auto">
                <p className="intro">Occasion:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <Form.Row>
                    <Form.Group>
                    <input type="text" required minLength="3" id="form1Edit" class="form-control" onChange={(e) => { setOccasion(e.target.value); }} />
                    <span id="occasionEditOK">Looks Good!</span>
                    <span id="occasionEditReq">Occasion is required!</span>
                    <span id="occasionEditLen"></span>
                    </Form.Group>
                  </Form.Row>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <h6 className="orderLineText">Information about the concert</h6>
              <hr className="orderLine"/>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
              <ReactBootStrap.Col md="auto">
                <p className="intro">Surprise concert:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <Form.Row >
                    <Form.Group>
                      <Form.Control className="form-control" required as="select" id="surpriseEdit" onChange={(e) => {setSuprise(e.target.value); }}>
                        <option>yes</option>
                        <option>no</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
              <ReactBootStrap.Col md="auto">
                <p className="intro">Style of music:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
              <Form.Row>
                    <Form.Group>
                      <Form.Control className="form-control" required as="select" id="typeEdit" onChange={editType}>
                        <option>classic</option>
                        <option>popular</option>
                        <option>jazzy/pop</option>
                        <option>surprise</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
              <ReactBootStrap.Col md="auto">
                <p className="intro">Number of Musicians:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <Form.Row>
                    <Form.Group>
                      <Form.Control className="form-control" required as="select" id="numberMusiciansEdit" onChange={(e) => {setNumberMusicians(e.target.value); }}>
                        <option>solo</option>
                        <option>duo</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
              <ReactBootStrap.Col md="auto">
                <p className="intro" >Date and Time of Service:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <Form.Row>
                  <Form.Group controlId="formGridDateEdit">
                    {/* <Form.Label>Date and Time of Service</Form.Label> */}
                    <Form.Control
                      required
                      id="date-time-fieldEdit"
                      type="datetime-local"
                      format-value="yyyy-MM-ddTHH:mm"
                      min={dateAndTime()}
                      onChange={(e) => { let date = e.target.value.substring(0, 10); let time = e.target.value.substring(11, 16); setDateService(date); setTimeService(time); }} />
                      <span id="date-timeEditOK">Looks Good!</span>
                      <span id="date-timeEditReq">Date and Time is required!</span>
                  </Form.Group>
                </Form.Row>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
              <ReactBootStrap.Col md="auto">
                <p className="intro">Address:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridAddress1">
                    <Form.Control required minLength="4" placeholder="1234 Main St" id="address-line-fieldEdit" onChange={(e) => { setAddress(e.target.value); }} />
                    <span id="addressLineEditOK">Looks Good!</span>
                    <span id="addressLineEditReq">Address line is required!</span>
                    <span id="addressLineEditLen">Minimum length of 4 is required!</span>
                  </Form.Group>
                </Form.Row>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
              <ReactBootStrap.Col md="auto">
                <p className="intro">City:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Control required as="select" defaultValue="Choose..." id="cityEdit" onChange={(e) => { setCity(e.target.value); }}>
                      <option value="">Choose from below</option>
                      <option value="Vancouver">Vancouver</option>
                      <option value="Surrey">Surrey</option>
                      <option value="Burnaby">Burnaby</option>
                      <option value="New Westminster">New Westminster</option>
                      <option value="Port Coquitlam">Port Coquitlam</option>
                      <option value="North Vancouver">North Vancouver</option>
                      <option value="Langley">Langley</option>
                      <option value="Delta">Delta</option>
                      <option value="Richmond">Richmond</option>
                    </Form.Control>
                    <span id="cityEditOK">Looks Good!</span>
                      <span id="cityEditReq">City is required!</span>
                      <span id="cityEditLen"></span>
                  </Form.Group>
                </Form.Row>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
              <ReactBootStrap.Col md="auto">
                <p className="intro">State:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Control required as="select" minLength="3" defaultValue="Choose..." id="stateEdit" onChange={(e) => { setState(e.target.value); }}>
                      <option value="">Choose from below</option>
                      <option value="British Columbia">British Columbia</option>
                      {/* <option value="Alberta">Alberta</option> */}
                    </Form.Control>
                    <span id="stateEditOK">Looks Good!</span>
                    <span id="stateEditReq">State is required!</span>
                  </Form.Group>
                </Form.Row>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
              <ReactBootStrap.Col md="auto">
                <p className="intro">Zip:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Control required minLength="6" placeholder="V3W9N3" id="zipEdit" onChange={(e) => { setZip(e.target.value); }} />
                    <span id="zipEditOK">Looks Good!</span>
                    <span id="zipEditReq">ZIP is required!</span>
                    <span id="zipEditLen">Enter zip like V3W9N3!</span>
                  </Form.Group>
                </Form.Row>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <h6 className="orderLineText">Thanks to the generosity of:</h6>
              <hr className="orderLine"/>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
          <ReactBootStrap.Col md="auto">
          <p className="intro">Offered By:</p>
          </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
              <Form.Group controlId="formGridHost">
                <Form.Control required minLength="3" type="text" placeholder="Your name here" id="offered-fieldEdit" onChange={(e) => { setOffered(e.target.value); }} />
                <span id="offeredByEditOK">Looks Good!</span>
                <span id="offeredByEditReq">Offered by is required!</span>
                <span id="offeredByEditLen"></span>
              </Form.Group>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
              <ReactBootStrap.Col md="auto">
                <p className="intro">Phone Number:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <Form.Group controlId="formGridPhone">
                  <Form.Control required minLength="10" type="tel" pattern="^\d{10}$" placeholder="778238xxxx" id="phoneEdit" onChange={(e) => { setNumber(e.target.value); }} />
                  <span id="phoneNumberEditOK">Looks Good!</span>
                  <span id="phoneNumberEditReq">Phone number is required!</span>
                  <span id="phoneNumberEditLen">Required pattern is 10 digits</span>
                  <span id="phoneNumberEditNums">Enter digits from 0-9 only!</span>
                </Form.Group>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
              <ReactBootStrap.Col md="auto">
                <p className="intro">Email:</p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <Form.Group controlId="formGridEmail">
                  <Form.Control required minLength="4" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" type="email" placeholder="yourname@gmail.com" id="emailEdit" onChange={(e) => { setEmail(e.target.value); }} />
                  <span id="emailEditOK">Looks Good!</span>
                  <span id="emailEditReq">Email is required!</span>
                  <span id="emailEditLen">Valid pattern is abc@email.co</span>
                </Form.Group>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
            <ReactBootStrap.Col>
              <h6 className="orderLineText">Comment (optional)</h6>
              <hr className="orderLine"/>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Row>
              <ReactBootStrap.Col md="auto">
                <Form.Group controlId="formGridComment">
                  <Form.Control as="textarea" rows={3} placeholder="Anything you'd like us to know" id="commentEdit" onChange={(e) => { setComments(e.target.value); }} />
                </Form.Group>
              </ReactBootStrap.Col>
          </ReactBootStrap.Row>


          <ReactBootStrap.Row>
            <div class="buttonAlign">
            <input type="button" value="Save Changes" className="ordering_next_button" type="submit"/>
              {/* <ReactBootStrap.Button type="submit" variant="success" className='button' style={{width:"250px"}}>Save Changes</ReactBootStrap.Button> */}
            </div>
          </ReactBootStrap.Row>
        </Form>
        </ReactBootStrap.Container>
      </ReactBootStrap.Container>

      <div id="orderModal" class="orderModal">
      <div class="orderModal-content">
        <span class="close" onClick={closeModal}>&times;</span>
        <p class="orderModalText">Sucesfully created order, email has been sent.</p>
      </div>
    </div>

    </ReactBootStrap.Container>

  )
};

export default Ordering