import React from "react";
import main_logo from "./assets/logos/01_logo-horizontal.png";
import tower_logo from "./assets/tower/tour.png";
import Button from '@material-ui/core/Button'
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={main_logo} alt="Main logo" className="main_logo"/>
      </header>
      <div>
        <img src={tower_logo} alt="Tower logo" className="tower_logo"/>
        <p className="intro_p">Welcome to Dans L' Jardin!</p>
        <p className="details_p">Book a personal musician to come play at your desired location!</p>
        <Button variant="contained" color="secondary" className="book_button">Book Now!</Button>
      </div>
    </div>
  );
}

export default App;
