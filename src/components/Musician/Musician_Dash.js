import React, { Component, useEffect, useState } from "react";
import Axios from "axios";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

function Musician_Dash() {

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
          Axios.get("http://localhost:5000/musician/get").then((response) => {
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
  
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("400px");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
    const [transitionTime, setTransitionTime] = useState(300);
    const [selectableRows, setSelectableRows] = useState('none');
  
  
    const columns = ["ID", "First Name", "Last Name", "Address", "Postal Code", "City", "Province", "Phone", "IBAN", "Email", "Training", "Instrument", "Style", "# of Musicians", "Site", "Media"];
  
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
  
              <MUIDataTable title={"Musicians"} data={data} columns={columns} options={options} />
              </MuiThemeProvider>
              <a href="/#/admin">Orders</a>
              </div>
    );
  }

export default Musician_Dash;