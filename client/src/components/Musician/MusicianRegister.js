import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import ScheduleSelector from 'react-schedule-selector';
import Axios from "axios";
import "./MusicianRegister.css";
import "mdbreact/dist/css/mdb.css";
import MediaQuery from 'react-responsive';

// import { Satellite } from "@material-ui/icons";

// ######## This function is used to 
// set the date variables that will be used to send the calander details into the database.#####  

function MusicianRegister() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [state, setSchedule] = useState({});
  const [mon, setMon] = useState("");
  const [tue, setTue] = useState("");
  const [wed, setWed] = useState("");
  const [thu, setThu] = useState("");
  const [fri, setFri] = useState("");
  const [sat, setSat] = useState("");
  const [sun, setSun] = useState("");
  const [date_time, setDate_time] = useState("");


// ######## This function is used for the calander that 
  // the musician uses to submit the availability.
  // it is part of the node package we used for the calander and handles the selections#####  

  const handleChange = newSchedule => {
    setSchedule({ schedule: newSchedule });

  }
  // ######## This function is used for the calander that 
  // the musician uses to submit the availability. 
  // it is what we use to post the data into the database#####  

  const seperate = () => {

    let monx = [];
    let tuex = [];
    let wedx = [];
    let thux = [];
    let frix = [];
    let satx = [];
    let sunx = [];
    let dateObj = [];



    for (let index = 0; index < state.schedule.length; index++) {
      if (state.schedule[index].getDate() === 2) {
        let monHour = state.schedule[index].getHours() + ":" + state.schedule[index].getMinutes()
        monx.push(monHour);

      } if (state.schedule[index].getDate() === 3) {
        let tueHour = state.schedule[index].getHours() + ":" + state.schedule[index].getMinutes()
        tuex.push(tueHour);

      } if (state.schedule[index].getDate() === 4) {
        let wedHour = state.schedule[index].getHours() + ":" + state.schedule[index].getMinutes()
        wedx.push(wedHour);


      } if (state.schedule[index].getDate() === 5) {
        let thuHour = state.schedule[index].getHours() + ":" + state.schedule[index].getMinutes()
        thux.push(thuHour);

      } if (state.schedule[index].getDate() === 6) {
        let friHour = state.schedule[index].getHours() + ":" + state.schedule[index].getMinutes()
        frix.push(friHour);

      } if (state.schedule[index].getDate() === 7) {
        let satHour = state.schedule[index].getHours() + ":" + state.schedule[index].getMinutes()
        satx.push(satHour);

      } if (state.schedule[index].getDate() === 8) {
        let sunHour = state.schedule[index].getHours() + ":" + state.schedule[index].getMinutes()
        sunx.push(sunHour);
      }
    }

    let availability = {monday:monx, tuesday:tuex, wednesday:wedx,
                  thursday:thux, friday:frix, saturday:satx, sunday:sunx};
    
    dateObj.push(availability);
    console.log(dateObj);

    setMon(JSON.stringify(monx)); 
    setTue(JSON.stringify(tuex));
    setWed(JSON.stringify(wedx));
    setThu(JSON.stringify(thux));
    setFri(JSON.stringify(frix));
    setSat(JSON.stringify(satx));
    setSun(JSON.stringify(sunx));
    setDate_time(JSON.stringify(dateObj));
    console.log(date_time);
    if (state.schedule.length === 0) {
      alert("nothing has been selected")
    } else {
         document.getElementById("regedit").style.display = "initial";
    }
  }


// ######## This function shows the text area when 
// the user clicks 'other' in musical training section#####  

  function ShowTextArea() {
    var textArea = document.getElementById("commentBox");
    textArea.style.display = "block";
    var textBox = document.getElementById("school");
    textBox.style.display = "none";

  }

  // ######## This function hides the text area when 
