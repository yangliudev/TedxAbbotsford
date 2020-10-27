import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./MusicianRegister.css"
import "mdbreact/dist/css/mdb.css";

class MusicianRegister extends Component {


    render() {

        function ShowTextArea() {
            var textArea = document.getElementById("myDIV");

            textArea.style.display = "block";

        }

        function HideTextArea() {
            var textArea = document.getElementById("myDIV");

            textArea.style.display = "none";

        }

        return (
            <ReactBootStrap.Container className="top-space">
                <div className="bg-display" >

                    <ReactBootStrap.Row className="justify-content-md-center" >
                        <ReactBootStrap.Col><h1 class="info">Register to Become a Musician!</h1>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Form>
                        <ReactBootStrap.Container >
                            <ReactBootStrap.Row  >
                                <ReactBootStrap.Col md={{ span: 8, offset: 2 }} >

                                    <ReactBootStrap.Form.Group controlId="formGridfname" >
                                        <ReactBootStrap.Form.Label id='font'>Personal Information</ReactBootStrap.Form.Label>
                                        <ReactBootStrap.Form.Control type="text" placeholder="First Name" />
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Control type="text" placeholder="last Name" />
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Control type="text" placeholder="Address" />
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Row>
                                        <ReactBootStrap.Col md={{ span: 4 }}>
                                            <ReactBootStrap.Form.Group controlId="formGridlname">
                                                <ReactBootStrap.Form.Control type="text" placeholder="Postal Code" />
                                            </ReactBootStrap.Form.Group>
                                        </ReactBootStrap.Col>

                                        <ReactBootStrap.Col >
                                            <ReactBootStrap.Form.Group controlId="formGridlname">
                                                <ReactBootStrap.Form.Control type="text" placeholder="Locality/City" />
                                            </ReactBootStrap.Form.Group>
                                        </ReactBootStrap.Col>
                                    </ReactBootStrap.Row>

                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Control type="text" placeholder="Province" />
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Control type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone: 012-345-6789" />
                                    </ReactBootStrap.Form.Group>


                                    <ReactBootStrap.Form.Group controlId="formGridfname">
                                        <ReactBootStrap.Form.Label id='font'>Banking Information</ReactBootStrap.Form.Label>
                                        <ReactBootStrap.Form.Control type="text" placeholder="IBAN" />
                                    </ReactBootStrap.Form.Group>


                                    <ReactBootStrap.Form.Group controlId="formGridfname">
                                        <ReactBootStrap.Form.Label id='font'>Account Information</ReactBootStrap.Form.Label>
                                        <ReactBootStrap.Form.Control type="text" placeholder="E-mail" />
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Control type="text" placeholder="Password" />
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Control type="text" placeholder="Confirm Password" />
                                    </ReactBootStrap.Form.Group>


                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Label id='font'>Musical Training(s)</ReactBootStrap.Form.Label>
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Row >

                                        <ReactBootStrap.Col md={{ span: 4 }}>
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios" onClick={HideTextArea} />
                                                <label class="custom-control-label" for="defaultGroupExample1">Master</label>
                                            </div>

                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" onClick={HideTextArea} />
                                                <label class="custom-control-label" for="defaultGroupExample2">Currently in School</label>
                                            </div>


                                        </ReactBootStrap.Col>

                                        <ReactBootStrap.Col md={{ span: 6 }} >
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios" onClick={HideTextArea} />
                                                <label class="custom-control-label" for="defaultGroupExample3">Bachelor</label>
                                            </div>
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="defaultGroupExample4" name="groupOfDefaultRadios" onClick={ShowTextArea} />
                                                <label class="custom-control-label" for="defaultGroupExample4">Other</label>
                                            </div>
                                            <div class="form-group shadow-textarea" id="myDIV" onLoad={HideTextArea}>
                                                <label for="exampleFormControlTextarea6"></label>
                                                <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="5" placeholder="Other Qualifications..."></textarea>
                                            </div>


                                        </ReactBootStrap.Col>

                                    </ReactBootStrap.Row>

                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Label id='font'>Professional Information</ReactBootStrap.Form.Label>
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Form.Group controlId="formGridlname" style={{ marginBottom: '1px' }}>
                                        <ReactBootStrap.Form.Label><i>Instruments</i></ReactBootStrap.Form.Label>
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Row >
                                        <ReactBootStrap.Col md={{ span: 3 }} >
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments0" />
                                                <label class="custom-control-label" for="instruments0">Voice</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments1" />
                                                <label class="custom-control-label" for="instruments1">Piano</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments2" />
                                                <label class="custom-control-label" for="instruments2">Harp</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments3" />
                                                <label class="custom-control-label" for="instruments3">Trombone</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments4" />
                                                <label class="custom-control-label" for="instruments4">Trumpet</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments5" />
                                                <label class="custom-control-label" for="instruments5">Bass</label>
                                            </div>
                                        </ReactBootStrap.Col>

                                        <ReactBootStrap.Col md={{ span: 3 }} >
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments6" />
                                                <label class="custom-control-label" for="instruments6">Singing</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments7" />
                                                <label class="custom-control-label" for="instruments7">Saxophone</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments8" />
                                                <label class="custom-control-label" for="instruments8">Voila - Copper</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments9" />
                                                <label class="custom-control-label" for="instruments9">Bassoon</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments10" />
                                                <label class="custom-control-label" for="instruments10">Flute</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments11" />
                                                <label class="custom-control-label" for="instruments11">Horn</label>
                                            </div>
                                        </ReactBootStrap.Col>

                                        <ReactBootStrap.Col md={{ span: 3 }} >
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments12" />
                                                <label class="custom-control-label" for="instruments12">Guitar</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments13" />
                                                <label class="custom-control-label" for="instruments13">Accordian</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments14" />
                                                <label class="custom-control-label" for="instruments14">Clarinet</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments15" />
                                                <label class="custom-control-label" for="instruments15">Cello</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments16" />
                                                <label class="custom-control-label" for="instruments16">Percussion</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="instruments17" />
                                                <label class="custom-control-label" for="instruments17">Alphorn</label>
                                            </div>
                                        </ReactBootStrap.Col>

                                    </ReactBootStrap.Row>

                                    <ReactBootStrap.Form.Group controlId="formGridlname" style={{ marginBottom: '40px' }}>
                                        <ReactBootStrap.Form.Control type="text" placeholder="Other Instrument" />
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Form.Group controlId="formGridlname" style={{ marginBottom: '1px' }}>
                                        <ReactBootStrap.Form.Label><i>Music Styles</i></ReactBootStrap.Form.Label>
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Row>
                                    <ReactBootStrap.Col md={{ span: 3 }} >
                                            <ReactBootStrap.Form.Group controlId="formGridlname">
                                                <ReactBootStrap.Form.Label>Classical Styles</ReactBootStrap.Form.Label>
                                            </ReactBootStrap.Form.Group>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style0" />
                                                <label class="custom-control-label" for="style0">Baroque</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style1" />
                                                <label class="custom-control-label" for="style1">Classic</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style2" />
                                                <label class="custom-control-label" for="style2">Contemporary</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style3" />
                                                <label class="custom-control-label" for="style3">Lied</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style4" />
                                                <label class="custom-control-label" for="style4">Opera</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style5" />
                                                <label class="custom-control-label" for="style5">Romantic</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style6" />
                                                <label class="custom-control-label" for="style6">Sacred</label>
                                            </div>
                                        </ReactBootStrap.Col>


                                        <ReactBootStrap.Col md={{ span: 3 }} >
                                            <ReactBootStrap.Form.Group controlId="formGridlname">
                                                <ReactBootStrap.Form.Label>Popular Styles</ReactBootStrap.Form.Label>
                                            </ReactBootStrap.Form.Group>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style7" />
                                                <label class="custom-control-label" for="style7">Songwriter</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style8" />
                                                <label class="custom-control-label" for="style8">Blues</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style9" />
                                                <label class="custom-control-label" for="style9">Brass band</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style10" />
                                                <label class="custom-control-label" for="style10">Musical comedy</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style11" />
                                                <label class="custom-control-label" for="style11">Country</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style12" />
                                                <label class="custom-control-label" for="style12">Fado</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style13" />
                                                <label class="custom-control-label" for="style13">Fanfare</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style14" />
                                                <label class="custom-control-label" for="style14">Flamenco</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style15" />
                                                <label class="custom-control-label" for="style15">Folk</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style16" />
                                                <label class="custom-control-label" for="style16">Swiss Folk </label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style17" />
                                                <label class="custom-control-label" for="style17">French</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style18" />
                                                <label class="custom-control-label" for="style18">Irish</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style19" />
                                                <label class="custom-control-label" for="style19">Italian</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style20" />
                                                <label class="custom-control-label" for="style20">Klezmer</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style21" />
                                                <label class="custom-control-label" for="style21">Mariachi</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style22" />
                                                <label class="custom-control-label" for="style22">Popular</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style23" />
                                                <label class="custom-control-label" for="style23">Rock</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style24" />
                                                <label class="custom-control-label" for="style24">Salsa</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style25" />
                                                <label class="custom-control-label" for="style25">Tango</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style26" />
                                                <label class="custom-control-label" for="style26">World Music</label>
                                            </div>
                                        </ReactBootStrap.Col>

                                        <ReactBootStrap.Col md={{ span: 3 }} >
                                            <ReactBootStrap.Form.Group controlId="formGridlname">
                                                <ReactBootStrap.Form.Label>Jazz Styles</ReactBootStrap.Form.Label>
                                            </ReactBootStrap.Form.Group>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style27" />
                                                <label class="custom-control-label" for="style27">Afro Jazz</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style28" />
                                                <label class="custom-control-label" for="style28">Songwriter</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style29" />
                                                <label class="custom-control-label" for="style29">Be-Bop</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style30" />
                                                <label class="custom-control-label" for="style30">Bossanova</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style31" />
                                                <label class="custom-control-label" for="style31">Contemporary</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style32" />
                                                <label class="custom-control-label" for="style32">Free Jazz</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style33" />
                                                <label class="custom-control-label" for="style33">Funk</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style34" />
                                                <label class="custom-control-label" for="style34">Gospel</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style35" />
                                                <label class="custom-control-label" for="style35">Jazz</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style36" />
                                                <label class="custom-control-label" for="style36">Latin Jazz </label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style37" />
                                                <label class="custom-control-label" for="style37">Manouche</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style38" />
                                                <label class="custom-control-label" for="style38">New Orleans</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style39" />
                                                <label class="custom-control-label" for="style39">R'n'B</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style40" />
                                                <label class="custom-control-label" for="style40">Salsa</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style41" />
                                                <label class="custom-control-label" for="style41">Drunk</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style42" />
                                                <label class="custom-control-label" for="style42">Swing</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="style43" />
                                                <label class="custom-control-label" for="style43">Traditional</label>
                                            </div>
                                            
                                        </ReactBootStrap.Col>
                                    </ReactBootStrap.Row>

                                    <ReactBootStrap.Row>

                                        <ReactBootStrap.Col >
                                            <ReactBootStrap.Form.Group controlId="formGridlname" style={{ marginBottom: '1px' }}>
                                                <ReactBootStrap.Form.Label><i>You Play In?</i></ReactBootStrap.Form.Label>
                                            </ReactBootStrap.Form.Group>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="solo" />
                                                <label class="custom-control-label" for="solo">Solo</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="duet" />
                                                <label class="custom-control-label" for="duet">Duet</label>
                                            </div>
                                        </ReactBootStrap.Col>
                                    </ReactBootStrap.Row>

                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Label><i>Media</i></ReactBootStrap.Form.Label>
                                        <ReactBootStrap.Form.Control type="text" placeholder="Website" />
                                    </ReactBootStrap.Form.Group>
                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Control type="text" placeholder="YouTube/Drive/Dropbox Link" />
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Label id='font'>Availability</ReactBootStrap.Form.Label>
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Button variant="primary" size="md" href="/#/about">
                                        Register
                            </ReactBootStrap.Button>{''}

                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>

                            <ReactBootStrap.Row>
                                <ReactBootStrap.Col>



                                    {/* <div class="form-check">
                                        <input type="radio" class="form-check-input" id="materialUnchecked" name="materialExampleRadi" />
                                        <label class="form-check-label" for="materialUnchecked">Material unchecked</label>
                                    </div>


                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="materialChecked" name="materialExampleRadi" />
                                        <label class="form-check-label" for="materialChecked">Material checked</label>
                                    </div> */}

                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>


                        </ReactBootStrap.Container>
                    </ReactBootStrap.Form>

                </div>
            </ReactBootStrap.Container>

        )
    };
};

export default MusicianRegister