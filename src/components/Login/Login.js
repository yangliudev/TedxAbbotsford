import React, { Component, useState } from 'react';
import Axios from 'axios';

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
        <div>
            {/* <h2>Register</h2>
            <label>Username </label>
            <input type="text" onChange={(e) => {setUsernameReg(e.target.value)}}/><br />
            <label>Password </label>
            <input type="text" onChange={(e) => {setPasswordReg(e.target.value)}}/><br />
            <input type="button" value="Register" onClick={register}/> */}

            <br/>
            <h2>Login</h2>
            <label>Username </label>
            <input type="text" onChange={(e) => {setUsername(e.target.value)}}/><br />
            <label>Password </label>
            <input type="text" onChange={(e) => {setPassword(e.target.value)}}/><br />
            <input type="button" value="Login" onClick={login}/>
            <h3>{loginStatus}</h3>
        </div>
    );
}

export default Login;