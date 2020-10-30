import React, { Component, useState, useEffect } from "react";

import OrderDataService from "../../services/OrderService";
import axios from "axios";

const OrdersList = () => {
  const [orders, setOrders] = useState();

  useEffect(() => {
    retrieveOrder();
  }, []);

  const retrieveOrder = () => {
    OrderDataService.getAll()
      .then((response) => {
        //orders = response.data;
        setOrders(response.data);
        console.log("orders = " + JSON.stringify(orders));
      })
      .catch((e) => {
        console.log(e);
      });
    //return orders;
  };

  let address = "";
  if (orders != undefined && orders.length > 0) {
    address = orders[orders.length - 1].address1;
  }

  axios
    .get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: {
        address: { address },
        key: "AIzaSyCAQOQjlQmx_pyGsWyj87F0X8QbAwcbDvg",
      },
    })
    .then(function (response) {
      // Log full response
      console.log(response);

      var lat = response.data.results[0].geometry.location.lat;
      var lon = response.data.results[0].geometry.location.lng;
      console.log(lat);
      console.log(lon);
      localStorage.setItem("lat",lat);
      localStorage.setItem("lon",lon);
    });

  return (
    <div id="block2">
      <h1>Customer Address: {address}</h1>
    </div>
  );
};

export default OrdersList;
