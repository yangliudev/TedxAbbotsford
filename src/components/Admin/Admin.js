import React, { Component, useEffect, useState } from "react";
import Axios from "axios";
import MUIDataTable, {ExpandButton} from "mui-datatables";
import "./Admin.css";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CustomToolbarSelect from "./CustomToolbarSelect";

import OrderEdit from "./OrderEdit";

function Test() {

  const [musicianID, setMusicianID] = useState(0);
  const [orderID, setOrderID] = useState(0);

  const submitMusicianOrder = () => {
    Axios.post("http://localhost:5000/musicianOrder/insert", {
      setMusicianID: musicianID,
      setOrderID: orderID
    }).then(() => {
      console.log("sucessful insert");
    })
  };


  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiToolbar: {
          root: {
            backgroundColor: "#d7d4d9",
            "& .MuiTypography-h6": {
              color: "black",
            },
          },
        },
        MuiTableFooter: {
          root: {
            "& .MuiToolbar-root": {
              backgroundColor: "white",
            },
          },
        },
        MUIDataTableBodyCell: {
          root: {
            backgroundColor: "white",
            width: "auto"
          }
        },
      },
    });

  useEffect(() => {
    Axios.get("http://localhost:5000/order/get").then((response) => {
      setOrderList(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:5000/musician/get").then((response) => {
      setMusicianList(response.data);
    });
  }, []);

  const [orderList, setOrderList] = useState([]);
  const [musicianList, setMusicianList] = useState([]);

  const arr = [];
  const arr2 = [];


  var something = (function () {
    var executed = false;
    return function () {
      if (!executed) {
        executed = true;
        for (let index = 0; index < orderList.length; index++) {
          arr.push(Object.values(orderList[index]));
        }
      }
    };
  })();

  var something2 = (function() {
    var executed2 = false;
    return function() {
        if (!executed2) {
          executed2 = true;
            for (let index = 0; index < musicianList.length; index++) {
              arr2.push(Object.values(musicianList[index]))
            }
        }
    };
})();

const [editable, setEditable] = useState([]);
var editableTest = false;


const rowSelect = (row, row2) => {
  if (row2.length === 1) {
   document.getElementById("edit").style.display = "block";
  console.log(row, row2);
  } else {
    document.getElementById("edit").style.display = "none";
  }
}

  // const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  // const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  // const [transitionTime, setTransitionTime] = useState(300);
  // const [selectableRows, setSelectableRows] = useState("none");

  const columnsOrder = [
    "ID",
    "Gift",
    "Occasion",
    "Music Type",
    "# of Musicians",
    "Suprise",
    "First Name",
    "Last Name",
    "Date Service",
    "Time Service",
    "Offered",
    "Number",
    "Email",
    "Address",
    "Location",
    "City",
    "State",
    "Zip",
    {name: "Comments", options: {display: false}},
    {name: "Tips", options: {display: false}}
  ];

  const columnsMusician = ["ID", "First Name", "Last Name", "Address", "Postal Code", "City", "Province", "Phone", "IBAN", "Email", "Training", "Instrument", "Style", "# of Musicians", "Site", "Media"];


  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    // tableBodyHeight: "400px",
    resizableColumns: true,
    draggableColumns: {
      enabled: true,
      transitionTime: 300,
    },
    selectableRows: "single",
    customToolbarSelect: selectedRows => (
      <CustomToolbarSelect selectedRows={selectedRows} data={data[selectedRows.data[0].index]}/>
    ),
    onRowSelectionChange: (currentRowsSelected, rowsSelected) => {rowSelect(currentRowsSelected, rowsSelected)},
  };

  const optionsMusician = {
    filter: true,
    filterType: 'dropdown',
    responsive: "vertical",
    tableBodyHeight: "400px",
    // tableBodyMaxHeight,
    resizableColumns: true,
    draggableColumns: {
      enabled: true,
      transitionTime: 300
    },
    // selectableRows: selectableRows,
    // selectableRows: selectableRows,
  // responsive: 'standard',
    expandableRows: false,
    expandableRowsHeader: false,
    expandableRowsOnClick: true,
    isRowExpandable: (dataIndex, expandedRows) => {

    // Prevent expand/collapse of any row if there are 4 rows expanded already (but allow those already expanded to be collapsed)
      if (expandedRows.data.length > 4 && expandedRows.data.filter(d => d.dataIndex === dataIndex).length === 0) return false;
      return true;
    },
    rowsExpanded: [0, 1],
    renderExpandableRow: (rowData, rowMeta) => {
      const colSpan = rowData.length + 1;
      return (
        <TableRow>
          <TableCell colSpan={colSpan}>
            Custom expandable row option. Data: {JSON.stringify(rowData)}
          </TableCell>
        </TableRow>
      );
    },
    onRowExpansionChange: (curExpanded, allExpanded, rowsExpanded) => console.log(curExpanded, allExpanded, rowsExpanded),
    customToolbarSelect: selectedRows => (
      <CustomToolbarSelect selectedRows={selectedRows} />
    )
  };

  const components = {
    ExpandButton: function(props) {
      if (props.dataIndex === 3 || props.dataIndex === 4) return <div style={{width:'24px'}} />;
      return <ExpandButton {...props} />;
    }
  };

  const data = arr;
  const dataMusician = arr2;

  something();
  something2();

  return (
    <div style={{ marginTop: "30px" }}>
      <div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"Orders"}
          data={data}
          columns={columnsOrder}
          options={options}
        />
      </MuiThemeProvider>
      </div>

      <div id="edit">
        <input placeholder="First Name" type="text" />
        <input placeholder="Last Name" type="text2" />
        <input placeholder="Date Service" type="text3" />
      </div>


      

      {/* <div style={{ marginTop: "30px" }}>

      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable title={"Musicians"} data={dataMusician} columns={columnsMusician} options={optionsMusician} components={components} />
      </MuiThemeProvider>

      </div>

      <div style={{paddingBottom:"500px", marginTop:"20px"}}>

      <label>Musican:</label><input onChange={(e) => { setMusicianID(e.target.value)}}/>
      <label>Order:</label><input onChange={(e) => { setOrderID(e.target.value)}}/>
      <input type="button" value="submit" onClick={submitMusicianOrder} />
      </div> */}
    </div>
    
  );
}

export default Test;
