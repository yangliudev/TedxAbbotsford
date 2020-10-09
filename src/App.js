import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';


function App() {
    return(
      <body>
        <div className="App">
            <Navbar fixed="top"/>
                <div class="formbackground">
                      <h1 class="appheader">Musician Registration</h1>
                      <form>
                          <div class="boxesdiv">
                              <label class="labeltext">First Name: </label>
                              <input placeholder="First Name" class="inputboxes"></input>

                              <label class="labeltext">Last Name: </label>
                              <input placeholder="Last Name" class="inputboxes"></input>
                              <br />

                              <label class="labeltext">Username: </label>
                              <input placeholder="Username" class="inputboxes"></input>
                              
                              <label class="labeltext">Email: </label>
                              <input placeholder="Email" class="inputboxes"></input>
                              <br />

                              <label class="labeltext">Number: </label>
                              <input placeholder="Number" class="inputboxes"></input>
                              
                              <label class="labeltext">Address: </label>
                              <input placeholder="Address" class="inputboxes"></input>
                              <br />

                              <label class="labeltext">City: </label>
                              <input placeholder="City" class="inputboxes"></input>
                              
                              <label class="labeltext">Province: </label>
                              <input placeholder="Province" class="inputboxes"></input>
                              <br />
                              <br />
                          </div>

                          <h2 class="checkboxheader">Modes of Transportation</h2>
                          <br />

                          <div class="checkboxdiv">
                              <input type="checkbox" class="inputcheckbox"></input>
                              <label class="labelcheckbox">Public Transit</label>

                              <input type="checkbox" class="inputcheckbox"></input>
                              <label class="labelcheckbox">Car</label>

                              <input type="checkbox" class="inputcheckbox"></input>
                              <label class="labelcheckbox">Walk</label>

                              <input type="checkbox" class="inputcheckbox"></input>
                              <label class="labelcheckbox">Other</label>
                          </div>
                          <br/>
                          <br />

                          <div class="passwordboxesdiv">
                              <label class="passwordlabel">Password: </label>
                              <input placeholder="Password" class="passwordboxes"></input>
                              
                              <label class="passwordlabel">Confirm Password: </label>
                              <input placeholder="Confirm Password" class="passwordboxes"></input>
                              <br />
                          </div>

                          <button class="registerbutton">Register</button>
                          <br/>
                          <br/>
                          <p class="signin">Already have an account? Sign in!</p>
                      </form>
                </div>
        </div>
      </body>
    );
}

export default App;
