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
                          <p></p>
                          <label>First Name: </label>
                          <input></input>
                          <br />
                      </form>
                </div>
        </div>
      </body>
    );
}

export default App;