// the user clicks 'other' in musical training section
//  and shows the textbox when user clicks 'bachelor','master', or 'in school'#####  

  function HideTextArea() {
    var textArea = document.getElementById("commentBox");
    var textBox = document.getElementById("school");
    textArea.style.display = "none";
    textBox.style.display = "block";

  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ### Here we are setting the variables that the user will change to push into the database###

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [phone, setPhone] = useState("");

  const [etransfer, setEtransfer] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const [training, setTraining] = useState("");
  // const [othertraining, setOtherTraining] = useState("");
  const [othertraining] = useState("");

  const [instrument, setInstrument] = useState([]);
  const [style, setStyle] = useState("");
  const [group, setGroup] = useState("");
  const [site, setSite] = useState("");
  const [media, setMedia] = useState("");


  if (email.length >= 1) {
    document.getElementById("mus_emailValid").style.display = "block";
    if (email.includes("@") && email.length > 5 && (email.includes(".ca") || email.includes(".net") || email.includes(".org") || email.includes(".com"))) {
      document.getElementById("mus_emailValid").innerHTML = "Looks good";
    } else {
      document.getElementById("mus_emailValid").innerHTML = "Enter valid email";
    }
  }
  

  if (password.length >= 1) {
    document.getElementById("mus_passLen").style.display = "block";
    if (password.length >= 8) {
      document.getElementById("mus_passLen").innerHTML = "Looks good";
    } else {
      document.getElementById("mus_passLen").innerHTML = "Password must be 8 characters long";
    }
  }
  
  if (confirmpassword.length >= 1) {
    document.getElementById("mus_passMatch").style.display = "block";
    if (password === confirmpassword) {
      document.getElementById("mus_passMatch").innerHTML = "Looks good";
    } else {
      document.getElementById("mus_passMatch").innerHTML = "Password does not match";
    }
  }
  

  // ######## This function sends all the variables when the user clicks
  //  the submit button, into the server.js file #####  

  const submitMusician = () => {
    const instrumentList = JSON.stringify(instrument);
    const styleList = JSON.stringify(style);

    Axios.post("/musician/insert", {
      musicianFirstName: firstName,
      musicianLastName: lastName,
      musicianAddress: address,
      musicianPostalCode: postalCode,
      musicianCity: city,
      musicianProvince: province,
      musicianPhone: phone,
      musicianEtransfer: etransfer,
      musicianEmail: email,
      musicianPassword: password,
      musicianConfirmPassword: confirmpassword,
      musicianTraining: training,
      musicianOtherTraining: othertraining,
      musicianInstrument: instrumentList,
      musicianStyle: styleList,
      musicianGroup: group,
      musicianSite: site,
      musicianMedia: media,
      monday: mon,
      tuesday: tue,
      wednesday: wed,
      thursday: thu,
      friday: fri,
      saturday: sat,
      sunday: sun
    }).then(() => {
      alert("sucessful insert");
    });
    Axios.post("/register", {
      username: email,
      password: password
    }).then((response) => {
      console.log(response);
    });
    // window.location.reload();
  };

  function musicianRegisterModal() {
    // Get the modal
    document.getElementById("registerModal").style.display = "block";
  }

  function closeModal() {
    window.location.replace(process.env.PUBLIC_URL + '/#/')
  }

  window.onclick = function(event) {
    let modal = document.getElementById("registerModal")
    if (event.target == modal) {
      window.location.replace(process.env.PUBLIC_URL + '/#/');
    }
  }

  return (
    <ReactBootStrap.Container className="musregtop_space">
      <div className='display-reg'>
        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col>
            <h1 className="musicianregTitle">Musician Register</h1>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>


        

        
        <ReactBootStrap.Form>
          <ReactBootStrap.Container>
            <ReactBootStrap.Row>
              <ReactBootStrap.Col md={{ span: 8, offset: 2 }}>

                {/* ########## (USER ACOUNT INFORMATION) ########## */}

                  <ReactBootStrap.Form.Group style={{marginBottom:"15px"}}>
                  <ReactBootStrap.Form.Label id="font" style={{marginTop:"0px"}}>
                    Account Information
                  </ReactBootStrap.Form.Label>
                  {/* <h4>Create an account to recieve and view orders. Login with email and password.</h4> */}

                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="E-mail"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {/* <span>Looks Good!</span> */}
                  <span id="mus_emailValid" style={{color:"white"}}>Enter valid email</span>

                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group>
                  <ReactBootStrap.Form.Control
                    type="password"
                    placeholder="Create Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <span id="mus_passLen" style={{color:"white"}}>Password must be 8 characters long</span>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  <span id="mus_passMatch" style={{color:"white"}}>Password does not match</span>
                </ReactBootStrap.Form.Group>


                {/* ########## (PERSONAL INFORMATION) ########## */}
                <ReactBootStrap.Form.Group controlId="formGridfname">
                  <ReactBootStrap.Form.Label id="font">
                    Personal Information
                  </ReactBootStrap.Form.Label>

                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="Address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col md={{ span: 4 }}>
                    <ReactBootStrap.Form.Group controlId="formGridlname">
                      <ReactBootStrap.Form.Control
                        type="text"
                        placeholder="Postal Code"
                        onChange={(e) => {
                          setPostalCode(e.target.value);
                        }}
                      />
                    </ReactBootStrap.Form.Group>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col>
                    <ReactBootStrap.Form.Group controlId="formGridlname">
                      <ReactBootStrap.Form.Control
                        type="text"
                        placeholder="Locality/City"
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                      />
                    </ReactBootStrap.Form.Group>
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="Province"
                    onChange={(e) => {
                      setProvince(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Control
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Phone: 012-345-6789"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                {/* ########## (BANKING INFORMATION) ########## */}

                <ReactBootStrap.Form.Group>
                  <ReactBootStrap.Form.Label id="font">
                    Banking Information
                  </ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="E-Transer Email"
                    onChange={(e) => {
                      setEtransfer(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                

                {/* ########## (MUSICAL TRAINING) ########## */}

                <ReactBootStrap.Form.Group>
                  <ReactBootStrap.Form.Label id="font">
                    Musical Training
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col>
                    <div>
                      <label for="master" className='register'>
                        <input
                          className='education'
                          type="radio"
                          id="master"
                          name="groupOfDefaultRadios"
                          onClick={
                            (HideTextArea,
                              (e) => {
                                setTraining("Master");
                                HideTextArea();
                              })
                          }
                        />
                        <span>Master</span>
                      </label><br/>

                      <label for="inschool" className='register'>
                        <input
                          className='education'
                          type="radio"
                          id="inschool"
                          name="groupOfDefaultRadios"
                          onClick={
                            (HideTextArea,
                              (e) => {
                                setTraining("Currently in School");
                                HideTextArea();
                              })
                          }
                        />
                        <span>In School</span>
                      </label>
                    </div>
                    <div id='school'>
                      <label style={{ marginTop: '20px' }} className='register'>
                        <input
                          className='education'
                          type="text"
                          id="inschool"
                          name="groupOfDefaultRadios"
                          placeholder="Enter School.."


                        />
                      </label>
                    </div>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col >
                    <div>
                      <label for="bachelor" className='register'>
                        <input
                          className='education'
                          type="radio"
                          id="bachelor"
                          name="groupOfDefaultRadios"
                          onClick={
                            (HideTextArea,
                              (e) => {
                                setTraining("Bachelor");
                                HideTextArea();
                              })
                          }
                        />
                        <span>Bachelor</span>
                      </label>
                    </div>
                    <div>
                      <label for="Other" className='register'>
                        <input
                          className='education'
                          type="radio"
                          id="Other"
                          name="groupOfDefaultRadios"
                          onClick={ShowTextArea}
                        />
                        <span>Other</span>
                      </label>
                    </div>
                    <div
                      class="form-group shadow-textarea"
                      id="commentBox"
                      onLoad={HideTextArea}
                    >
                      <label for="exampleFormControlTextarea6"></label>
                      <textarea
                        class="form-control z-depth-1"
                        id="exampleFormControlTextarea6"
                        rows="5"
                        placeholder="Other Qualifications..."
                        onChange={(e) => {
                          setTraining(e.target.value);
                        }}
                      ></textarea>
                    </div>
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                {/* ########## (PROFESSIONAL INFORMATION) ########## */}

                <ReactBootStrap.Form.Group>
                  <ReactBootStrap.Form.Label id="font">
                    Professional Information
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

<ReactBootStrap.Container>
                <ReactBootStrap.Form.Group style={{ marginBottom: "1px" }}>
                  <ReactBootStrap.Form.Label>
                    <i>Instruments</i>
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                {/* ########## (INSTRUMENTS) ########## */}

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col>
                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={() => { if (instrument.includes("voice")) { instrument.splice(instrument.indexOf("voice"), 1) } else { setInstrument([...instrument, "voice"]); } }}
                    />
                    <span>Voice</span>
                  </label>                  </ReactBootStrap.Col>


                  <ReactBootStrap.Col>
                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={() => { if (instrument.includes("piano")) { instrument.splice(instrument.indexOf("piano"), 1) } else { setInstrument([...instrument, "piano"]); } }}
                    />

                    <span>Piano</span>
                  </label></ReactBootStrap.Col>

                  <ReactBootStrap.Col>
                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={() => { if (instrument.includes("harp")) { instrument.splice(instrument.indexOf("piano"), 1) } else { setInstrument([...instrument, "harp"]); } }}
                    />
                    <span>Harp</span>
                  </label>

                    
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

<ReactBootStrap.Row>
                  <ReactBootStrap.Col>

                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={
                        () => { if (instrument.includes("trumbone")) { instrument.splice(instrument.indexOf("trumbone"), 1) } else { setInstrument([...instrument, "trumbone"]); } }

                      }
                    />
                    <span>Trumbone</span>
                  </label></ReactBootStrap.Col>

                  <ReactBootStrap.Col>

                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={
                        () => { if (instrument.includes("trumpet")) { instrument.splice(instrument.indexOf("trumpet"), 1) } else { setInstrument([...instrument, "trumpet"]); } }
                      }
                    />
                    <span>Trumpet</span>
                  </label></ReactBootStrap.Col>

                  <ReactBootStrap.Col>
                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={() => { if (instrument.includes("bass")) { instrument.splice(instrument.indexOf("bass"), 1) } else { setInstrument([...instrument, "bass"]); } }}
                    />
                    <span>Bass</span>
                  </label>
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col>

                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={() => { if (instrument.includes("singing")) { instrument.splice(instrument.indexOf("singing"), 1) } else { setInstrument([...instrument, "singing"]); } }}
                    />
                    <span>Singing</span>
                  </label></ReactBootStrap.Col>

                  <ReactBootStrap.Col>
                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={() => { if (instrument.includes("saxophone")) { instrument.splice(instrument.indexOf("saxophone"), 1) } else { setInstrument([...instrument, "saxophone"]); } }}
                    />
                    <span>Saxophone</span>
                  </label></ReactBootStrap.Col>

                  <ReactBootStrap.Col>
                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={
                        () => { if (instrument.includes("bassoon")) { instrument.splice(instrument.indexOf("bassoon"), 1); } else { setInstrument([...instrument, "bassoon"]); } }
                      }
                    />
                    <span>Bassoon</span>
                  </label>
                    
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                  

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col>
                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={
                        () => { if (instrument.includes("flute")) { instrument.splice(instrument.indexOf("flute"), 1) } else { setInstrument([...instrument, "flute"]); } }
                      }
                    />
                    <span>Flute</span>
                  </label></ReactBootStrap.Col>

                  <ReactBootStrap.Col>
                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={
                        () => { if (instrument.includes("horn")) { instrument.splice(instrument.indexOf("horn"), 1) } else { setInstrument([...instrument, "horn"]); } }
                      }
                    />
                    <span>Horn</span>
                  </label></ReactBootStrap.Col>

                  <ReactBootStrap.Col>
                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={
                        () => { if (instrument.includes("guitar")) { instrument.splice(instrument.indexOf("guitar"), 1) } else { setInstrument([...instrument, "guitar"]); } }
                      }
                    />
                    <span>Guitar</span>
                  </label>

                    
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                  
                <ReactBootStrap.Row>
                  <ReactBootStrap.Col>

                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={
                        () => { if (instrument.includes("accordion")) { instrument.splice(instrument.indexOf("accordion"), 1) } else { setInstrument([...instrument, "accordion"]); } }
                      }
                    />
                    <span>Accordion</span>
                  </label> </ReactBootStrap.Col>

 <ReactBootStrap.Col>
                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={
                        () => { if (instrument.includes("clarinet")) { instrument.splice(instrument.indexOf("clarinet"), 1) } else { setInstrument([...instrument, "clarinet"]); } }
                      }
                    />
                    <span>Clarinet</span>
                  </label> </ReactBootStrap.Col>

                  <ReactBootStrap.Col>
                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={
                        () => { if (instrument.includes("cello")) { instrument.splice(instrument.indexOf("cello"), 1) } else { setInstrument([...instrument, "cello"]); } }
                      }
                    />
                    <span>Cello</span>
                  </label>

                    
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col>

                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={
                        () => { if (instrument.includes("percussion")) { instrument.splice(instrument.indexOf("percussion"), 1) } else { setInstrument([...instrument, "percussion"]); } }}
                    />
                    <span>Percussion</span>
                  </label> </ReactBootStrap.Col>

                  <ReactBootStrap.Col>
                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={
                        () => { if (instrument.includes("alphorn")) { instrument.splice(instrument.indexOf("alphorn"), 1) } else { setInstrument([...instrument, "alphorn"]); } }}
                    />
                    <span>Alphorn</span>
                  </label> </ReactBootStrap.Col>

                  <ReactBootStrap.Col>
                  <label className='register'>
                    <input
                      className='music_styles'
                      type="checkbox"
                      onChange={
                        () => { if (instrument.includes("viola")) { instrument.splice(instrument.indexOf("viola"), 1) } else { setInstrument([...instrument, "viola-copper"]); } }
                      }
                    />
                    <span>Viola</span>
                  </label>
                    
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                

                <label style={{ marginTop: '10px' }}>
                  <input
                    type="text"
                    id="otherInstruments"
                    placeholder="Other Instruments.."


                  />
                </label>

                </ReactBootStrap.Container>

                <ReactBootStrap.Form.Group style={{ marginBottom: "1px", marginTop:"50px"}}>
                  <ReactBootStrap.Form.Label>
                    <i>Music Styles</i>
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                {/* ########## (MUSIC STYLES) ########## */}

                  <ReactBootStrap.Container>
                <ReactBootStrap.Form.Group >
                  <ReactBootStrap.Form.Label>
                    Classical Styles
                      </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>
               
                <ReactBootStrap.Row>
                  <ReactBootStrap.Col>
                
                  <label className='register'>
                    <input type="checkbox" className='music_styles'
                      onChange={() => { if (style.includes("baroque")) { style.splice(style.indexOf("baroque"), 1) } else { setStyle([...style, "baroque"]); } }}
                    />
                    <span>Baroque</span>
                  </label></ReactBootStrap.Col>

                  <ReactBootStrap.Col>
                  <label className='register'>
                    <input type="checkbox" className='music_styles'
                      onChange={() => { if (style.includes("classic")) { style.splice(style.indexOf("classic"), 1) } else { setStyle([...style, "classic"]); } }}
                    />
                    <span>Classic</span>
                  </label></ReactBootStrap.Col>

                  <ReactBootStrap.Col>
                  <label className='register'>
                    <input type="checkbox" className='music_styles'
                      onChange={() => { if (style.includes("contemporary")) { style.splice(style.indexOf("contemporary"), 1) } else { setStyle([...style, "contemporary"]); } }}
                    />
                    <span>Contemp</span>
                  </label>                    
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col>

                  <label className='register'>
                    <input type="checkbox" className='music_styles'
                      onChange={() => { if (style.includes("lied")) { style.splice(style.indexOf("lied"), 1) } else { setStyle([...style, "lied"]); } }}
                    />
                    <span>Lied</span>
                  </label> </ReactBootStrap.Col>

                  <ReactBootStrap.Col>
                  <label className='register'>
                    <input type="checkbox" className='music_styles'
                      onChange={() => { if (style.includes("romantic")) { style.splice(style.indexOf("romantic"), 1) } else { setStyle([...style, "romantic"]); } }}
                    />
                    <span>Romantic</span>
                  </label> </ReactBootStrap.Col>
                  
                  <ReactBootStrap.Col>

                  <label className='register'>
                    <input type="checkbox" className='music_styles'
                      onChange={() => { if (style.includes("Sacred")) { style.splice(style.indexOf("Sacred"), 1) } else { setStyle([...style, "Sacred"]); } }}
                    />
                    <span>Sacred</span>
                  </label>
                    
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>
                </ReactBootStrap.Container>

                <ReactBootStrap.Container>
                  <ReactBootStrap.Form.Group style={{marginTop:"20px"}}>
                    <ReactBootStrap.Form.Label>
                      Popular Styles
                      </ReactBootStrap.Form.Label>
                  </ReactBootStrap.Form.Group>
                  <ReactBootStrap.Row>
                    <ReactBootStrap.Col>

                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("songwriter")) { style.splice(style.indexOf("songwriter"), 1) } else { setStyle([...style, "songwriter"]); } }}
                        />
                        <span>Songwriter</span>
                      </label></ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("blues")) { style.splice(style.indexOf("blues"), 1) } else { setStyle([...style, "blues"]); } }}
                        />
                        <span>Blues</span>
                      </label></ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("brass-band")) { style.splice(style.indexOf("brass-band"), 1) } else { setStyle([...style, "brass-band"]); } }}
                        />
                        <span>Brass Band</span>
                      </label>

                    </ReactBootStrap.Col>
                  </ReactBootStrap.Row>

                  <ReactBootStrap.Row>
                    <ReactBootStrap.Col>


                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("country")) { style.splice(style.indexOf("country"), 1) } else { setStyle([...style, "country"]); } }}
                        />
                        <span>Country</span>
                      </label></ReactBootStrap.Col>

                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("fado")) { style.splice(style.indexOf("fado"), 1) } else { setStyle([...style, "fado"]); } }}
                        />
                        <span>Fado</span>
                      </label>
                    </ReactBootStrap.Col>

                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("fanfare")) { style.splice(style.indexOf("fanfare"), 1) } else { setStyle([...style, "fanfare"]); } }}
                        />
                        <span>Fanfare</span>
                      </label>
                    </ReactBootStrap.Col>
                  </ReactBootStrap.Row>

                  <ReactBootStrap.Row>
                    <ReactBootStrap.Col>


                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("flamenco")) { style.splice(style.indexOf("flamenco"), 1) } else { setStyle([...style, "flamenco"]); } }}
                        />
                        <span>Flamenco</span>
                      </label></ReactBootStrap.Col>

                    <ReactBootStrap.Col>

                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("folk")) { style.splice(style.indexOf("folk"), 1) } else { setStyle([...style, "folk"]); } }}
                        />
                        <span>Folk</span>
                      </label></ReactBootStrap.Col>

                    <ReactBootStrap.Col>

                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("swiss-folk")) { style.splice(style.indexOf("swiss-folk"), 1) } else { setStyle([...style, "swiss-folk"]); } }}
                        />
                        <span>Swiss Folk</span>
                      </label>

                    </ReactBootStrap.Col>
                  </ReactBootStrap.Row>

                  <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("musical-comedy")) { style.splice(style.indexOf("musical-comedy"), 1) } else { setStyle([...style, "musical-comedy"]); } }}
                        />
                        <span>Musical Comedy</span>
                      </label>
                    </ReactBootStrap.Col>
                  </ReactBootStrap.Row>

                </ReactBootStrap.Container>

                <ReactBootStrap.Container className='styles'>
                  <ReactBootStrap.Form.Group >
                    <ReactBootStrap.Form.Label>
                      Popular Styles
                      </ReactBootStrap.Form.Label>
                  </ReactBootStrap.Form.Group>
                  <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("french")) { style.splice(style.indexOf("french"), 1) } else { setStyle([...style, "french"]); } }}
                        />
                        <span>French</span>
                      </label></ReactBootStrap.Col>

                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("irish")) { style.splice(style.indexOf("irish"), 1) } else { setStyle([...style, "irish"]); } }}
                        />
                        <span>Irish</span>
                      </label></ReactBootStrap.Col>

                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("italian")) { style.splice(style.indexOf("italian"), 1) } else { setStyle([...style, "italian"]); } }}
                        />
                        <span>Italian</span>
                      </label></ReactBootStrap.Col></ReactBootStrap.Row>

                  <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("klezmer")) { style.splice(style.indexOf("klezmer"), 1) } else { setStyle([...style, "klezmer"]); } }}
                        />
                        <span>Klezmer</span>
                      </label></ReactBootStrap.Col>

                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("mariachi")) { style.splice(style.indexOf("mariachi"), 1) } else { setStyle([...style, "mariachi"]); } }}
                        />
                        <span>Mariachi</span>
                      </label></ReactBootStrap.Col>

                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("popular")) { style.splice(style.indexOf("popular"), 1) } else { setStyle([...style, "popular"]); } }}
                        />
                        <span>Popular</span>
                      </label></ReactBootStrap.Col></ReactBootStrap.Row>

                  <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("rock")) { style.splice(style.indexOf("rock"), 1) } else { setStyle([...style, "rock"]); } }}
                        />
                        <span>Rock</span>
                      </label></ReactBootStrap.Col>

                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("salsa")) { style.splice(style.indexOf("salsa"), 1) } else { setStyle([...style, "salsa"]); } }}
                        />
                        <span>Salsa</span>
                      </label></ReactBootStrap.Col>

                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("tango")) { style.splice(style.indexOf("tango"), 1) } else { setStyle([...style, "tango"]); } }}
                        />
                        <span>Tango</span>
                      </label></ReactBootStrap.Col></ReactBootStrap.Row>

                  <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("world-music")) { style.splice(style.indexOf("world-music"), 1) } else { setStyle([...style, "world-music"]); } }}
                        />
                        <span>World Music</span>
                      </label></ReactBootStrap.Col>
                  </ReactBootStrap.Row>
                </ReactBootStrap.Container>



                <ReactBootStrap.Container className='styles' >
                  <ReactBootStrap.Form.Group >
                    <ReactBootStrap.Form.Label>
                      Jazz Styles
                      </ReactBootStrap.Form.Label>
                  </ReactBootStrap.Form.Group>
                  <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("affro-jazz")) { style.splice(style.indexOf("affro-jazz"), 1) } else { setStyle([...style, "affro-jazz"]); } }}
                        />
                        <span>Afro Jazz</span>
                      </label>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("be-bop")) { style.splice(style.indexOf("be-bop"), 1) } else { setStyle([...style, "be-bop"]); } }}
                        />
                        <span>Be-Bop</span>
                      </label>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>                        <label className='register'>
                      <input type="checkbox" className='music_styles'
                        onChange={() => { if (style.includes("bossanova")) { style.splice(style.indexOf("bossanova"), 1) } else { setStyle([...style, "bossanova"]); } }}
                      />
                      <span>Bossanova</span>
                    </label>
                    </ReactBootStrap.Col>
                  </ReactBootStrap.Row>

                  <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("free-jazz")) { style.splice(style.indexOf("free-jazz"), 1) } else { setStyle([...style, "free-jazz"]); } }}
                        />
                        <span>Free Jazz</span>
                      </label></ReactBootStrap.Col>

                    <ReactBootStrap.Col>                      <label className='register'>
                      <input type="checkbox" className='music_styles'
                        onChange={() => { if (style.includes("funk")) { style.splice(style.indexOf("funk"), 1) } else { setStyle([...style, "funk"]); } }} />
                      <span>Funk</span>
                    </label></ReactBootStrap.Col>

                    <ReactBootStrap.Col>                      <label className='register'>
                      <input type="checkbox" className='music_styles'
                        onChange={() => { if (style.includes("gospel")) { style.splice(style.indexOf("gospel"), 1) } else { setStyle([...style, "gospel"]); } }} />
                      <span>Gospel</span>
                    </label></ReactBootStrap.Col> </ReactBootStrap.Row>


                  <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("jazz")) { style.splice(style.indexOf("jazz"), 1) } else { setStyle([...style, "jazz"]); } }} />
                        <span>Jazz</span>
                      </label></ReactBootStrap.Col>

                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("latin-jazz")) { style.splice(style.indexOf("latin-jazz"), 1) } else { setStyle([...style, "latin-jazz"]); } }} />
                        <span>Latin Jazz</span>
                      </label></ReactBootStrap.Col>

                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("manouche")) { style.splice(style.indexOf("manouche"), 1) } else { setStyle([...style, "manouche"]); } }} />
                        <span>Manouche</span>
                      </label>
                    </ReactBootStrap.Col> </ReactBootStrap.Row>

                  <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("r-n-b")) { style.splice(style.indexOf("r-n-b"), 1) } else { setStyle([...style, "r-n-b"]); } }} />
                        <span>R'n'B</span>
                      </label> </ReactBootStrap.Col>


                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("salsa")) { style.splice(style.indexOf("salsa"), 1) } else { setStyle([...style, "salsa"]); } }} />
                        <span>Salsa</span>
                      </label></ReactBootStrap.Col>


                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("drunk")) { style.splice(style.indexOf("drunk"), 1) } else { setStyle([...style, "drunk"]); } }} />
                        <span>Drunk</span>
                      </label></ReactBootStrap.Col></ReactBootStrap.Row>

                  <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("swing")) { style.splice(style.indexOf("swing"), 1) } else { setStyle([...style, "swing"]); } }} />
                        <span>Swing</span>
                      </label></ReactBootStrap.Col>

                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("traditional")) { style.splice(style.indexOf("traditional"), 1) } else { setStyle([...style, "traditional"]); } }} />
                        <span>Traditional</span>
                      </label></ReactBootStrap.Col>

                    <ReactBootStrap.Col>
                      <label className='register'>
                        <input type="checkbox" className='music_styles'
                          onChange={() => { if (style.includes("new-orleans")) { style.splice(style.indexOf("new-orleans"), 1) } else { setStyle([...style, "new-orleans"]); } }} />
                        <span>New Orleans</span>
                      </label></ReactBootStrap.Col>
                  </ReactBootStrap.Row>
                </ReactBootStrap.Container >


                <ReactBootStrap.Form.Group
                  style={{marginTop:"50px"}}>
                  <ReactBootStrap.Form.Label>
                    <i>You Play In?</i>
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                {/* ########## (SOLO / DUO) ########## */}

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col md='auto'>
                    <div>
                      <label className='register'>
                        <input
                          className='music_styles'
                          type="checkbox"
                          onChange={(e) => {
                            setGroup("solo");
                          }}
                        />
                        <span>Solo</span>
                      </label>
                    </div>
                  </ReactBootStrap.Col>
                  <ReactBootStrap.Col md='auto'>
                    <div>
                      <label className='register'>
                        <input
                          className='music_styles'
                          type="checkbox"
                          onChange={(e) => {
                            setGroup("duet");
                          }}
                        />
                        <span>Duet</span>
                      </label>
                    </div>
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Form.Group style={{marginTop:"50px"}}>
                  <ReactBootStrap.Form.Label>
                    <i>Media</i>
                  </ReactBootStrap.Form.Label>
                  <h4>Please send us links where we will have the possibility to hear you playing, in order to have an idea of your style</h4>

                  {/* ########## (MEDIA) ########## */}

                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="Website"
                    onChange={(e) => {
                      setSite(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Group>
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="YouTube/Drive/Dropbox Link"
                    onChange={(e) => {
                      setMedia(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group>
                  <ReactBootStrap.Form.Label id="font">
                    Availability
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group >
                  <ReactBootStrap.Form.Label>
                    <ul>
                      <li>Click on individual slots or click and drag to select multiple slots.</li>
                      <li>Click on selected slots to deselect them.</li>
                      <li>Click on Save Calender before clicking register.</li>
                    </ul>
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>
              </ReactBootStrap.Col>
            </ReactBootStrap.Row>
          </ReactBootStrap.Container>

          {/* ##################AVAILABLITY############################ */}


{/* #####This section is for the calender on the musician registration page####### */}
<MediaQuery orientation={"landscape"}>
<div className='calender'>

<ScheduleSelector
  selection={state.schedule}
  numDays={7}
  minTime={9}
  maxTime={21}
  hourlyChunks={2}
  startDate={new Date('Monday Nov 02 2020 00:00:00')}
  dateFormat="ddd"
  timeFormat='h:mma'
  hoveredColor='none'
  onChange={handleChange}
  hoveredColor='#4d6b0f'
  unselectedColor='#81A92F'
  selectedColor='#4d6b0f'
/>
</div>

</MediaQuery>
<MediaQuery orientation={"portrait"}>
<div className='calender'>

<ScheduleSelector
  selection={state.schedule}
  numDays={7}
  minTime={9}
  maxTime={21}
  hourlyChunks={2}
  startDate={new Date('Monday Nov 02 2020 00:00:00')}
  dateFormat="ddd"
  timeFormat='h:mma'
  hoveredColor='none'
  onChange={handleChange}
  unselectedColor='#81A92F'
  selectedColor='#4d6b0f'
/>
</div>
</MediaQuery>

          
          <ReactBootStrap.Row className="justify-buttons">
            <input type="button" value="Save Schedule" className="cal_button" onClick={seperate} />
            {/* <a href="/#/"><input style={{marginLeft:"20px"}} type="button" value="Submit Form" className="sub_button" onClick={submitMusician} id="regedit"/></a> */}
            <input style={{marginLeft:"20px"}} type="button" value="Submit Form" className="sub_button" onClick={(e) => {submitMusician(); musicianRegisterModal() }} id="regedit"/>


          </ReactBootStrap.Row>

        </ReactBootStrap.Form>
        </div>

        <div id="registerModal" class="registerModal">
        <div class="registerModal-content">
          <span class="close" onClick={closeModal}>&times;</span>
          <p class="registerModalText">Account succesfully registered. Login with your email and password.</p>
        </div>
      </div>

    </ReactBootStrap.Container>
  );
}

export default MusicianRegister;