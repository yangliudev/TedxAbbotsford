import React, { useEffect, useState } from "react";
import Axios from "axios";
import MUIDataTable from "mui-datatables";
import "./Admin.css"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

 
function Test() {

  const getMuiTheme = () =>
  createMuiTheme({
    overrides: {
      MuiToolbar: {
        root: {
          backgroundColor: '#d7d4d9',
          '& .MuiTypography-h6': {
            color: 'black'
          }
        },
      },
      MuiTableFooter: {
        root: {
          '& .MuiToolbar-root': {
            backgroundColor: 'white',
          },
        },
      },
    },
  });

    useEffect(() => {
        Axios.get("http://localhost:5000/order/get").then((response) => {
          setOrderList(response.data);
        });
      }, []);
      
    const [orderList, setOrderList] = useState([]);
    const arr = [];

    var something = (function() {
      var executed = false;
      return function() {
          if (!executed) {
              executed = true;
              for (let index = 0; index < orderList.length; index++) {
                arr.push(Object.values(orderList[index]))
              }
          }
      };
  })();

  // const [responsive, setResponsive] = useState("vertical");
  // const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  // const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  // const [transitionTime, setTransitionTime] = useState(300);
  // const [selectableRows, setSelectableRows] = useState('none');

  const [responsive] = useState("vertical");
  const [tableBodyHeight] = useState("400px");
  const [tableBodyMaxHeight] = useState("");
  const [transitionTime] = useState(300);
  const [selectableRows] = useState('none');


  const columns = ["ID", "Gift", "Occasion", "Music Type", "# of Musicians", "Suprise", "First Name", "Last Name", "Date Service", "Time Service", "Offered", "Number", "Email", "Address", "Location", "City", "State", "Zip", "Comments", "Tips"];

  const options = {
    filter: true,
    filterType: 'dropdown',
    responsive,
    tableBodyHeight,
    tableBodyMaxHeight,
    resizableColumns: true,
    draggableColumns: {
      enabled: true,
      transitionTime
    },
    selectableRows: selectableRows,
  };


    const data = arr;
    something()
    

  return (
    <div style={{marginTop:"30px"}}>
            <MuiThemeProvider theme={getMuiTheme()}>

            <MUIDataTable title={"Orders"} data={data} columns={columns} options={options} />
            </MuiThemeProvider>
            </div>
  );
}

export default Test;












// import React, { Component } from 'react';
// import MUIDataTable from "mui-datatables";

// class Test extends Component {
//     render() {
//         const columns = ["Name", "Company", "City", "State"];

// const data = [
//  ["Joe James", "Test Corp", "Yonkers", "NY"],
//  ["John Walsh", "Test Corp", "Hartford", "CT"],
//  ["Bob Herm", "Test Corp", "Tampa", "FL"],
//  ["James Houston", "Test Corp", "Dallas", "TX"],
// ];

// const options = {
// //   filterType: 'checkbox',
// // resizableColumns: true,
// //   draggableColumns: {enabled: "true", transitionTime: 5},
// //   expandableRows: true,
// //   fixedSelectColumn: true
// responsive: 'stacked',
//       filterType: 'dropdown',
//       pagination: true,
//       expandableRows: false,
//       resizableColumns: false,
//       selectableRows: true,
//       caseSensitive: false,
//       serverSide: false,
//       rowHover: true,
//       fixedHeader: true,
//       elevation: 4,
//       rowsPerPage: 10,
//       rowsPerPageOptions: [10, 15, 100],
//       filter: true,
//       sortFilterList: true,
//       sort: true,
//       search: true,
//       print: true,
//       viewColumns: true,
//       download: true,
//       downloadOptions: {
//         filename: 'tableDownload.csv',
//         separator: ',',
//       },


// };
//         return (
//             <div style={{backgroundColor:"red"}}>
//                 <MUIDataTable
//   title={"Employee List"}
//   data={data}
//   columns={columns}
//   options={options}/>
                
//             </div>
//         );
//     }
// }

// export default Test;