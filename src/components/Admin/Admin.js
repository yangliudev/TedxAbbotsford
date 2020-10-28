import { MDBDataTable } from 'mdbreact';

import React, { Component, useEffect, useState } from "react";
import Axios from "axios";
import "./Admin.css";

import { CSVLink, CSVDownload } from "react-csv";

import ReactTable from 'react-table';
import "react-table/react-table.css";
import withDraggableColumns from 'react-table-hoc-draggable-columns';
import 'react-table-hoc-draggable-columns/dist/styles.css';

import { MDBDataTableV5 } from 'mdbreact';

import MaterialTable from 'material-table';

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';



const Admin_Dash = () => {
      const [orderList, setOrderList] = useState([]);

      const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
      };


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
      // <div style={{backgroundColor:'grey'}}>
      <div>
    {/* <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
    <CSVLink data={orderList} filename={"client-orders.csv"} className="btn btn-primary">Export CSV</CSVLink>; */}


<MaterialTable
      title="Basic Export Preview"
      icons={tableIcons}
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]}        
      options={{
        exportButton: true
      }}
    />

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
