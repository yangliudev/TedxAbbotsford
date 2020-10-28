import { MDBDataTable } from 'mdbreact';

import React, { Component, useEffect, useState } from "react";
import Axios from "axios";
import "./Admin.css";

import { CSVLink, CSVDownload } from "react-csv";

import ReactTable from 'react-table';
import "react-table/react-table.css";
import withDraggableColumns from 'react-table-hoc-draggable-columns';
import 'react-table-hoc-draggable-columns/dist/styles.css';

// import { MDBDataTableV5 } from 'mdbreact';

const Admin_Dash = () => {
      const [orderList, setOrderList] = useState([]);


  useEffect(() => {
    Axios.get("http://localhost:5000/order/get").then((response) => {
      // console.log(response.data)
      setOrderList(response.data);
    });
  });


  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'First Name',
        field: 'firstName',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Last Name',
        field: 'lastName',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Type',
        field: 'type',
        sort: 'asc',
        width: 200
      },
      {
        label: '# of Musicians',
        field: 'number_musicians',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Suprise',
        field: 'suprise',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Date Service',
        field: 'date_service',
        sort: 'asc',
        width: 100
      }
    ],
    rows: orderList
  };

  return (
      <div style={{backgroundColor:'grey'}}>
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
    <CSVLink data={orderList} filename={"client-orders.csv"} className="btn btn-primary">Export CSV</CSVLink>;

    </div>
  );
}

export default Admin_Dash;



// import React, { Component, useEffect, useState } from "react";
// import Axios from "axios";
// import "./Admin.css";

// import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';


// function Admin_Dash() {
//   const [orderList, setOrderList] = useState([]);

//   useEffect(() => {
//     Axios.get("http://localhost:5000/order/get").then((response) => {
//       // console.log(response.data)
//       setOrderList(response.data);
//     });
//   });



//   return (



//     <div>
//       <h1>Orders</h1>
//       <table id="customers">
//         <tr>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Gift</th>
//           <th>Occasion</th>
//           <th>Type</th>
//           <th>Number Musicians</th>
//           <th>Surprise</th>
//           <th>Date of Service</th>
//           <th>Time of Service</th>
//           <th>Offered</th>
//           <th>Number</th>
//           <th>Email</th>
//           <th>Address</th>
//           <th>City</th>
//           <th>Zip</th>
//         </tr>
//         <tr>
//           <td>
//             {orderList.map((val) => {
//               return <div>{val.firstName}</div>;
//             })}
//           </td>
//           <td>
//             {orderList.map((val) => {
//               return <div>{val.lastName}</div>;
//             })}
//           </td>
//           <td>
//             {orderList.map((val) => {
//               return <div>{val.gift}</div>;
//             })}
//           </td>
//           <td>
//             {orderList.map((val) => {
//               return <div>{val.occasion}</div>;
//             })}
//           </td>
//           <td>
//             {orderList.map((val) => {
//               return <div>{val.type}</div>;
//             })}
//           </td>
//           <td>
//             {orderList.map((val) => {
//               return <div>{val.number_musicians}</div>;
//             })}
//           </td>
//           <td>
//             {orderList.map((val) => {
//               return <div>{val.suprise}</div>;
//             })}
//           </td>
//           <td>
//             {orderList.map((val) => {
//               return <div>{val.date_service}</div>;
//             })}
//           </td>
//           <td>
//             {orderList.map((val) => {
//               return <div>{val.time_service}</div>;
//             })}
//           </td>
//           <td>
//             {orderList.map((val) => {
//               return <div>{val.offered}</div>;
//             })}
//           </td>
//           <td>
//             {orderList.map((val) => {
//               return <div>{val.number}</div>;
//             })}
//           </td>
//           <td>
//             {orderList.map((val) => {
//               return <div>{val.email}</div>;
//             })}
//           </td>
//           <td>
//             {orderList.map((val) => {
//               return <div>{val.address}</div>;
//             })}
//           </td>
//           <td>
//             {orderList.map((val) => {
//               return <div>{val.city}</div>;
//             })}
//           </td>
//           <td>
//             {orderList.map((val) => {
//               return <div>{val.zip}</div>;
//             })}
//           </td>
//         </tr>
//       </table>
//     </div>
//   );
// }

// export default Admin_Dash;
