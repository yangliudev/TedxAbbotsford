import React, { Component, useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
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
      <div className="bg-display">
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

                <ReactBootStrap.Form.Group controlId="formGridfname">
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

                <ReactBootStrap.Form.Group controlId="formGridfname">
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

                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Label id="font">
                    Musical Training(s)
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col md={{ span: 4 }}>
                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        class="custom-control-input"
                        id="defaultGroupExample1"
                        name="groupOfDefaultRadios"
                        onClick={
                          (HideTextArea,
                          (e) => {
                            setTraining("master");
                          })
                        }
                      />
                      <label
                        class="custom-control-label"
                        for="defaultGroupExample1"
                      >
                        Master
                      </label>
                    </div>

                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        class="custom-control-input"
                        id="defaultGroupExample2"
                        name="groupOfDefaultRadios"
                        onClick={
                          (HideTextArea,
                          (e) => {
                            setTraining("in school");
                          })
                        }
                      />
                      <label
                        class="custom-control-label"
                        for="defaultGroupExample2"
                      >
                        Currently in School
                      </label>
                    </div>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col md={{ span: 6 }}>
                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        class="custom-control-input"
                        id="defaultGroupExample3"
                        name="groupOfDefaultRadios"
                        onClick={
                          (HideTextArea,
                          (e) => {
                            setTraining("Bachelor");
                          })
                        }
                      />
                      <label
                        class="custom-control-label"
                        for="defaultGroupExample3"
                      >
                        Bachelor
                      </label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input
                        type="radio"
                        class="custom-control-input"
                        id="defaultGroupExample4"
                        name="groupOfDefaultRadios"
                        onClick={ShowTextArea}
                      />
                      <label
                        class="custom-control-label"
                        for="defaultGroupExample4"
                      >
                        Other
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

                <ReactBootStrap.Form.Group controlId="formGridfname">
                  <ReactBootStrap.Form.Label id="font">
                    Professional Information
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group
                  controlId="formGridlname"
                  style={{ marginBottom: "1px" }}
                >
                  <ReactBootStrap.Form.Label>
                    <i>Instruments</i>
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style0"
                        onChange={(e) => {
                          setInstrument("voice");
                        }}
                      />
                      <label class="custom-control-label" for="style0">
                        Voice
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style1"
                        onChange={(e) => {
                          setInstrument("piano");
                        }}
                      />
                      <label class="custom-control-label" for="style1">
                        Piano
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style2"
                        onChange={(e) => {
                          setInstrument("harp");
                        }}
                      />
                      <label class="custom-control-label" for="style2">
                        Harp
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style2"
                      />
                      <label class="custom-control-label" for="style2">
                        Trumbone
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style2"
                      />
                      <label class="custom-control-label" for="style2">
                        Trumpet
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style2"
                      />
                      <label class="custom-control-label" for="style2">
                        Bass
                      </label>
                    </div>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style0"
                      />
                      <label class="custom-control-label" for="style0">
                        Singing
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style1"
                      />
                      <label class="custom-control-label" for="style1">
                        Saxophone
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style2"
                      />
                      <label class="custom-control-label" for="style2">
                        Viola-Copper
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style2"
                      />
                      <label class="custom-control-label" for="style2">
                        Bassoon
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style2"
                      />
                      <label class="custom-control-label" for="style2">
                        Flute
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style2"
                      />
                      <label class="custom-control-label" for="style2">
                        Horn
                      </label>
                    </div>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style0"
                      />
                      <label class="custom-control-label" for="style0">
                        Guitar
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style1"
                      />
                      <label class="custom-control-label" for="style1">
                        Accordion
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style2"
                      />
                      <label class="custom-control-label" for="style2">
                        Clarinet
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style2"
                      />
                      <label class="custom-control-label" for="style2">
                        Cello
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style2"
                      />
                      <label class="custom-control-label" for="style2">
                        Purcussion
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style2"
                      />
                      <label class="custom-control-label" for="style2">
                        Alphorn
                      </label>
                    </div>
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Form.Group
                  controlId="formGridlname"
                  style={{ marginBottom: "40px", marginTop: "15px" }}
                >
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="Other Instrument"
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group
                  controlId="formGridlname"
                  style={{ marginBottom: "1px" }}
                >
                  <ReactBootStrap.Form.Label>
                    <i>Music Styles</i>
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <ReactBootStrap.Form.Group controlId="formGridlname">
                      <ReactBootStrap.Form.Label>
                        Classical Styles
                      </ReactBootStrap.Form.Label>
                    </ReactBootStrap.Form.Group>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style0"
                        onChange={(e) => {
                          setStyle("baroque");
                        }}
                      />
                      <label class="custom-control-label" for="style0">
                        Baroque
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style1"
                        onChange={(e) => {
                          setStyle("classic");
                        }}
                      />
                      <label class="custom-control-label" for="style1">
                        Classic
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style2"
                        onChange={(e) => {
                          setStyle("contemporary");
                        }}
                      />
                      <label class="custom-control-label" for="style2">
                        Contemporary
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style3"
                        onChange={(e) => {
                          setStyle("lied");
                        }}
                      />
                      <label class="custom-control-label" for="style3">
                        Lied
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style4"
                        onChange={(e) => {
                          setStyle("opera");
                        }}
                      />
                      <label class="custom-control-label" for="style4">
                        Opera
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style5"
                        onChange={(e) => {
                          setStyle("romantic");
                        }}
                      />
                      <label class="custom-control-label" for="style5">
                        Romantic
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style6"
                        onChange={(e) => {
                          setStyle("sacred");
                        }}
                      />
                      <label class="custom-control-label" for="style6">
                        Sacred
                      </label>
                    </div>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <ReactBootStrap.Form.Group controlId="formGridlname">
                      <ReactBootStrap.Form.Label>
                        Popular Styles
                      </ReactBootStrap.Form.Label>
                    </ReactBootStrap.Form.Group>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style7"
                        onChange={(e) => {
                          setStyle("songwriter");
                        }}
                      />
                      <label class="custom-control-label" for="style7">
                        Songwriter
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style8"
                        onChange={(e) => {
                          setStyle("blues");
                        }}
                      />
                      <label class="custom-control-label" for="style8">
                        Blues
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style9"
                        onChange={(e) => {
                          setStyle("brass band");
                        }}
                      />
                      <label class="custom-control-label" for="style9">
                        Brass band
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style10"
                        onChange={(e) => {
                          setStyle("musical comedy");
                        }}
                      />
                      <label class="custom-control-label" for="style10">
                        Musical comedy
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style11"
                        onChange={(e) => {
                          setStyle("country");
                        }}
                      />
                      <label class="custom-control-label" for="style11">
                        Country
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style12"
                        onChange={(e) => {
                          setStyle("fado");
                        }}
                      />
                      <label class="custom-control-label" for="style12">
                        Fado
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style13"
                        onChange={(e) => {
                          setStyle("fanfare");
                        }}
                      />
                      <label class="custom-control-label" for="style13">
                        Fanfare
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style14"
                        onChange={(e) => {
                          setStyle("flamenco");
                        }}
                      />
                      <label class="custom-control-label" for="style14">
                        Flamenco
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style15"
                        onChange={(e) => {
                          setStyle("folk");
                        }}
                      />
                      <label class="custom-control-label" for="style15">
                        Folk
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style16"
                        onChange={(e) => {
                          setStyle("swiss folk");
                        }}
                      />
                      <label class="custom-control-label" for="style16">
                        Swiss Folk{" "}
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style17"
                        onChange={(e) => {
                          setStyle("french");
                        }}
                      />
                      <label class="custom-control-label" for="style17">
                        French
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style18"
                        onChange={(e) => {
                          setStyle("irish");
                        }}
                      />
                      <label class="custom-control-label" for="style18">
                        Irish
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style19"
                        onChange={(e) => {
                          setStyle("italian");
                        }}
                      />
                      <label class="custom-control-label" for="style19">
                        Italian
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style20"
                        onChange={(e) => {
                          setStyle("klezmer");
                        }}
                      />
                      <label class="custom-control-label" for="style20">
                        Klezmer
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style21"
                        onChange={(e) => {
                          setStyle("mariachi");
                        }}
                      />
                      <label class="custom-control-label" for="style21">
                        Mariachi
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style22"
                        onChange={(e) => {
                          setStyle("popular");
                        }}
                      />
                      <label class="custom-control-label" for="style22">
                        Popular
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style23"
                        onChange={(e) => {
                          setStyle("rock");
                        }}
                      />
                      <label class="custom-control-label" for="style23">
                        Rock
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style24"
                        onChange={(e) => {
                          setStyle("salsa");
                        }}
                      />
                      <label class="custom-control-label" for="style24">
                        Salsa
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style25"
                        onChange={(e) => {
                          setStyle("tango");
                        }}
                      />
                      <label class="custom-control-label" for="style25">
                        Tango
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style26"
                        onChange={(e) => {
                          setStyle("world music");
                        }}
                      />
                      <label class="custom-control-label" for="style26">
                        World Music
                      </label>
                    </div>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <ReactBootStrap.Form.Group controlId="formGridlname">
                      <ReactBootStrap.Form.Label>
                        Jazz Styles
                      </ReactBootStrap.Form.Label>
                    </ReactBootStrap.Form.Group>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style27"
                        onChange={(e) => {
                          setStyle("afro jazz");
                        }}
                      />
                      <label class="custom-control-label" for="style27">
                        Afro Jazz
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style28"
                        onChange={(e) => {
                          setStyle("songwriter");
                        }}
                      />
                      <label class="custom-control-label" for="style28">
                        Songwriter
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style29"
                        onChange={(e) => {
                          setStyle("be-bop");
                        }}
                      />
                      <label class="custom-control-label" for="style29">
                        Be-Bop
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style30"
                        onChange={(e) => {
                          setStyle("bossanova");
                        }}
                      />
                      <label class="custom-control-label" for="style30">
                        Bossanova
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style31"
                        onChange={(e) => {
                          setStyle("contemporary");
                        }}
                      />
                      <label class="custom-control-label" for="style31">
                        Contemporary
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style32"
                        onChange={(e) => {
                          setStyle("free jazz");
                        }}
                      />
                      <label class="custom-control-label" for="style32">
                        Free Jazz
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style33"
                        onChange={(e) => {
                          setStyle("funk");
                        }}
                      />
                      <label class="custom-control-label" for="style33">
                        Funk
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style34"
                        onChange={(e) => {
                          setStyle("gospel");
                        }}
                      />
                      <label class="custom-control-label" for="style34">
                        Gospel
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style35"
                        onChange={(e) => {
                          setStyle("jazz");
                        }}
                      />
                      <label class="custom-control-label" for="style35">
                        Jazz
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style36"
                        onChange={(e) => {
                          setStyle("latic jaz");
                        }}
                      />
                      <label class="custom-control-label" for="style36">
                        Latin Jazz{" "}
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style37"
                        onChange={(e) => {
                          setStyle("manouche");
                        }}
                      />
                      <label class="custom-control-label" for="style37">
                        Manouche
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style38"
                        onChange={(e) => {
                          setStyle("new orleans");
                        }}
                      />
                      <label class="custom-control-label" for="style38">
                        New Orleans
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style39"
                        onChange={(e) => {
                          setStyle("R'n'B");
                        }}
                      />
                      <label class="custom-control-label" for="style39">
                        R'n'B
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style40"
                        onChange={(e) => {
                          setStyle("salsa");
                        }}
                      />
                      <label class="custom-control-label" for="style40">
                        Salsa
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style41"
                        onChange={(e) => {
                          setStyle("drunk");
                        }}
                      />
                      <label class="custom-control-label" for="style41">
                        Drunk
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style42"
                        onChange={(e) => {
                          setStyle("swing");
                        }}
                      />
                      <label class="custom-control-label" for="style42">
                        Swing
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="style43"
                        onChange={(e) => {
                          setStyle("traditional");
                        }}
                      />
                      <label class="custom-control-label" for="style43">
                        Traditional
                      </label>
                    </div>
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col>
                    <ReactBootStrap.Form.Group
                      controlId="formGridlname"
                      style={{ marginBottom: "1px", marginTop: "15px" }}
                    >
                      <ReactBootStrap.Form.Label>
                        <i>You Play In?</i>
                      </ReactBootStrap.Form.Label>
                    </ReactBootStrap.Form.Group>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="solo"
                        onChange={(e) => {
                          setGroup("solo");
                        }}
                      />
                      <label class="custom-control-label" for="solo">
                        solo
                      </label>
                    </div>
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="duet"
                        onChange={(e) => {
                          setGroup("duet");
                        }}
                      />
                      <label class="custom-control-label" for="duet">
                        duet
                      </label>
                    </div>
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Form.Group controlId="formGridlname">
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
                <ReactBootStrap.Form.Group controlId="formGridlname">
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
                  href="/#/about"
                  onClick={submitMusician}
                >
                  Register
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
