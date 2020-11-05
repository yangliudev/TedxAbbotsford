import React, { Component, useState, useEffect } from "react";
import Axios from "axios";






function MusicianDash() {

    const [user, setUser] = useState("");
    const [musicianDetails, setMusicianDetails] = useState("");

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
        setMusicianDetails(JSON.stringify(response.data))
        getOrders(response.data[0].id)
        console.log(response);
    });
  }, []);

  const getOrders = (id) => {
    Axios.get(`http://localhost:5000/match/orders/${id}`).then((response) => {
        console.log(response.data);
    });
  };



        return (
            <div>
                {user}
                {musicianDetails}
            </div>
        );
}

export default MusicianDash;