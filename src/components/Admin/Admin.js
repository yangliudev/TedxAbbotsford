import React, { Component, useEffect, useState } from 'react';
import Axios from 'axios';
import "./Admin.css";

function Admin() {
        const [orderList, setOrderList] = useState([]);

        useEffect(() => {
            Axios.get("http://localhost:5000/order/get").then((response) => {
              // console.log(response.data)
              setOrderList(response.data)
            })
          })
        return (

    <div>
        <h1>Orders</h1>
                    <table id="customers">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gift</th>
                        <th>Occasion</th>
                        <th>Type</th>
                        <th>Number Musicians</th>
                        <th>Surprise</th>
                        <th>Date of Service</th>
                        <th>Time of Service</th>
                        <th>Offered</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Zip</th>
                    </tr>
                    <tr>
                        <td>{orderList.map((val) => { 
                            return <div>{val.firstName}</div>
                        })}</td>
                        <td>{orderList.map((val) => { 
                            return <div>{val.lastName}</div>
                        })}</td>
                        <td>{orderList.map((val) => { 
                            return <div>{val.gift}</div>
                        })}</td>
                        <td>{orderList.map((val) => { 
                            return <div>{val.occasion}</div>
                        })}</td>
                        <td>{orderList.map((val) => { 
                            return <div>{val.type}</div>
                        })}</td>
                        <td>{orderList.map((val) => { 
                            return <div>{val.number_musicians}</div>
                        })}</td>
                        <td>{orderList.map((val) => { 
                            return <div>{val.suprise}</div>
                        })}</td>
                        <td>{orderList.map((val) => { 
                            return <div>{val.date_service}</div>
                        })}</td>
                        <td>{orderList.map((val) => { 
                            return <div>{val.time_service}</div>
                        })}</td>
                        <td>{orderList.map((val) => { 
                            return <div>{val.offered}</div>
                        })}</td>
                        <td>{orderList.map((val) => { 
                            return <div>{val.number}</div>
                        })}</td>
                        <td>{orderList.map((val) => { 
                            return <div>{val.email}</div>
                        })}</td>
                        <td>{orderList.map((val) => { 
                            return <div>{val.address}</div>
                        })}</td>
                        <td>{orderList.map((val) => { 
                            return <div>{val.city}</div>
                        })}</td>
                        <td>{orderList.map((val) => { 
                            return <div>{val.zip}</div>
                        })}</td>
                    </tr>
                    </table>

                    
        {/* {orderList.map((val) => {
                return <div> 
                    <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Testing</th>
                    </tr>
                    <tr>
                        <th>{val.firstName}</th>
                        <th>{val.lastName}</th>
                        <th>{val.lastName}</th>
                    </tr>
                    </table>

                    </div>
              })} */}
    </div>
        );
    }

export default Admin;