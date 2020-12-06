import React, { useState, useEffect } from "react";
import Axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import "./MusicianDashboard.css";
import ScheduleSelector from 'react-schedule-selector';
// import { Box } from "@material-ui/core";
// import MusicianRequests from "./MusicianRequests";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function MusicianDashboard() {

    const [state, setSchedule] = useState({});
    const [mon, setMon] = useState("");
    const [tue, setTue] = useState("");
    const [wed, setWed] = useState("");
    const [thu, setThu] = useState("");
    const [fri, setFri] = useState("");
    const [sat, setSat] = useState("");
    const [sun, setSun] = useState("");

    const handleChange = newSchedule => {
        setSchedule({ schedule: newSchedule });
      }

      const seperate = () => {

        let monx = [];
        let tuex = [];
        let wedx = [];
        let thux = [];
        let frix = [];
        let satx = [];
        let sunx = [];
        let dateObj = [];
    
    
    
        for (let index = 0; index < state.schedule.length; index++) {
          if (state.schedule[index].getDate() === 2) {
            let monHour = state.schedule[index].getHours() + ":" + state.schedule[index].getMinutes()
            monx.push(monHour);
    
          } if (state.schedule[index].getDate() === 3) {
            let tueHour = state.schedule[index].getHours() + ":" + state.schedule[index].getMinutes()
            tuex.push(tueHour);
    
          } if (state.schedule[index].getDate() === 4) {
            let wedHour = state.schedule[index].getHours() + ":" + state.schedule[index].getMinutes()
            wedx.push(wedHour);
    
    
          } if (state.schedule[index].getDate() === 5) {
            let thuHour = state.schedule[index].getHours() + ":" + state.schedule[index].getMinutes()
            thux.push(thuHour);
    
          } if (state.schedule[index].getDate() === 6) {
            let friHour = state.schedule[index].getHours() + ":" + state.schedule[index].getMinutes()
            frix.push(friHour);
    
          } if (state.schedule[index].getDate() === 7) {
            let satHour = state.schedule[index].getHours() + ":" + state.schedule[index].getMinutes()
            satx.push(satHour);
    
          } if (state.schedule[index].getDate() === 8) {
            let sunHour = state.schedule[index].getHours() + ":" + state.schedule[index].getMinutes()
            sunx.push(sunHour);
          }
        }
    
        // dateObj.push(availability);
        // console.log(dateObj);
    
        setMon(JSON.stringify(monx)); 
        setTue(JSON.stringify(tuex));
        setWed(JSON.stringify(wedx));
        setThu(JSON.stringify(thux));
        setFri(JSON.stringify(frix));
        setSat(JSON.stringify(satx));
        setSun(JSON.stringify(sunx));
        // setDate_time(JSON.stringify(dateObj));
        // console.log(date_time);
        if (state.schedule.length === 0) {
          alert("nothing has been selected")
        } else {
             document.getElementById("musDashSched").style.display = "initial";
        }
      }

      const updateMusicianSchedule = () => {

        Axios.put("/musicianSchedule/update", {
            musicianID: musicianDetails.id,
            monday: mon,
            tuesday: tue,
            wednesday: wed,
            thursday: thu,
            friday: fri,
            saturday: sat,
            sunday: sun
        }).then(() => {
            console.log("sucessful update");
        });
        alert("Schedule has been updated!")
        window.location.reload();

    };

    const [user, setUser] = useState("");
    const [orders, setOrders] = useState([]);
    const [accepted, setAccepted] = useState([]);


    const [musicianDetails, setMusicianDetails] = useState({});

    var firstName = musicianDetails.firstName;
    var lastName = musicianDetails.lastName;
    var address = musicianDetails.address;
    var phone = musicianDetails.phone;
    var email = musicianDetails.email;

    var etransfer = musicianDetails.etransfer;
    var postalCode = musicianDetails.postalCode;
    var province = musicianDetails.province;
    var city = musicianDetails.city;

    var training = musicianDetails.training;
    var numberMusicians = musicianDetails.number_musicians;
    

    
    var commentBox = "";

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [address, setAddress] = useState("");
    // const [phone, setPhone] = useState("");
    // const [email, setEmail] = useState("");
    // const [training, setTraining] = useState("");

    // const [postalCode, setPostalCode] = useState("");
    // const [city, setCity] = useState("");
    // const [province, setProvince] = useState("");
    // const [etransfer, setEtransfer] = useState("");

    // var [address, setAddress] = useState(musicianDetails.address);
    // const [phone, setPhone] = useState(musicianDetails.phone);
    // const [email, setEmail] = useState(musicianDetails.email);
    // // const [password, setPassword] = useState("");
    // // const [confirmpassword, setConfirmPassword] = useState("");
    // const [training, setTraining] = useState(musicianDetails.training);
    // // const [style, setStyle] = useState("");
    // const [group, setGroup] = useState(musicianDetails.number_musicians);


    const updateMusician = () => {
        // if (firstName !
        console.log(musicianDetails.city);

        Axios.put("/musician/update", {
            musicianID: musicianDetails.id,
            musicianFirstName: firstName,
            musicianLastName: lastName,
            musicianAddress: address,
            musicianPhone: phone,
            musicianEmail: email,
            musicianTraining: training,
            musicianNumber: numberMusicians,
            musicianEtransfer: etransfer,
            musicianPostalCode: postalCode,
            musicianProvince: province,
            musicianCity: city
        }).then(() => {
            console.log("sucessful update");
        });
        window.location.reload();

    };

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("/login").then((response) => {
            if (response.data.loggedIn === true) {
                setUser(response.data.user[0].username);
            }
        });
    }, []);

    const logout = () => {
        Axios.get("/logout").then((response) => {
                setUser("");
                console.log(user)
        });
    };

    useEffect(() => {
        Axios.get("/match/musician", {
            musicianEmail: user
        }).then((response) => {
            setMusicianDetails(response.data[0])
            getOrders(response.data[0].id)

            // console.log(response.data[0]);
        });
    }, [user]);

    //   useEffect(() => {
    //       if (musicianDetails)
    //     setLastName(musicianDetails.lastName)
    //   }, []);

    const getOrders = (id) => {
        Axios.get(`/match/orders/${id}`).then((response) => {
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
        Axios.put("/orderStatus/update", {
            orderID: id,
            status: "Confirmed",
        }).then(() => {
          alert("sucessful insert");
        });
        Axios.put("/musicianOrders/update", {
            orderID: id,
            musicianID: musicianDetails.id,
            status: "Confirmed",
            comment: commentBox,
            orderEmail: email
        }).then(() => {
            console.log("sucessful insert");
        });
        window.location.reload();
        // window.location.reload();
      }


    const declineMusicianOrder = (id) => {
    Axios.put("/musicianOrders/update", {
        orderID: id,
        musicianID: musicianDetails.id,
        status: "Declined",
        comment: commentBox,
        orderEmail: ""
    }).then(() => {
        console.log("sucessful insert");
    });
    Axios.put("/orderStatus/update", {
        orderID: id,
        status: "Declined",
    }).then(() => {
        console.log("sucessful insert");
        });
    window.location.reload();
    }


    function show(t,r) {
        var textArea = document.getElementById(t);
        textArea.style.display = "initial"; 
        var but = document.getElementById(r);
        but.style.display = "initial"; 
    }

    // function hide(p) {
       
    //     var button = document.getElementById(p);
    //     button.style.display = "none";        
    // }

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
                                    <a href="/#/"><p className="navText" onClick={logout}><ExitToAppIcon />LOGOUT</p></a>
                                    {/* <div style={{marginLeft:"auto"}}><input type="button" value="log out" onClick={logout} /></div> */}
                                    {/* <a href="/#/"><input type="button" value="log out" onClick={logout}/></a> */}


                                        {/* <p className="navText" id="income" onClick={(e) => { active5(); showIncome() }}>INCOME</p> */}
                                       
                                </ReactBootStrap.Nav>
                            </ReactBootStrap.Navbar.Collapse>
                        </ReactBootStrap.Navbar>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>



                <ReactBootStrap.Container className="dashboardContainer" id="profilePage">

                    <ReactBootStrap.Row>
                        <ReactBootStrap.Col>
                            <h2 style={{textAlign:"center"}}>Account Settings</h2>
                            <h6 className="lineText" style={{textAlign:"left"}}>ACCOUNT PREFERENCES</h6>
                            <hr className="line" />
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="field_align">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">First Name: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.firstName} onChange={(e) => { musicianDetails.firstName = e.target.value }} /></ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="field_align">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">Last Name: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.lastName} onChange={(e) => {musicianDetails.lastName = e.target.value}} /></ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="field_align">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">Phone: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.phone} onChange={(e) => { musicianDetails.phone = e.target.value }} /></ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="field_align">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">Email: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.email} onChange={(e) => { musicianDetails.email = e.target.value }} /></ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="field_align">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">Address: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.address} onChange={(e) => { musicianDetails.address = e.target.value }} /></ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="field_align">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">City: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto">
                            {/* <input type="text" placeholder={musicianDetails.city} onChange={(e) => { musicianDetails.city = e.target.value }} /> */}

                        <select style={{width:"170px", height:"35px"}} onChange={(e) => { musicianDetails.city = e.target.value }}>
                            <option value="" disabled selected>Select your option</option>
                            <option value="Vancouver">Vancouver</option>
                            <option value="Surrey">Surrey</option>
                            <option value="Burnaby">Burnaby</option>
                            <option value="Richmond">Richmond</option>
                            <option value="Port Coquitlam">Port Coquitlam</option>
                            <option value="North Vancouver">North Vancouver</option>
                            <option value="Langley">Langley</option>
                            <option value="Delta">Delta</option>
                            <option value="New Westminster">New Westminster</option>
                        </select>

                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="field_align">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">Postal Code: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.postalCode} onChange={(e) => { musicianDetails.postalCode = e.target.value }} /></ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    

                    <ReactBootStrap.Row style={{ marginTop: "10px" }}>
                        <ReactBootStrap.Col style={{textAlign:"left"}}>
                            <h6 className="lineText" >MUSICAL PREFERENCES</h6>
                            <hr className="line" />
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="field_align">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">Training: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.training} onChange={(e) => { musicianDetails.training = e.target.value }} /></ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    {/* <ReactBootStrap.Row className="field_align">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">Style: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.style} /></ReactBootStrap.Col>
                    </ReactBootStrap.Row> */}

                    <ReactBootStrap.Row className="field_align">
                        <ReactBootStrap.Col md="auto">
                            <p className="profileHeader">Solo/Duo: </p>
                        </ReactBootStrap.Col>
                        <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.number_musicians} onChange={(e) => { musicianDetails.number_musicians = e.target.value }}/></ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Row className="justify-button">
                        <input type="button" onClick={updateMusician} value="Save Changes" className="musician_dash_button"/>
                        {/* <ReactBootStrap.Button variant="primary"  size="md" onClick={updateMusician}>Save Changes</ReactBootStrap.Button> */}
                        </ReactBootStrap.Row>


                </ReactBootStrap.Container>



                <ReactBootStrap.Container id="requestsPage">
                    {orders.map((value, index) => {
                        let addressURL = "https://www.google.com/maps/dir/?api=1&{}origin=Space+Needle+Seattle+WA&destination=" + value.address + "+" + value.address_2;
                        let box = index;
                        let t = index + 'x';
                        let r = index + 'y';

                        let acceptComment = "comment"+index;
                        let acceptButton = "accept"+index;
                        return <div className="orders" id= {box}><div  className="justify-content-md-center">
                            <h5 id ='maps'><strong>{value.firstName} {value.lastName}</strong></h5>
                            <h6 className='title'>Address: </h6><h6 className='content'>{value.address}, {value.city}, {value.zip}</h6> 
                            <h6 className='title'>Date:</h6><h6 className='content'>{value.date_service} {value.time_service}</h6> 
                            {/* <h6 className='title'>Time: </h6><h7 className='content'> {value.time_service}</h7> */}
                            <div>
                            {/* <input type="button" value="Accept" className='accept'/><input type="button" value="Decline" className='decline'  onClick={()=>show(t,r)} />    */}
                           {/* <ReactBootStrap.Button variant = 'success' size='md' className='accept' onClick={() => {updateStatus(value.id, value.email)}}>Accept</ReactBootStrap.Button> */}
                           <ReactBootStrap.Button variant = 'success' size='md' className='accept' onClick={() => {show(acceptComment, acceptButton); t = acceptComment; r = acceptButton}}>Accept</ReactBootStrap.Button>
                           <ReactBootStrap.Button variant = 'danger' size="md" className='decline' onClick={()=> {show(t,r); acceptComment = t; acceptButton = r}} >Decline</ReactBootStrap.Button>
                           <ReactBootStrap.Button variant = 'primary' size='md' className='mapsButton' onClick={()=>{window.open(addressURL)}}>Maps</ReactBootStrap.Button>
                            {/* <a href={addressURL}><input type="button" value="Google Maps" className='mapsButton' /></a> */}
                           </div>
                            <div >
                            <textarea rows='2' placeholder="Reason for Decline..." id={t} className="commbox" onChange={(e) => {commentBox = e.target.value}}/>
                            </div>
                            <div >
                            <textarea rows='2' placeholder="Comments..." id={acceptComment} className="commbox" onChange={(e) => {commentBox = e.target.value}}/>
                            </div>
                            <div>
                            {/* <input type="button" value="submit" className='button' id={r} onClick={()=>hide(box)} /> */}
                            <ReactBootStrap.Button variant = 'success' size='md' className='buttonSubmit' id={r} onClick={()=>{declineMusicianOrder(value.id)}} >Submit</ReactBootStrap.Button>
                            <ReactBootStrap.Button variant = 'success' size='md' className='buttonSubmit' id={acceptButton} onClick={()=>{updateStatus(value.id, value.email)}} >Submit</ReactBootStrap.Button>

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
                            {/* <Scheduler /> */}
                            <div className='calender'>

            <ScheduleSelector
              selection={state.schedule}
              numDays={7}
              minTime={9}
              maxTime={21}
              hourlyChunks={2}
              startDate={new Date('Monday Nov 02 2020 00:00:00')}
              dateFormat="ddd"
              timeFormat='h:mma'
              hoveredColor='none'
              onChange={handleChange}
              hoveredColor='#4d6b0f'
              unselectedColor='#81A92F'
              selectedColor='#4d6b0f'
            />
          </div>
          <div>
          <input type="button" value="Save Schedule" className="cal_button" style={{marginTop:"30px"}} onClick={seperate}/>
          <input type="button" value="Submit" className="sub_button" id="musDashSched" onClick={updateMusicianSchedule}/></div>
          {/* <input type="button" onClick={()=>{console.log(musicianDetails)}}/> */}
                            </div>
                    </ReactBootStrap.Row>
                </ReactBootStrap.Container>


                
                    <ReactBootStrap.Container className="dashboardContainer" id="statsPage">
                    {accepted.map((value, index) => {
                        let addressURL = "https://www.google.com/maps/dir/?api=1&{}origin=Space+Needle+Seattle+WA&destination=" + value.address;
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
                           <ReactBootStrap.Button variant = 'success' size='md' className='mapsButton' onClick={()=>{window.open(addressURL)}}>Maps</ReactBootStrap.Button> 
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