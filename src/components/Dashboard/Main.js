import React, { Component, useState, useEffect } from "react";
import Axios from "axios";

import AdminDash from "../Admin/Admin";
import MusicianDash from "../Musician_Dash/Map";


function Main() {
  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("http://localhost:5000/login").then((response) => {
      if (response.data.loggedIn == true) {
        setRole(response.data.user[0].role);
      }
    });
  }, []);

return <div>{role == "admin" && <AdminDash />} {role == "musician" && <MusicianDash />}</div>;
}

export default Main;
