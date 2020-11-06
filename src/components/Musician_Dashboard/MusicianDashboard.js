import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Axios from "axios";
import "./MusicianDashboard.css";
import MusicianProfile from "./MusicianProfile"
import MusicianRequests from "./MusicianRequests";
import MusicianCalendar from "./MusicianCalender";

function MusicianDashboard() {

        function active(){
            var x = document.getElementById("profile")
            x.style.color = "red";
            document.getElementById("requests").style.color = "white";
            document.getElementById("schedule").style.color = "white";
            /*
            document.getElementById("stats").style.color = "white";
            document.getElementById("income").style.color = "white";
            */
        }

        function showProfile(){
            var x = document.getElementById("profilePage")
            x.style.display = "block";
            document.getElementById("requestsPage").style.display = "none";
            document.getElementById("schedulePage").style.display = "none";
            /*
            document.getElementById("statsPage").style.display = "none";
            document.getElementById("incomePage").style.display = "none";
            */
        }

        function active2(){
            var x = document.getElementById("requests")
            x.style.color = "red";
            document.getElementById("profile").style.color = "white";
            document.getElementById("schedule").style.color = "white";
            /*
            document.getElementById("stats").style.color = "white";
            document.getElementById("income").style.color = "white";
            */
        }

        function showRequests(){
            var x = document.getElementById("requestsPage")
            x.style.display = "block";
            document.getElementById("profilePage").style.display = "none";
            document.getElementById("schedulePage").style.display = "none";
            /*
            document.getElementById("statsPage").style.display = "none";
            document.getElementById("incomePage").style.display = "none";
            */
        }

        function active3(){
            var x = document.getElementById("schedule")
            x.style.color = "red";
            document.getElementById("profile").style.color = "white";
            document.getElementById("requests").style.color = "white";
            /*
            document.getElementById("stats").style.color = "white";
            document.getElementById("income").style.color = "white";
            */
        }

        function showSchedule(){
            var x = document.getElementById("schedulePage")
            x.style.display = "block";
            document.getElementById("profilePage").style.display = "none";
            document.getElementById("requestsPage").style.display = "none";
            /*
            document.getElementById("statsPage").style.display = "none";
            document.getElementById("incomePage").style.display = "none";
            */
        }
        /*
        function active4(){
            var x = document.getElementById("stats")
            x.style.color = "red";
            document.getElementById("profile").style.color = "white";
            document.getElementById("schedule").style.color = "white";
            document.getElementById("requests").style.color = "white";
            document.getElementById("income").style.color = "white";
        }

        function showStats(){
            var x = document.getElementById("statsPage")
            x.style.display = "block";
            document.getElementById("profilePage").style.display = "none";
            document.getElementById("schedulePage").style.display = "none";
            document.getElementById("requestsPage").style.display = "none";
            document.getElementById("incomePage").style.display = "none";
        }

        function active5(){
            var x = document.getElementById("income")
            x.style.color = "red";
            document.getElementById("profile").style.color = "white";
            document.getElementById("schedule").style.color = "white";
            document.getElementById("stats").style.color = "white";
            document.getElementById("requests").style.color = "white";
        }

        function showIncome(){
            var x = document.getElementById("incomePage")
            x.style.display = "block";
            document.getElementById("profilePage").style.display = "none";
            document.getElementById("schedulePage").style.display = "none";
            document.getElementById("statsPage").style.display = "none";
            document.getElementById("requestsPage").style.display = "none";
        }
        */
        
        return (
            <ReactBootStrap.Container className="top-space">
                <ReactBootStrap.Container className="dashboardNav">

                    <ReactBootStrap.Row className="justify-content-md-center">
                        <ReactBootStrap.Col>
                            <h2>Musician Dashboard</h2>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="justify-content-md-center">
                        <ReactBootStrap.Col>
                            <ReactBootStrap.Navbar collapseOnSelect expand="lg" className="color-nav" variant="dark">
                                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                                    <ReactBootStrap.Nav className='nav-size justify-content-md-center'>
                                        <p className="navText" id="profile" onClick={(e) => { active(); showProfile() }}>PROFILE</p>
                                        <p className="navText" id="requests" onClick={(e) => { active2(); showRequests() }}>REQUESTS</p>
                                        <p className="navText" id="schedule" onClick={(e) => { active3(); showSchedule() }}>SCHEDULE</p>
                                        {/*
                                        <p className="navText" id="stats" onClick={(e) => { active4(); showStats() }}>STATISTICS</p>
                                        <p className="navText" id="income" onClick={(e) => { active5(); showIncome() }}>INCOME</p>
                                        */}
                                    </ReactBootStrap.Nav>
                                </ReactBootStrap.Navbar.Collapse>
                            </ReactBootStrap.Navbar>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>



                    <ReactBootStrap.Container className="profileContainer" id="profilePage">
                        <MusicianProfile />
                    </ReactBootStrap.Container>



                    <ReactBootStrap.Container className="dashboardContainer" id="requestsPage">
                        <MusicianRequests />
                    </ReactBootStrap.Container>



                    <ReactBootStrap.Container className="dashboardContainer" id="schedulePage">
                        <MusicianCalendar />
                    </ReactBootStrap.Container> 


                    {/*
                    <ReactBootStrap.Container className="dashboardContainer" id="statsPage">
                        <ReactBootStrap.Row className="justify-content-md-center">
                            <ReactBootStrap.Col>
                                <h2>Statistics</h2>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                    </ReactBootStrap.Container> 



                    <ReactBootStrap.Container className="dashboardContainer" id="incomePage">
                        <ReactBootStrap.Row className="justify-content-md-center">
                            <ReactBootStrap.Col>
                                <h2>Income</h2>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                    </ReactBootStrap.Container>  
                    */}
                </ReactBootStrap.Container>
            </ReactBootStrap.Container>

        )
    };

export default MusicianDashboard

