import React, { Component, useState, useEffect } from "react";
import Axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import "./MusicianDashboard.css";
import Scheduler from "./MusicianCalander";
import { Box } from "@material-ui/core";
// import MusicianRequests from "./MusicianRequests";

function MusicianDashboard() {


    const [user, setUser] = useState("");
    const [orders, setOrders] = useState([]);
    const [accepted, setAccepted] = useState([]);


    const [musicianDetails, setMusicianDetails] = useState({});

    var firstName = musicianDetails.firstName;
    var lastName = musicianDetails.lastName;
    var address = musicianDetails.address;
    var phone = musicianDetails.phone;
    var email = musicianDetails.email;
    var training = musicianDetails.training;

    var commentBox = "";

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

    useEffect(() => {
        Axios.get("http://localhost:5000/login").then((response) => {
            if (response.data.loggedIn == true) {
                setUser(response.data.user[0].username);
            }
        });
    }, []);

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
            let orders = [];
            let accepted = [];
            for (let index = 0; index < response.data.length; index++) {
                if (response.data[index].status !== "Confirmed" && response.data[index].musicianStatus !== "Declined") {
                    orders.push(response.data[index]);
                }
                if (response.data[index].musicianStatus === "Confirmed") {
                    accepted.push(response.data[index]);
                }
            }
            // console.log(orders)
            setOrders(orders);
            setAccepted(accepted);
        });
    };


    const updateStatus = (id, email) => {
        Axios.put("http://localhost:5000/orderStatus/update", {
            orderID: id,
            status: "Confirmed",
        }).then(() => {
          alert("sucessful insert");
        });
        Axios.put("http://localhost:5000/musicianOrders/update", {
            orderID: id,
            musicianID: musicianDetails.id,
            status: "Confirmed",
            comment: "Accepted",
            orderEmail: email
        }).then(() => {
            alert("sucessful insert");
        });
        window.location.reload();
        // window.location.reload();
      }


    const declineMusicianOrder = (id) => {
    Axios.put("http://localhost:5000/musicianOrders/update", {
        orderID: id,
        musicianID: musicianDetails.id,
        status: "Declined",
        comment: commentBox,
        orderEmail: ""
    }).then(() => {
        alert("sucessful insert");
    });
    Axios.put("http://localhost:5000/orderStatus/update", {
        orderID: id,
        status: "Declined",
    }).then(() => {
        alert("sucessful insert");
        });
    window.location.reload();
    }


    function show(t,r) {
       
        var textArea = document.getElementById(t);
        textArea.style.display = "initial"; 
        var but = document.getElementById(r);
        but.style.display = "initial"; 
        
    }

    function hide(p) {
       
        var button = document.getElementById(p);
        button.style.display = "none";        
    }
      

    function active() {
        var x = document.getElementById("profile")
        x.style.color = "red";
        document.getElementById("requests").style.color = "white";
        document.getElementById("schedule").style.color = "white";
        document.getElementById("stats").style.color = "white";
        // document.getElementById("income").style.color = "white";
        
    }

    function showProfile() {
        var x = document.getElementById("profilePage")
        x.style.display = "block";
        document.getElementById("requestsPage").style.display = "none";
        document.getElementById("schedulePage").style.display = "none";
        document.getElementById("statsPage").style.display = "none";
        // document.getElementById("incomePage").style.display = "none";
        
    }

    function active2() {
        var x = document.getElementById("requests")
        x.style.color = "red";
        document.getElementById("profile").style.color = "white";
        document.getElementById("schedule").style.color = "white";
        document.getElementById("stats").style.color = "white";
        // document.getElementById("income").style.color = "white";
    }

    function showRequests() {
        var x = document.getElementById("requestsPage")
        x.style.display = "block";
        document.getElementById("profilePage").style.display = "none";
        document.getElementById("schedulePage").style.display = "none";
        document.getElementById("statsPage").style.display = "none";
        // document.getElementById("incomePage").style.display = "none";
    }

    function active3() {
        var x = document.getElementById("schedule")
        x.style.color = "red";
        document.getElementById("profile").style.color = "white";
        document.getElementById("requests").style.color = "white";
        document.getElementById("stats").style.color = "white";
        // document.getElementById("income").style.color = "white";
    }

    function showSchedule() {
        var x = document.getElementById("schedulePage")
        x.style.display = "block";
        document.getElementById("profilePage").style.display = "none";
        document.getElementById("requestsPage").style.display = "none";
        document.getElementById("statsPage").style.display = "none";
        // document.getElementById("incomePage").style.display = "none";
    }

    function active4() {
        var x = document.getElementById("stats")
        x.style.color = "red";
        document.getElementById("profile").style.color = "white";
        document.getElementById("requests").style.color = "white";
        document.getElementById("schedule").style.color = "white";
        // document.getElementById("income").style.color = "white";
    }

    function showStats() {
        var x = document.getElementById("statsPage")
        x.style.display = "block";
        document.getElementById("profilePage").style.display = "none";
        document.getElementById("requestsPage").style.display = "none";
        document.getElementById("schedulePage").style.display = "none";
        // document.getElementById("incomePage").style.display = "none";
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
                                    <p className="navText" id="stats" onClick={(e) => { active4(); showStats() }}>ORDERS</p>

                                        {/* <p className="navText" id="income" onClick={(e) => { active5(); showIncome() }}>INCOME</p> */}
                                       
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
                            <hr className="line" />
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="justify-content-md-center">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">First Name: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.firstName} onChange={(e) => { firstName = e.target.value }} /></ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="justify-content-md-center">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">Last Name: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.lastName} onChange={(e) => { lastName = e.target.value }} /></ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="justify-content-md-center">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">Phone: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.phone} onChange={(e) => { phone = e.target.value }} /></ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="justify-content-md-center">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">Email: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.email} onChange={(e) => { email = e.target.value }} /></ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="justify-content-md-center">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">Address: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.address} onChange={(e) => { address = e.target.value }} /></ReactBootStrap.Col>

                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="justify-content-md-center" style={{ marginTop: "10px" }}>
                        <ReactBootStrap.Col>
                            <h6 className="lineText">MUSICAL PREFERENCES</h6>
                            <hr className="line" />
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="justify-content-md-center">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">Training: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.training} onChange={(e) => { training = e.target.value }} /></ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="justify-content-md-center">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">Style: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.style} /></ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="justify-content-md-center">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">Solo/Duo: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.number_musicians} /></ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="justify-button">
                        {/* <input type="button" onClick={updateMusician} value="Save Changes"/> */}
                        <ReactBootStrap.Button variant="primary"  size="md" onClick={updateMusician}>Save Changes</ReactBootStrap.Button>
                        </ReactBootStrap.Row>


                </ReactBootStrap.Container>



                <ReactBootStrap.Container id="requestsPage">
                    {orders.map((value, index) => {
                        let addressURL = "https://www.google.com/maps/dir/?api=1&{}origin=Space+Needle+Seattle+WA&destination=" + value.address + "+" + value.address_2;
                        let box = index;
                        let t = index + 'x';
                        let r = index + 'y';
                        return <div className="orders" id= {box}><div  className="justify-content-md-center">
                            <h5 id ='maps'><strong>{value.firstName} {value.lastName}</strong></h5>
                            <h6 className='title'>Address: </h6><h6 className='content'>{value.address}, {value.city}, {value.zip}</h6> 
                            <h6 className='title'>Date:</h6><h6 className='content'>{value.date_service} {value.time_service}</h6> 
                            {/* <h6 className='title'>Time: </h6><h7 className='content'> {value.time_service}</h7> */}
                            <div>
                            {/* <input type="button" value="Accept" className='accept'/><input type="button" value="Decline" className='decline'  onClick={()=>show(t,r)} />    */}
                           <ReactBootStrap.Button variant = 'primary' size='md' className='accept' onClick={() => {updateStatus(value.id, value.email)}}>Accept</ReactBootStrap.Button>
                           <ReactBootStrap.Button variant = 'danger'size="md" className='decline' onClick={()=>show(t,r)} >Decline</ReactBootStrap.Button>
                           <ReactBootStrap.Button variant = 'success' size='md' href={addressURL} className='mapsButton'>Maps</ReactBootStrap.Button>
                            {/* <a href={addressURL}><input type="button" value="Google Maps" className='mapsButton' /></a> */}
                           </div>
                            <div >
                            <textarea rows='2' placeholder="Reason for Decline..." id={t} className="commbox" onChange={(e) => {commentBox = e.target.value}}/>
                            </div>
                            <div>
                            {/* <input type="button" value="submit" className='button' id={r} onClick={()=>hide(box)} /> */}
                            <ReactBootStrap.Button variant = 'danger' size='md' className='buttonSubmit' id={r} onClick={()=>{declineMusicianOrder(value.id)}} >Submit</ReactBootStrap.Button>

                            </div>
                            
                        </div>
                        </div>
                    })}
                </ReactBootStrap.Container>



                <ReactBootStrap.Container className="dashboardContainer" id="schedulePage">
                    <ReactBootStrap.Row className="justify-content-md-center">
                            <div>
                            <h2>Schedule</h2>
                            </div>
                           
                    </ReactBootStrap.Row>
                    <ReactBootStrap.Row className="justify-content-md-center">
                            <div>
                            <Scheduler />
                            </div>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Container>


                
                    <ReactBootStrap.Container className="dashboardContainer" id="statsPage">
                    {accepted.map((value, index) => {
                        let addressURL = "https://www.google.com/maps/dir/?api=1&{}origin=Space+Needle+Seattle+WA&destination=" + value.address + "+" + value.address_2;
                        let box = index;
                        return <div className="orders" id= {box}><div  className="justify-content-md-center">
                            <h5 id ='maps'><strong>{value.firstName} {value.lastName}</strong></h5>
                            <h6 className='title'>Address: </h6><h7 className='content'>{value.address}, {value.city}, {value.zip}</h7> 
                            <h6 className='title'>Date:</h6><h7 className='content'>{value.date_service} {value.time_service}</h7> 
                            {/* <h6 className='title'>Time: </h6><h7 className='content'> {value.time_service}</h7> */}
                            <div>
                            {/* <input type="button" value="Accept" className='accept'/><input type="button" value="Decline" className='decline'  onClick={()=>show(t,r)} />    */}
                           {/* <ReactBootStrap.Button variant = 'primary' size='md' className='accept' onClick={() => {updateStatus(value.id, "Confirmed")}}>Accept</ReactBootStrap.Button>
                           <ReactBootStrap.Button variant = 'danger'size="md" className='decline' onClick={()=>show(t,r)} >Decline</ReactBootStrap.Button>*/}
                           <ReactBootStrap.Button variant = 'success' size='md' href={addressURL} className='mapsButton'>Maps</ReactBootStrap.Button> 
                            {/* <a href={addressURL}><input type="button" value="Google Maps" className='mapsButton' /></a> */}
                           </div>
                            <div >
                            {/* <textarea rows='2' placeholder="Reason for Decline..." id={t} className="commbox" onChange={(e) => {commentBox = e.target.value}}/> */}
                            </div>
                            <div>
                            {/* <input type="button" value="submit" className='button' id={r} onClick={()=>hide(box)} /> */}
                            {/* <ReactBootStrap.Button variant = 'danger' size='md' className='button' id={r} onClick={()=>{declineMusicianOrder(value.id)}} >Submit</ReactBootStrap.Button> */}

                            </div>
                            
                        </div>
                        </div>
                    })}
                    </ReactBootStrap.Container> 

                    {/* <ReactBootStrap.Container className="dashboardContainer" id="incomePage">
                        <ReactBootStrap.Row className="justify-content-md-center">
                            <ReactBootStrap.Col>
                                <h2>Income</h2>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                    </ReactBootStrap.Container>   */}
                   
            </ReactBootStrap.Container>
        </ReactBootStrap.Container>

    )
};

export default MusicianDashboard