import React, { Component, useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import ScheduleSelector from 'react-schedule-selector';
import Axios from "axios";
import "./MusicianRegister.css";
import "mdbreact/dist/css/mdb.css";

function MusicianRegister() {
  function ShowTextArea() {
    var textArea = document.getElementById("myDIV");
    textArea.style.display = "block";
  }

  function HideTextArea() {
    var textArea = document.getElementById("myDIV");
    textArea.style.display = "none";
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [phone, setPhone] = useState("");
  const [iban, setIban] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [training, setTraining] = useState("");
  const [othertraining, setOtherTraining] = useState("");
  const [instrument, setInstrument] = useState("");
  const [style, setStyle] = useState("");
  const [group, setGroup] = useState("");
  const [site, setSite] = useState("");
  const [media, setMedia] = useState("");

  const submitMusician = () => {
    Axios.post("http://localhost:5000/musician/insert", {
      musicianFirstName: firstName,
      musicianLastName: lastName,
      musicianAddress: address,
      musicianPostalCode: postalCode,
      musicianCity: city,
      musicianProvince: province,
      musicianPhone: phone,
      musicianIban: iban,
      musicianEmail: email,
      musicianPassword: password,
      musicianConfirmPassword: confirmpassword,
      musicianTraining: training,
      musicianOtherTraining: othertraining,
      musicianInstrument: instrument,
      musicianStyle: style,
      musicianGroup: group,
      musicianSite: site,
      musicianMedia: media,
    }).then(() => {
      alert("sucessful insert");
    });
  };



  return (
    <ReactBootStrap.Container className="top-space">
      <div className="bg-display-reg">
        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col>
            <h1 class="info">Register to Become a Musician!</h1>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Form>
          <ReactBootStrap.Container>
            <ReactBootStrap.Row>
              <ReactBootStrap.Col md={{ span: 8, offset: 2 }}>
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
                    placeholder="last Name"
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

                <ReactBootStrap.Form.Group >
                  <ReactBootStrap.Form.Label id="font">
                    Banking Information
                  </ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="IBAN"
                    onChange={(e) => {
                      setIban(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group >
                  <ReactBootStrap.Form.Label id="font">
                    Account Information
                  </ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="E-mail"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group >
                  <ReactBootStrap.Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group >
                  <ReactBootStrap.Form.Label id="font">
                    Musical Training(s)
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col md={{ span: 4 }}>
                    <div >
                    
                       <label for = 'master'>
                        <input type="radio" id='master' name="groupOfDefaultRadios"onClick={
                          (HideTextArea,
                          (e) => {
                            setTraining("Bachelor"); ;HideTextArea()
                          })
                        } />
                        <span>Master</span>
                      </label>
                      
                    </div>

                    <div >
                 
                    <label for = 'inschool'>
                        <input type="radio" id='inschool' name="groupOfDefaultRadios"onClick={
                          (HideTextArea,
                          (e) => {
                            setTraining("Bachelor"); ;HideTextArea()
                          })
                        } />
                        <span>Currently in School</span>
                      </label>

                    </div>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col md={{ span: 6 }}>
                    <div>
                        <label for = 'bachelor'>
                        <input type="radio" id='bachelor' name="groupOfDefaultRadios" onClick={
                          (HideTextArea,
                          (e) => {
                            setTraining("Bachelor"); ;HideTextArea()
                          })
                        } />
                        <span>Bachelor</span>
                      </label>
                    </div>
                    <div >
                     
                      <label for = 'Other'>
                        <input type="radio" id='Other' name="groupOfDefaultRadios"  onClick={ShowTextArea} />
                        <span>Other</span>
                      </label>
                    </div>
                    <div
                      class="form-group shadow-textarea"
                      id="myDIV"
                      onLoad={HideTextArea}
                    >
                      <label for="exampleFormControlTextarea6"></label>
                      <textarea
                        class="form-control z-depth-1"
                        id="exampleFormControlTextarea6"
                        rows="5"
                        placeholder="Other Qualifications..."
                        onChange={(e) => {
                          setOtherTraining(e.target.value);
                        }}
                      ></textarea>
                    </div>
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Form.Group >
                  <ReactBootStrap.Form.Label id="font">
                    Professional Information
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group
                   style={{ marginBottom: "1px" }}
                >
                  <ReactBootStrap.Form.Label>
                    <i>Instruments</i>
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <div >
                     
                      <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("voice");
                        }} />
                        <span>Voice</span>
                      </label>
                    </div>

                    <div >
                      <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("piano");
                        }}/>
                        <span>Piano</span>
                      </label>
                    
                    </div>
                    <div >
                    
                       <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("harp");
                        }}/>
                        <span>Harp</span>
                      </label>
                    </div>
                    <div >
                    
                       <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("trumbone");
                        }}/>
                        <span>Trumbone</span>
                      </label>
                    </div>
                    <div >
                   
                       <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("trumpet");
                        }}/>
                        <span>Trumpet</span>
                      </label>
                    </div>
                    <div >
                      
                       <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("bass");
                        }}/>
                        <span>Bass</span>
                      </label>
                    </div>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <div>
                     
                        <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("singing");
                        }}/>
                        <span>Singing</span>
                      </label>
                    </div>
                    <div >
                      
                        <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("saxophone");
                        }}/>
                        <span>Saxophone</span>
                      </label>
                    </div>
                    <div >
                    
                        <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("viola-copper");
                        }}/>
                        <span>Viola-Copper</span>
                      </label>
                    </div>
                    <div >
                
                        <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("bassoon");
                        }}/>
                        <span>Bassoon</span>
                      </label>
                    </div>
                    <div >
                   
                        <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("flute");
                        }}/>
                        <span>Flute</span>
                      </label>
                    </div>
                    <div >
                   
                      <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("horn");
                        }}/>
                        <span>Horn</span>
                      </label>
                      </div>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <div>
                   
                        <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("guitar");
                        }}/>
                        <span>Guitar</span>
                      </label>
                    </div>
                    <div >
                     
                        <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("accordion");
                        }}/>
                        <span>Accordion</span>
                      </label>
                    </div>
                    <div >
                   
                        <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("clarinet");
                        }}/>
                        <span>Clarinet</span>
                      </label>
                    </div>
                    <div >
                  
                        <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("cello");
                        }}/>
                        <span>Cello</span>
                      </label>
                    </div>
                    <div >
                 
                        <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("percussion");
                        }}/>
                        <span>Percussion</span>
                      </label>
                    </div>
                    <div >
                 
                        <label>
                        <input type="checkbox"  onChange={(e) => {
                          setInstrument("alphorn");
                        }}/>
                        <span>Alphorn</span>
                      </label>
                    </div>
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Form.Group
            
                  style={{ marginBottom: "40px", marginTop: "15px" }}>
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="Other Instrument"
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group
                  
                  style={{ marginBottom: "1px" }}
                >
                  <ReactBootStrap.Form.Label>
                    <i>Music Styles</i>
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <ReactBootStrap.Form.Group >
                      <ReactBootStrap.Form.Label>
                        Classical Styles
                      </ReactBootStrap.Form.Label>
                    </ReactBootStrap.Form.Group>
                    <div >
                     
                      <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("baroque");
                        }}/>
                        <span>Baroque</span>
                      </label>
                    </div>

                    <div>
                   
                      <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("classic");
                        }}/>
                        <span>Classic</span>
                      </label>
                    </div>
                    <div>
                     
                      <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("contemporary");
                        }}/>
                        <span>Contemporary</span>
                      </label>
                    </div>
                    <div>
                    
                      <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("lied");
                        }}/>
                        <span>Lied</span>
                      </label>

                    </div>
                    <div >
                     
                         <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("opera");
                        }}/>
                        <span>Lied</span>
                      </label>
                    </div>
                    <div >                      
                         <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("romantic");
                        }}/>
                        <span>Romantic</span>
                      </label>
                    </div>

                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("sacred");
                        }}/>
                        <span>Sacred</span>
                      </label>
                    </div>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <ReactBootStrap.Form.Group >
                      <ReactBootStrap.Form.Label>
                        Popular Styles
                      </ReactBootStrap.Form.Label>
                    </ReactBootStrap.Form.Group>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("songwriter");
                        }}/>
                        <span>Songwriter</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("blues");
                        }}/>
                        <span>Blues</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("brass band");
                        }}/>
                        <span>Brass Band</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("musical comedy");
                        }}/>
                        <span>Musical Comedy</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("country");
                        }}/>
                        <span>Country</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("fado");
                        }}/>
                        <span>Fado</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("fanfare");
                        }}/>
                        <span>Fanfare</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("flamenco");
                        }}/>
                        <span>Flamenco</span>
                      </label>
                    </div>

                    <div>                      
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("folk");
                        }}/>
                        <span>Folk</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("swiss folk");
                        }}/>
                        <span>Swiss Folk</span>
                      </label>
                    </div>
                    

                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col >
                    <ReactBootStrap.Form.Group >
                      <ReactBootStrap.Form.Label>
                        Popular Styles
                      </ReactBootStrap.Form.Label>
                    </ReactBootStrap.Form.Group>

                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("french");
                        }}/>
                        <span>French</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("irish");
                        }}/>
                        <span>Irish</span>
                      </label>
                    </div>
                
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("italian");
                        }}/>
                        <span>Italian</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("klezmer");
                        }}/>
                        <span>Klezmer</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("mariachi");
                        }}/>
                        <span>Mariachi</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("popular");
                        }}/>
                        <span>Popular</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("rock");
                        }}/>
                        <span>Rock</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("salsa");
                        }}/>
                        <span>Salsa</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("tango");
                        }}/>
                        <span>Tango</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("world music");
                        }}/>
                        <span>World Music</span>
                      </label>
                    </div>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <ReactBootStrap.Form.Group >
                      <ReactBootStrap.Form.Label>
                        Jazz Styles
                      </ReactBootStrap.Form.Label>
                    </ReactBootStrap.Form.Group>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("afro jazz");
                        }}/>
                        <span>Afro Jazz</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("songwriter");
                        }}/>
                        <span>Song Writer</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("be-bop");
                        }}/>
                        <span>Be-Bop</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("bossanova");
                        }}/>
                        <span>Bossanova</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("contemporary");
                        }}/>
                        <span>Contemporary</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("free jazz");
                        }}/>
                        <span>Free Jazz</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("funk");
                        }}/>
                        <span>Funk</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("gospel");
                        }}/>
                        <span>Gospel</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("jazz");
                        }}/>
                        <span>Jazz</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("latin jazz");
                        }}/>
                        <span>Latin Jazz</span>
                      </label>
                    </div>
                   

                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("manouche");
                        }}/>
                        <span>Manouche</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("new orleans");
                        }}/>
                        <span>New Orleans</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("r'n'b");
                        }}/>
                        <span>R'n'B</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("salsa");
                        }}/>
                        <span>Salsa</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("drunk");
                        }}/>
                        <span>Drunk</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("swing");
                        }}/>
                        <span>Swing</span>
                      </label>
                    </div>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setStyle("traditional");
                        }}/>
                        <span>Traditional</span>
                      </label>
                    </div>
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Form.Group
                      style={{ marginBottom: "1px", marginTop: "15px" }}>
                      <ReactBootStrap.Form.Label>
                        <i>You Play In?</i>
                      </ReactBootStrap.Form.Label>
                    </ReactBootStrap.Form.Group>

                <ReactBootStrap.Row>
                  
                  <ReactBootStrap.Col md={{ span: 1 }}>                                    
                     <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setGroup("solo");
                        }}/>
                        <span>Solo</span>
                      </label>
                    </div>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col>
                    <div>
                    <label>
                        <input type="checkbox"  onChange={(e) => {
                          setGroup("duet");
                        }}/>
                        <span>Duet</span>
                      </label>
                    </div>

                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Form.Group >
                  <ReactBootStrap.Form.Label>
                    <i>Media</i>
                  </ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="Website"
                    onChange={(e) => {
                      setSite(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Group >
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="YouTube/Drive/Dropbox Link"
                    onChange={(e) => {
                      setMedia(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Button
                  variant="primary"
                  size="md"
                  href="/#/faq"
                  onClick={submitMusician}
                >
                  Register
                </ReactBootStrap.Button>

                <ReactBootStrap.Button
                  variant="primary"
                  size="md"
                  href="/#/calender"
                   >
                  Calender
                </ReactBootStrap.Button>

              </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row>
              <ReactBootStrap.Col></ReactBootStrap.Col>
            </ReactBootStrap.Row>
          </ReactBootStrap.Container>
        </ReactBootStrap.Form>
      </div>

   

    </ReactBootStrap.Container>
  );
}

export default MusicianRegister;
