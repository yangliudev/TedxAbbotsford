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


import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterIcon from "@material-ui/icons/FilterList";
import EditIcon from '@material-ui/icons/Edit';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
// import { withStyles } from "@material-ui/core/styles";

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

  const getMusicians = (id) => {
    Axios.get(`http://localhost:5000/match/musicians/${id}`).then((response) => {
        console.log(response.data);
        setMatchedMusicians(response.data);
        console.log(matchedMusicians);
    });
  };

  const [orderList, setOrderList] = useState([]);
  const [musicianList, setMusicianList] = useState([]);
  const [matchedMusicians, setMatchedMusicians] = useState([]);

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
    rowEdit = orderList[row[0].index];
    document.getElementById("edit").style.display = "none";

  //  document.getElementById("edit").style.display = "block";
  console.log(rowEdit, orderList[0].gift);
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
    customToolbarSelect: (selectedRows, rowsSelected) => (
      // <CustomToolbarSelect selectedRows={selectedRows} data={data[selectedRows.data[0].index]} test={saveRowEdit}/>
      <div className={"custom-toolbar-select"}>
        <Tooltip title={"Match"}><IconButton onClick={() => {getMusicians(rowEdit.id)}}><MusicNoteIcon /></IconButton></Tooltip>
        <Tooltip title={"Edit"}><IconButton onClick={() => {testing(); setEditRow(rowEdit)}}><EditIcon /></IconButton></Tooltip>
        <Tooltip title={"Delete"}><IconButton><DeleteIcon/></IconButton></Tooltip>
      </div>
    ),
    onRowSelectionChange: (rowsSelected) => {rowSelect(rowsSelected)},
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
    <div style={{ marginTop: "30px" }} id="orders">
      <div>
      <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          title={"Orders"}
          data={data}
          columns={columnsOrder}
          options={options}
        />
      </MuiThemeProvider>
      <h1>{matchedMusicians.firstName}</h1>
      </div>

      <div id="edit">
        <input placeholder={editRow.firstName} type="text" onChange={(e) => {editFirstName = e.target.value}}/>
        <input placeholder={editRow.lastName} type="text" onChange={(e) => {editLastName = e.target.value}}/>
        <input placeholder={editRow.time_service} type="text" onChange={(e) => {editTime = e.target.value}}/>
        <input placeholder={editRow.date_service} type="text" onChange={(e) => {editDate = e.target.value}}/>
        <input placeholder={editRow.email} type="text" onChange={(e) => {editEmail = e.target.value}}/>
        <input placeholder={editRow.address} type="text" onChange={(e) => {editAddress = e.target.value}}/>
        <input value="save" type="button" onClick={saveRowEdit}/>
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
