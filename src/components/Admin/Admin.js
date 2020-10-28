import { MDBDataTable } from 'mdbreact';

import React, { Component, useEffect, useState } from "react";
import Axios from "axios";
import "./Admin.css";

// import { MDBDataTableV5 } from 'mdbreact';

const Admin_Dash = () => {
      const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/order/get").then((response) => {
      // console.log(response.data)
      setOrderList(response.data);
    });
  });

  function convertArrayOfObjectsToCSV(args) {  
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';

    keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });

    return result;
}

  function downloadCSV(args) {  
    var data, filename, link;
    var csv = convertArrayOfObjectsToCSV({
        data: orderList
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
}


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
    <input type="button" value="Download CSV" onClick={downloadCSV({ filename: "orders.csv" })}/>
    </div>
    // <MDBDataTableV5 hover data={orderList} exportToCSV proSelect />
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
