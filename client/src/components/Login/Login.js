import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import * as ReactBootStrap from "react-bootstrap";
import './Login.css'

function Login() {
  // const [usernameReg, setUsernameReg] = useState("");
  // const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;

  // const register = () => {
  //   Axios.post("/register", {
  //     username: usernameReg,
  //     password: passwordReg
  //   }).then((response) => {
  //     // console.log(response);
  //   });
  // };

  const login = () => {
    Axios.post("/login", {
      username: username,
      password: password
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus("Error Wrong Login", loginStatus);
        // console.log(setLoginStatus)
      } else {
        setLoginStatus("Logged In", loginStatus);
        // console.log(setLoginStatus)
        // TODO: FIX REDIRECT MAKE PROTECTED ROUTE /ADMIN
        window.location.href = process.env.PUBLIC_URL + "/#/main";
      }
    });
  };

  useEffect(() => {
    Axios.get("/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    })
  }, [])

  return (

   


    <div className='display-login' >

      <ReactBootStrap.Container>
        <ReactBootStrap.Row className="justify-content-md-center">

              <strong><i id='logs'>Login</i></strong>
       
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">

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
            onChange={(e) => { setUsername(e.target.value) }}
          /></ReactBootStrap.Row>
        <ReactBootStrap.Row className="justify-content-md-center">
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
            onChange={(e) => { setPassword(e.target.value) }}
          /></ReactBootStrap.Row>
        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Button
            variant="danger"
            size="lg"
            onClick={login}
          >
            Login
                </ReactBootStrap.Button></ReactBootStrap.Row>
      </ReactBootStrap.Container>

      {/* <h2>Register</h2>
        <label>Username </label>
        <input type="text" onChange={(e) => {setUsernameReg(e.target.value)}}/><br />
        <label>Password </label>
        <input type="text" onChange={(e) => {setPasswordReg(e.target.value)}}/><br />
        <input type="button" value="Register" onClick={register}/>  */}
    </div>

        // <div>
        // <h2>Register</h2>
        // <label>Username </label>
        // <input type="text" onChange={(e) => {setUsernameReg(e.target.value)}}/><br />
        // <label>Password </label>
        // <input type="text" onChange={(e) => {setPasswordReg(e.target.value)}}/><br />
        // <input type="button" value="Register" onClick={register}/> 


        //   <div className="font-weight-light">
        //                   <p>Not a member? Sign Up</p>
        //                   <p>Forgot Password?</p>
        //                 </div> 


        //             <h2>Login</h2>
        //             <label>Username </label>
        //             <input type="text" onChange={(e) => {setUsername(e.target.value)}}/><br />
        //             <label>Password </label>
        //             <input type="text" onChange={(e) => {setPassword(e.target.value)}}/><br />
        //             <input type="button" value="Login" onClick={login}/>
        //             <h3>{loginStatus}</h3> 
        //         </div>



  );
}

export default Login;