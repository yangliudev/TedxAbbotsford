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
import * as ReactBootStrap from "react-bootstrap";


import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterIcon from "@material-ui/icons/FilterList";
import EditIcon from '@material-ui/icons/Edit';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import HomeIcon from '@material-ui/icons/Home';
// import { withStyles } from "@material-ui/core/styles";

function Test() {

  const [musicianID, setMusicianID] = useState(0);
  const [orderID, setOrderID] = useState(0);

  const submitMusicianOrder = (musID) => {
    // console.log(musID, orderID);
    Axios.post("http://localhost:5000/musicianOrder/insert", {
      setMusicianID: musID,
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

  const getMusicians = (id) => {
    Axios.get(`http://localhost:5000/match/musicians/${id}`).then((response) => {
        // console.log(Object.values(response.data[0]));
        // setMatchedMusicians(Object.values(response.data));
        var matched = []
        for (let index = 0; index < response.data.length; index++) {
          matched.push(Object.values(response.data[index]));
        }
        setMatchedMusicians(matched)
    });
  };

  const [orderList, setOrderList] = useState([]);
  const [musicianList, setMusicianList] = useState([]);
  const [matchedMusicians, setMatchedMusicians] = useState([{}]);

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


var rowEdit = [];
var rowSelectMusician = 0;

var editFirstName = rowEdit.firstName;
var editLastName = rowEdit.lastName;
var editDate = rowEdit.date_service;
var editTime = rowEdit.time_service;
var editEmail = rowEdit.email;
var editAddress = rowEdit.address;

const saveRowEdit = () => {
  console.log(editFirstName)
}

const testing = () => {
  document.getElementById("edit").style.display = "block";
  console.log(editRow);
}

const [editRow, setEditRow] = useState([]);

const rowSelect = (row) => {
  // console.log(row);
  if (row.length === 1) {
    rowEdit = orderList[row[0].dataIndex];
    document.getElementById("edit").style.display = "none";
  } else {
    document.getElementById("edit").style.display = "none";
  }
}

const setMusician = (row) => {
  rowSelectMusician = matchedMusicians[row[0].dataIndex][0];
  // setMusicianID(matchedMusicians[row[0].dataIndex][0]);
}

const ToolbarAssign = () => {
  // console.log(rowSelectMusician);
  // setMusicianID(rowSelectMusician);
  submitMusicianOrder(rowSelectMusician);
  document.getElementById("orders").style.display = "block";
  document.getElementById("matched").style.display = "none";
  // console.log(musicianID, rowSelectMusician);
}

const displayMusicians = () => {
  setMatchedMusicians(dataMusician);
  document.getElementById("orders").style.display = "none";
  document.getElementById("edit").style.display = "none";
  document.getElementById("musiciansTable").style.display = "block";
}

const displayOrders = () => {
  // setMatchedMusicians(dataMusician);
  document.getElementById("musiciansTable").style.display = "none";
  document.getElementById("edit").style.display = "none";
  document.getElementById("orders").style.display = "block";
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

  const columnsMusician = ["ID", "First Name", "Last Name", "Address", "Postal Code", "City", "Province", "Phone", "IBAN", "Email", "Training", {name: "Instrument", options: {display: false}}, {name: "Style", options: {display: false}}, "# of Musicians", "Site", "Media"];


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
    customToolbarSelect: (selectedRows, rowsSelected) => (
      // <CustomToolbarSelect selectedRows={selectedRows} data={data[selectedRows.data[0].index]} test={saveRowEdit}/>
      <div className={"custom-toolbar-select"}>
        <Tooltip title={"Match"}><IconButton onClick={() => {getMusicians(rowEdit.id); setOrderID(rowEdit.id); document.getElementById("orders").style.display = "none"; document.getElementById("matched").style.display = "block"; document.getElementById("edit").style.display = "none";
}}><MusicNoteIcon /></IconButton></Tooltip>
        <Tooltip title={"Edit"}><IconButton onClick={() => {testing(); setEditRow(rowEdit)}}><EditIcon /></IconButton></Tooltip>
        <Tooltip title={"Delete"}><IconButton><DeleteIcon/></IconButton></Tooltip>
      </div>
    ),
    onRowSelectionChange: (rowsSelected) => {rowSelect(rowsSelected)
    },
    customToolbar: () => (
     <Tooltip title={"Musicians"}><IconButton onClick={displayMusicians}><NavigateNextIcon /></IconButton></Tooltip>
    
  ),
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
    selectableRows: "single",
    customToolbarSelect: selectedRows => (
      <div className={"custom-toolbar-select"}>
        <Tooltip title={"Assign"}><a href="/#/admin"><IconButton style={{marginRight: "20px"}} onClick={ToolbarAssign}><CheckCircleIcon /></IconButton></a></Tooltip>
        {/* <Tooltip title={"Edit"}><IconButton onClick={() => {testing(); setEditRow(rowEdit)}}><EditIcon /></IconButton></Tooltip> */}
        {/* <Tooltip title={"Delete"}><IconButton><DeleteIcon/></IconButton></Tooltip> */}
      </div>
    ),
    customToolbar: () => (
        <span><Tooltip title={"View All"}><IconButton onClick={() => {setMatchedMusicians(dataMusician)}}><VisibilityIcon /></IconButton></Tooltip>
        <Tooltip title={"Home"}><IconButton onClick={() => {document.getElementById("matched").style.display = "none"; document.getElementById("orders").style.display = "block";}}><HomeIcon /></IconButton></Tooltip></span>
    ),
    onRowSelectionChange: (rowsSelected) => {setMusician(rowsSelected)},
  };
  // setMusicianID(matchedMusicians[rowsSelected[0].dataIndex][0])

  const optionsMusician2 = {
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
    selectableRows: "single",
    customToolbar: () => (
        <Tooltip title={"Orders"}><IconButton onClick={displayOrders}><NavigateBeforeIcon /></IconButton></Tooltip>
    ),

  };

  const data = arr;
  const dataMusician = arr2;

  something();
  something2();


  return (

    
    <div style={{ marginTop: "30px" }}>

      <div id="orders"> 
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"Orders"}
          data={data}
          columns={columnsOrder}
          options={options}
        />
      </MuiThemeProvider>
      </div>
      {/* <input type="button" onClick={()=> {console.log(musicianID); console.log(orderID)}}/> */}

      <div id="edit">
        <input placeholder={editRow.firstName} type="text" onChange={(e) => {editFirstName = e.target.value}}/>
        <input placeholder={editRow.lastName} type="text" onChange={(e) => {editLastName = e.target.value}}/>
        <input placeholder={editRow.time_service} type="text" onChange={(e) => {editTime = e.target.value}}/>
        <input placeholder={editRow.date_service} type="text" onChange={(e) => {editDate = e.target.value}}/>
        <input placeholder={editRow.email} type="text" onChange={(e) => {editEmail = e.target.value}}/>
        <input placeholder={editRow.address} type="text" onChange={(e) => {editAddress = e.target.value}}/>
        <input value="save" type="button" onClick={saveRowEdit}/>
      </div>


      

      <div style={{ marginTop: "30px" }} id="matched">

      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable title={"Musicians"} data={matchedMusicians} columns={columnsMusician} options={optionsMusician} />
      </MuiThemeProvider>

      </div>

      <div style={{ marginTop: "30px" }} id="musiciansTable">

      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable title={"Musicians"} data={matchedMusicians} columns={columnsMusician} options={optionsMusician2} />
      </MuiThemeProvider>

      </div>


    </div>
    
  );
}

export default Test;
