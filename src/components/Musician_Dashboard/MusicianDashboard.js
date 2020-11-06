import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import "./MusicianDashboard.css";
import Scheduler from "./MusicianCalander";
// import MusicianRequests from "./MusicianRequests";

function MusicianDashboard() {


    const [user, setUser] = useState("Harish@email.com");
    const [orders, setOrders] = useState([]);

    const [musicianDetails, setMusicianDetails] = useState({});

    var firstName = musicianDetails.firstName;
    var lastName = musicianDetails.lastName;
    var address = musicianDetails.address;
    var phone = musicianDetails.phone;
    var email = musicianDetails.email;
    var training = musicianDetails.training;
    
    // const [lastName, setLastName] = useState('');
    // var [address, setAddress] = useState(musicianDetails.address);
    // const [phone, setPhone] = useState(musicianDetails.phone);
    // const [email, setEmail] = useState(musicianDetails.email);
    // // const [password, setPassword] = useState("");
    // // const [confirmpassword, setConfirmPassword] = useState("");
    // const [training, setTraining] = useState(musicianDetails.training);
    // // const [style, setStyle] = useState("");
    // const [group, setGroup] = useState(musicianDetails.number_musicians);


  const updateMusician = () => {
    Axios.put("http://localhost:5000/musician/update", {
        musicianID: musicianDetails.id,
        musicianFirstName: firstName,
        musicianLastName: lastName,
        musicianAddress: address,
        musicianPhone: phone,
        musicianEmail: email,
    //   musicianPassword: password,
    //   musicianConfirmPassword: confirmpassword,
      musicianTraining: training
    //   musicianGroup: group,
    }).then(() => {
      alert("sucessful insert");
    });
  };

  Axios.defaults.withCredentials = true;

//   useEffect(() => {
//     Axios.get("http://localhost:5000/login").then((response) => {
//       if (response.data.loggedIn == true) {
//         setUser(response.data.user[0].username);
//       }
//     });
//   }, []);

  useEffect(() => {
    Axios.get("http://localhost:5000/match/musician", {
        musicianEmail: user
    }).then((response) => {
        setMusicianDetails(response.data[0])
        getOrders(response.data[0].id)

        // console.log(response.data[0]);
    });
  }, []);

//   useEffect(() => {
//       if (musicianDetails)
//     setLastName(musicianDetails.lastName)
//   }, []);

  const getOrders = (id) => {
    Axios.get(`http://localhost:5000/match/orders/${id}`).then((response) => {
        // console.log(response.data);
        setOrders(response.data);
    });
  };




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
                                        <p className="navText" id="requests" onClick={(e) => { active2(); showRequests() }}>REQUESTS</p>
                                        <p className="navText" id="profile" onClick={(e) => { active(); showProfile() }}>PROFILE</p>
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



                    <ReactBootStrap.Container className="dashboardContainer" id="profilePage">
                    
                        <ReactBootStrap.Row className="justify-content-md-center">
                            <ReactBootStrap.Col>
                                <h2>Account Settings</h2>
                                <h6 className="lineText">ACCOUNT PREFERENCES</h6>
                                <hr className="line"/>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                        
                        <ReactBootStrap.Row className="setting">
                            <ReactBootStrap.Col md="auto">
                                <p className="profileHeader">First Name: </p>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.firstName} onChange={(e) => {firstName = e.target.value}}/></ReactBootStrap.Col>
                        </ReactBootStrap.Row>

                        <ReactBootStrap.Row className="setting">
                            <ReactBootStrap.Col md="auto">
                                <p className="profileHeader">Last Name: </p>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.lastName} onChange={(e) => {lastName = e.target.value}}/></ReactBootStrap.Col>
                        </ReactBootStrap.Row>

                        <ReactBootStrap.Row className="setting">
                            <ReactBootStrap.Col md="auto">
                                <p className="profileHeader">Phone: </p>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.phone} onChange={(e) => {phone = e.target.value}}/></ReactBootStrap.Col>
                        </ReactBootStrap.Row>

                        <ReactBootStrap.Row className="setting">
                            <ReactBootStrap.Col md="auto">
                                <p className="profileHeader">Email: </p>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.email} onChange={(e) => {email = e.target.value}}/></ReactBootStrap.Col>
                        </ReactBootStrap.Row>

                        <ReactBootStrap.Row className="setting">
                            <ReactBootStrap.Col md="auto">
                                <p className="profileHeader">Address: </p>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.address} onChange={(e) => {address = e.target.value}}/></ReactBootStrap.Col>

                        </ReactBootStrap.Row>

                        <ReactBootStrap.Row className="justify-content-md-center" style={{marginTop: "10px"}}>
                            <ReactBootStrap.Col>
                                <h6 className="lineText">MUSICAL PREFERENCES</h6>
                                <hr className="line"/>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>

                        <ReactBootStrap.Row className="setting">
                            <ReactBootStrap.Col md="auto">
                                <p className="profileHeader">Training: </p>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.training} onChange={(e) => {training = e.target.value}}/></ReactBootStrap.Col>
                        </ReactBootStrap.Row>

                        <ReactBootStrap.Row className="setting">
                            <ReactBootStrap.Col md="auto">
                                <p className="profileHeader">Style: </p>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.style} /></ReactBootStrap.Col>
                        </ReactBootStrap.Row>

                        <ReactBootStrap.Row className="setting">
                            <ReactBootStrap.Col md="auto">
                                <p className="profileHeader">Solo/Duo: </p>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.number_musicians} /></ReactBootStrap.Col>
                        </ReactBootStrap.Row>

                        <ReactBootStrap.Row style={{marginTop:"20px"}}>
                            {/* <input type="button" onClick={updateMusician} value="Save Changes"/> */}
                            <ReactBootStrap.Button onClick={updateMusician}>Save Changes</ReactBootStrap.Button>
                            </ReactBootStrap.Row>

            
                    </ReactBootStrap.Container>



                    <ReactBootStrap.Container id="requestsPage">
                                    {orders.map((value, index) => {
                                        return <div style={{backgroundColor:"grey", marginBottom: "10px", borderRadius:"10px", paddingBottom:"10px"}}><div style={{marginLeft:"10px"}}>
                                            <h5>Order For: {value.firstName} {value.lastName}</h5>
                                            <h6>Address: {value.address}, {value.city}, {value.zip} <a href="https://www.google.com/maps/dir/?api=1&{}origin=Space+Needle+Seattle+WA&destination=Pike+Place+Market+Seattle+WA"><input type="button" value="Google Maps"/></a></h6>
                                            <h6>Date: {value.date_service} Time: {value.time_service}</h6>
                                            <input type="button" value="Accept" style={{backgroundColor:"green"}}/><input type="button" value="Decline" style={{backgroundColor:"red"}}/>
                                            </div>
                                            </div>
                                    })}
                    </ReactBootStrap.Container>



                    <ReactBootStrap.Container className="dashboardContainer" id="schedulePage">
                        <ReactBootStrap.Row className="justify-content-md-center">
                            <ReactBootStrap.Col>
                                <h2>Schedule</h2>
                                <Scheduler />
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
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

