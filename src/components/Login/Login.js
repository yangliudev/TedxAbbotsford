import React, { Component, useState, useEffect } from 'react';
import Axios from 'axios';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn
  } from "mdbreact";

function Login() {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post("http://localhost:5000/register", {
            username: usernameReg, 
            password: passwordReg
        }).then((response) => {
            // console.log(response);
        });
    };

    const login = () => {
        Axios.post("http://localhost:5000/login", {
            username: username, 
            password: password
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus("Error Wrong Login");
                // console.log(setLoginStatus)
            } else {
                setLoginStatus("Logged In");
                // console.log(setLoginStatus)
                // TODO: FIX REDIRECT MAKE PROTECTED ROUTE /ADMIN
                window.location.href = "http://localhost:3000/#/main";
            }
        });
    };

    useEffect(()=>{
        Axios.get("http://localhost:5000/login").then((response) => {
            if (response.data.loggedIn == true) {
            setLoginStatus(response.data.user[0].username);
        }
        })
    }, [])

    return (
        <div>
            {/* <h2>Register</h2>
            <label>Username </label>
            <input type="text" onChange={(e) => {setUsernameReg(e.target.value)}}/><br />
            <label>Password </label>
            <input type="text" onChange={(e) => {setPasswordReg(e.target.value)}}/><br />
            <input type="button" value="Register" onClick={register}/> */}
<div>
<MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
                <h3 className="my-3">
                  Login:
                </h3>
              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                Your email
              </label>
              <input
                type="email"
                id="defaultFormEmailEx"
                className="form-control"
                onChange={(e) => {setUsername(e.target.value)}}
              />

              <label
                htmlFor="defaultFormPasswordEx"
                className="grey-text font-weight-light"
              >
                Your password
              </label>
              <input
                type="password"
                id="defaultFormPasswordEx"
                className="form-control"
                onChange={(e) => {setPassword(e.target.value)}}
              />

              <div className="text-center mt-4">
                <MDBBtn color="deep-orange" className="mb-3" type="submit" onClick={login}>
                  Login
                </MDBBtn>
              </div>

              <MDBModalFooter>
                {/* <div className="font-weight-light">
                  <p>Not a member? Sign Up</p>
                  <p>Forgot Password?</p>
                </div> */}
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
</div>
            

            {/* <br/>
            <h2>Login</h2>
            <label>Username </label>
            <input type="text" onChange={(e) => {setUsername(e.target.value)}}/><br />
            <label>Password </label>
            <input type="text" onChange={(e) => {setPassword(e.target.value)}}/><br />
            <input type="button" value="Login" onClick={login}/>
            <h3>{loginStatus}</h3> */}
        </div>
    );
}

export default Login;