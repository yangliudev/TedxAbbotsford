import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Ordering from "./components/Ordering/Ordering";
import Home from "./components/Home/Home";
import Admin_Dash from "./components/Admin/Admin";

import Test from "./components/Admin/Test";

import Faq from "./components/Pages/Faq/Faq";
import Info from "./components/Pages/Info/Info";
import About from "./components/Pages/About/About";
import OurMusicians from "./components/Pages/Musicians/Musicians"
import GamesRules from "./components/Pages/GamesRules/GamesRules"
import GreenConcerts from "./components/Pages/GreenConcerts/GreenConcerts"

import Login from "./components/Login/Login";
import Musician from "./components/Musician/MusicianRegister"
// import Musician_Dash from "./components/Musician/Musician_Dash"
// import Musician_Dash from "./components/Musician_Dashboard/MusicianDashboard"

// import Maps from "./components/Musician_Dash/Map"

import Main from "./components/Dashboard/Main"


import { HashRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>


          <Route exact path="/"><Home /><Footer /></Route>
          <Route path="/faq"><Faq /><Footer /></Route>
          <Route path="/info"><Info /><Footer /></Route>
          <Route path="/about"><About /><Footer /></Route>

          <Route exact path="/main" component={Main}/>

          <Route path="/ourmusicians"><OurMusicians /><Footer /></Route>
          <Route path="/gamesrules"><GamesRules /><Footer /></Route>
          <Route path="/greenconcerts"><GreenConcerts /><Footer /></Route>

 
          <Route exact path="/order" component={Ordering}/>
          <Route exact path="/admin" component={Admin_Dash}/>
          {/* <Route path="/musician/admin" component={Musician_Dash}/> */}

          <Route exact path="/login" component={Login}/>
          <Route exact path="/test" component={Test}/>
          <Route exact path="/musician" component={Musician}/>
          {/* <Route path="/maps" component={Maps}/> */}


        </Switch>
      </Router>
    );
  }
}

export default App;
