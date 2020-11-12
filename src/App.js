import React, { Component } from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Ordering1 from "./components/Ordering/Ordering_1";
import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";

<<<<<<< Updated upstream
import Faq from "./components/Faq/Faq";
import Info from "./components/Info/Info"
import About from "./components/About/About"
import MusicianRegister from "./components/Musician/MusicianRegister"
import Test from "./components/RegisterTest/RegisterTest"
import Calender from "./components/MusicianCalender/MusicianCalender"
=======
import Test from "./components/Admin/Test";

import Faq from "./components/Pages/Faq/Faq";
import Info from "./components/Pages/Info/Info";
import About from "./components/Pages/About/About";
import OurMusicians from "./components/Pages/Musicians/Musicians"
import GamesRules from "./components/Pages/GamesRules/GamesRules"
import GreenConcerts from "./components/Pages/GreenConcerts/GreenConcerts"

import Login from "./components/Login/Login";
import Musician from "./components/Musician/MusicianRegister"
import Musician_Dash from "./components/Musician/Musician_Dash"
import Calender from "./components/Musician/MusicianCalender"

import Maps from "./components/Musician_Dash/Map"
>>>>>>> Stashed changes


import { HashRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {
  render() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route exact path="/">
          <Home />
        </Route> <Route exact path="/faq">
          <Faq />
        </Route>
       <Route exact path="/calender">
          <Calender />
        </Route>
        <Route exact path="/info">
          <Info />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/register">
          <MusicianRegister />
        </Route>
        <Route path="/order">
          <Ordering1 />
        </Route>
        <Route path="/admin">
        <Navbar />
<<<<<<< Updated upstream
          <Admin />
        </Route>
      </Switch>
      
  </Router>
  );
        
=======
        <Switch>


          <Route exact path="/"><Home /><Footer /></Route>
          <Route path="/faq"><Faq /><Footer /></Route>
          <Route path="/info"><Info /><Footer /></Route>
          <Route path="/about"><About /><Footer /></Route>
          <Route path="/calender"><Calender /><Footer /></Route>
          <Route path="/ourmusicians"><OurMusicians /><Footer /></Route>
          <Route path="/gamesrules"><GamesRules /><Footer /></Route>
          <Route path="/greenconcerts"><GreenConcerts /><Footer /></Route>
 
          <Route exact path="/order" component={Ordering}/>
          <Route exact path="/admin" component={Admin_Dash}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/test" component={Test}/>
          <Route exact path="/musician" component={Musician}/>
          <Route path="/musician/admin" component={Musician_Dash}/>
          <Route path="/maps" component={Maps}/>


        </Switch>
      </Router>
    );
>>>>>>> Stashed changes
  }
};

export default App;