import React, { useState, useEffect } from "react";
import Axios from "axios";

import AdminDash from "../Admin/Admin";
import MusicianDash from "./MusicianDash";
// import Home from "../Home/Home"


function Main() {
  const [role, setRole] = useState("");

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].role);
      }
    });
  }, []);

return <div>
{role === "admin" && <AdminDash />} 
{role === "musician" && <MusicianDash />} 
{/* {role === "" && <Home />} */}
</div>;
}

export default Main;
