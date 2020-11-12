import React, { Component, useState } from 'react';
import Axios from 'axios';
import * as ReactBootStrap from "react-bootstrap";
import "./Login.css"

function Login() {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const register = () => {
        Axios.post("http://localhost:5000/register", {
            username: usernameReg, 
            password: passwordReg
        }).then((response) => {
            console.log(response);
        });
    };

    const login = () => {
        Axios.post("http://localhost:5000/login", {
            username: username, 
            password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus("Error Wrong Login");
                console.log(setLoginStatus)
            } else {
                setLoginStatus("Logged In");
                console.log(setLoginStatus)
                // TODO: FIX REDIRECT MAKE PROTECTED ROUTE /ADMIN
                window.location.href = "http://localhost:3000/#/admin";
            }
        });
    };

    return (

        <ReactBootStrap.Container className="top-space">
        <div className="bg-display">
            {/* <h2>Register</h2>
            <label>Username </label>
            <input type="text" onChange={(e) => {setUsernameReg(e.target.value)}}/><br />
            <label>Password </label>
            <input type="text" onChange={(e) => {setPasswordReg(e.target.value)}}/><br />
            <input type="button" value="Register" onClick={register}/> */}
<ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col>
            <h1 class="info">Login</h1>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>

        {/* <ReactBootStrap.Row >

            <label>Username </label>
            <input type="text" onChange={(e) => {setUsername(e.target.value)}}/><br />

            </ReactBootStrap.Row>


        <ReactBootStrap.Row>
            <label>Password </label>
            <input type="password" onChange={(e) => {setPassword(e.target.value)}}/><br />
            <input type="button" value="Login" onClick={login}/>
            </ReactBootStrap.Row>
            */}

{/* <div class="card">

<h5 class="card-header info-color white-text text-center py-4">
  <strong>Sign in</strong>
</h5>

<div class="card-body px-lg-5 pt-0">

  <form class="text-center" style="color: #757575;" action="#!"> */}
{/* 
<div id='pad'>

<label for="materialLoginFormEmail">E-mail</label>
      <input type="email" id="materialLoginFormEmail" class="form-control"/>
      
      
      <label for="materialLoginFormPassword">Password</label>
      <input type="password" id="materialLoginFormPassword" class="form-control mb-4"/> */}
    


    <ReactBootStrap.Form.Group controlId="formGridlname" id='pad'>
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="username"
                    onChange={(e) => {setUsername(e.target.value)}}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group controlId="formGridlname" id='pad'>
                  <ReactBootStrap.Form.Control
                    type="password"
                    placeholder="password"
                    onChange={(e) => {setPassword(e.target.value)}}/>
               
                </ReactBootStrap.Form.Group>

       
                <div id='pad'>
                  <ReactBootStrap.Form.Control
                    type="button" value="Login" onClick={login} />
               
                </div>

                


            <h3>{loginStatus}</h3>
            
        </div>
       

        </ReactBootStrap.Container>


    );
}

export default Login;