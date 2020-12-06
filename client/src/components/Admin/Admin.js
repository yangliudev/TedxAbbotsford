import React, { useEffect, useState } from "react";
import Axios from "axios";
import MUIDataTable from "mui-datatables";
import "./Admin.css";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
// import TableRow from "@material-ui/core/TableRow";
// import TableCell from "@material-ui/core/TableCell";
// import CustomToolbarSelect from "./CustomToolbarSelect";

// import OrderEdit from "./OrderEdit";
import * as ReactBootStrap from "react-bootstrap";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
// import FilterIcon from "@material-ui/icons/FilterList";
import EditIcon from "@material-ui/icons/Edit";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import NavigateNextIcon from "@material-ui/icons/NavigateNext";
// import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import HomeIcon from "@material-ui/icons/Home";
import MapIcon from "@material-ui/icons/Map";
// import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function Test() {
  // const [musicianID, setMusicianID] = useState(0);
  const [orderID, setOrderID] = useState(0);

  const submitMusicianOrder = (mus) => {
    let musMail = mus[10];
    // console.log(mus[0], mus[9]);
    Axios.post("/musicianOrder/insert", {
      setMusicianID: mus[1],
      setOrderID: orderID,
      musicianEmail: musMail,
    }).then(() => {
      console.log("sucessful insert");
    });
  };

  const deleteOrder = (orderID) => {
    Axios.delete(`/order/delete/${orderID}`);
    window.location.reload();
  };

  const deleteMusician = (musicianID) => {
    Axios.delete(`/musician/delete/${musicianID}`);
    window.location.reload();
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
            backgroundColor: "transparent !imporant",
            color: "inherit",
            width: "inherit",
          },
        },
        // MuiTableRow: {
        //   hover: {
        //     '&$root': {
        //       '&:hover': {
        //         background: 'red'
        //       }
        //     }
        //   }
        // },
      },
    });

  useEffect(() => {
    Axios.get("/order/get").then((response) => {
      setOrderList(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get("/musician/get").then((response) => {
      setMusicianList(response.data);
    });
  }, []);

  const getMusicians = (id) => {
    Axios.get(`/match/musicians/${id}`).then(
      (response) => {
        // console.log(Object.values(response.data[0]));
        // setMatchedMusicians(Object.values(response.data));
        var matched = [];
        for (let index = 0; index < response.data.length; index++) {
          matched.push(Object.values(response.data[index]));
          matched[index].splice(0, 0, "");
        }
        setMatchedMusicians(matched);
      }
    );
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
          arr[index].splice(0, 0, "");
          // arr[index].splice(0, 0, "Pending");
        }
        // console.log(arr);
      }
    };
  })();

  var something2 = (function () {
    var executed2 = false;
    return function () {
      if (!executed2) {
        executed2 = true;
        for (let index = 0; index < musicianList.length; index++) {
          arr2.push(Object.values(musicianList[index]));
          arr2[index].splice(0, 0, "");
        }
      }
    };
  })();

  var rowEdit = [];
  var rowSelectMusician = [];

  var editFirstName = "";
  var editLastName = "";
  var editNumber = "";
  var editEmail = "";
  var editAddress = "";
  var editDate = "";
  var editTime = "";

  const saveRowEdit = () => {
    if (editFirstName === "") editFirstName = editRow.firstName;
    if (editLastName === "") editLastName = editRow.lastName;
    if (editEmail === "") editEmail = editRow.email;
    if (editNumber === "") editNumber = editRow.number;
    if (editAddress === "") editAddress = editRow.address;
    if (editTime === "") editTime = editRow.time_service;
    if (editDate === "") editDate = editRow.date_service;

    // console.log(editFirstName)

    Axios.put("/order/update", {
      orderID: editRow.id,
      orderFirstName: editFirstName,
      orderLastName: editLastName,
      orderNumber: editNumber,
      orderEmail: editEmail,
      orderAddress: editAddress,
      orderDate: editDate,
      orderTime: editTime,
    }).then(() => {
      alert("sucessful insert");
    });
    window.location.reload();
  };

  const editIconPressed = () => {
    document.getElementById("edit").style.display = "block";
    console.log(rowEdit);
    setEditRow(rowEdit);
    hideWhileEditing();
    // setEditFirstName(rowEdit.firstName);
    // editLastName = rowEdit.lastName;
    // editNumber = rowEdit.number;
    // editEmail = rowEdit.email;
    // editAddress = rowEdit.address;
    // editDate = rowEdit.date_service;
    // editTime = rowEdit.time_service;
    // console.log(editFirstName)
  };

  const matchIconPressed = () => {
    // getMusicians(rowEdit.id);
    // setOrderID(rowEdit.id);
    document.getElementById("orders").style.display = "none";
    document.getElementById("matched").style.display = "block";
    document.getElementById("edit").style.display = "none";
  };

  let deleteable = false;
  const deleteIconPressed = () => {
    deleteable = true;
  };

  const [editRow, setEditRow] = useState([]);

  // const rowSelect = (row) => {
  //   // console.log(row);
  //   if (row.length === 1) {
  //     rowEdit = orderList[row[0].dataIndex];
  //     document.getElementById("edit").style.display = "none";
  //   } else {
  //     document.getElementById("edit").style.display = "none";
  //   }
  // };

  const rowClick = (row) => {
    // console.log(orderList[row.dataIndex]);
    rowEdit = orderList[row.dataIndex];
    // console.log(deleteable);
    if (deleteable) {
      deleteOrder(rowEdit.id);
    } else {
      setEditRow(rowEdit);
      getMusicians(rowEdit.id);
      setOrderID(rowEdit.id);
      setSelectedOrder(rowEdit);
    }
    // document.getElementById("edit").style.display = "none";
  };

  let isMaps = false;
  const MapsMatchedIcon = () => {
    isMaps = true;
    isAssign = false;
  };

  const [selectedOrder, setSelectedOrder] = useState([]);
  const setMusician = (row) => {
    rowSelectMusician = matchedMusicians[row.dataIndex];
    if (isMaps) {
      let addressURL =
        "https://www.google.com/maps/dir/?api=1&origin=" +
        selectedOrder.address +
        "+" +
        selectedOrder.address_2 +
        "&destination=" +
        rowSelectMusician[4];
      window.open(addressURL);
    }
    if (isAssign) submitMusicianOrder(rowSelectMusician);
    if (isDeleteMusician) deleteMusician(rowSelectMusician[1]);
    // console.log(matchedMusicians[row.dataIndex]);

    // submitMusicianOrder(rowSelectMusician);
    // rowSelectMusician = matchedMusicians[row[0].dataIndex];

    // console.log(matchedMusicians[row[0].dataIndex])
    // setMusicianID(matchedMusicians[row[0].dataIndex][0]);
  };

  let isAssign = false;
  const ToolbarAssign = () => {
    isAssign = true;
    isMaps = false;
    document.getElementById("orders").style.display = "block";
    document.getElementById("matched").style.display = "none";
  };

  let isDeleteMusician = false;
  const DeleteMusicianIcon = () => {
    isDeleteMusician = true;
  }

  const displayMusicians = () => {
    setMatchedMusicians(dataMusician);
    document.getElementById("orders").style.display = "none";
    document.getElementById("edit").style.display = "none";
    document.getElementById("matched").style.display = "none";
    document.getElementById("musiciansTable").style.display = "block";
  };

  const displayOrders = () => {
    // setMatchedMusicians(dataMusician);
    document.getElementById("musiciansTable").style.display = "none";
    document.getElementById("matched").style.display = "none";
    document.getElementById("edit").style.display = "none";
    document.getElementById("orders").style.display = "block";
  };

  const hideWhileEditing = () => {
    document.getElementById("orders").style.display = "none";
  };
  const backEditing = () => {
    document.getElementById("orders").style.display = "block";
    document.getElementById("edit").style.display = "none";
  };

  // const [tableBodyHeight, setTableBodyHeight] = useState("400px");
  // const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
  // const [transitionTime, setTransitionTime] = useState(300);
  // const [selectableRows, setSelectableRows] = useState("none");

  const statusValue = ["Confirmed", "Pending", "Declined"];
  // const [change, setChange] = useState([])
  const updateStatus = (value, index) => {
    // console.log(value, arr[index])
    Axios.put("/orderStatus/update", {
      orderID: arr[index][2],
      status: value,
    }).then(() => {
      alert("sucessful insert");
    });
    window.location.reload();
  };

  const columnsOrder = [
    {
      name: "",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div>
              <Tooltip title={"Match"}>
                <IconButton
                  onClick={matchIconPressed}
                  style={{ width: "10px", height: "10px" }}
                >
                  <MusicNoteIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Edit"}>
                <IconButton
                  onClick={editIconPressed}
                  style={{ width: "10px", height: "10px" }}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Delete"}>
                <IconButton
                  onClick={deleteIconPressed}
                  style={{ width: "10px", height: "10px" }}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              {/* <IconButton><HomeIcon /></IconButton> */}
            </div>
          );
        },
        setCellProps: (value) => {
          return {
            style: {
              width: "80px",
            },
          };
        },
      },
    },
    {
      name: "Status",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          // if (tableMeta.rowIndex === 0) {
          //   // console.log(tableMeta)
          //   };
          return (
            // <Cities
            //   value={value}
            //   index={tableMeta.columnIndex}
            //   change={event => updateValue(event)}
            // />
            <FormControl>
              {/* <input type="text" value="test"></input> */}
              <Select
                value={value}
                onChange={(event) => {
                  updateStatus(
                    event.target.value,
                    tableMeta.currentTableData[tableMeta.rowIndex].index
                  );
                }}
                style={{ fontSize: "inherit" }}
              >
                {statusValue.map((status, index) => (
                  <MenuItem key={index} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          );
        },
      },
    },
    "ID",
    "Gift",
    "Occasion",
    "Music Type",
    "# of Musicians",
    "Suprise",
    "First Name",
    "Last Name",
    {
      name: "Date Service",
      options: {
        setCellProps: (value) => {
          return {
            style: {
              width: "80px",
            },
          };
        },
      },
    },
    // "Date Service",
    "Time Service",
    {
      name: "Offered",
      options: {
        setCellProps: (value) => {
          return {
            style: {
              width: "60px",
            },
          };
        },
      },
    },
    // "Offered",
    {
      name: "Number",
      options: {
        setCellProps: (value) => {
          return {
            style: {
              width: "90px",
            },
          };
        },
      },
    },
    // "Number",
    "Email",
    "Address",
    "City",
    "State",
    "Zip",
    { name: "Comments", options: { display: false } },
    {
      name: "Tips",
      options: {
        display: false,
        setCellProps: (value) => {
          return {
            style: {
              width: "500px",
            },
          };
        },
      },
    },
  ];

  const columnsMusician = [
    {
      name: "",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div>
              <Tooltip title={"Delete"}>
                <IconButton
                  onClick={DeleteMusicianIcon}
                  style={{ width: "10px", height: "10px" }}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
          );
        },
      },
    },
    "ID",
    "First Name",
    "Last Name",
    "Address",
    "Postal Code",
    "City",
    "Province",
    {
      name: "Phone",
      options: {
        setCellProps: (value) => {
          return { style: { width: "90px" } };
        },
      },
    },
    "IBAN",
    "Email",
    "Training",
    { name: "Instrument", options: { display: false } },
    { name: "Style", options: { display: false } },
    "# of Musicians",
    "Site",
    "Media",
    { name: "Monday", options: { display: false } },
    { name: "Tuesday", options: { display: false } },
    { name: "Wednesday", options: { display: false } },
    { name: "Thursday", options: { display: false } },
    { name: "Friday", options: { display: false } },
    { name: "Saturday", options: { display: false } },
    { name: "Sunday", options: { display: false } },
  ];

  const columnsMusicianMatch = [
    {
      name: "",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div>
              <Tooltip title={"Assign"}>
                <IconButton
                  onClick={ToolbarAssign}
                  style={{ width: "30px", height: "30px" }}
                >
                  <CheckCircleIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={"Maps"}>
                <IconButton
                  onClick={MapsMatchedIcon}
                  style={{ width: "30px", height: "30px" }}
                >
                  <MapIcon />
                </IconButton>
              </Tooltip>
            </div>
          );
        },
        setCellProps: (value) => {
          return {
            style: {
              width: "60px",
            },
          };
        },
      },
    },
    "ID",
    "First Name",
    "Last Name",
    "Address",
    "Postal Code",
    "City",
    "Province",
    {
      name: "Phone",
      options: {
        setCellProps: (value) => {
          return { style: { width: "90px" } };
        },
      },
    },
    "IBAN",
    "Email",
    "Training",
    { name: "Instrument", options: { display: false } },
    { name: "Style", options: { display: false } },
    "# of Musicians",
    "Site",
    "Media",
    { name: "Monday", options: { display: false } },
    { name: "Tuesday", options: { display: false } },
    { name: "Wednesday", options: { display: false } },
    { name: "Thursday", options: { display: false } },
    { name: "Friday", options: { display: false } },
    { name: "Saturday", options: { display: false } },
    { name: "Sunday", options: { display: false } },
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    rowHover: true,
    // tableBodyHeight: "400px",
    // resizableColumns: true,
    draggableColumns: {
      enabled: true,
      transitionTime: 300,
    },
    selectableRows: "none",

    // ########### TOOL BAR WHEN ROW IS SELECTED ###########
    //     customToolbarSelect: (selectedRows, rowsSelected) => (
    //       // <CustomToolbarSelect selectedRows={selectedRows} data={data[selectedRows.data[0].index]} test={saveRowEdit}/>
    //       <div className={"custom-toolbar-select"}>
    //         <Tooltip title={"Match"}><IconButton onClick={() => {getMusicians(rowEdit.id); setOrderID(rowEdit.id); document.getElementById("orders").style.display = "none"; document.getElementById("matched").style.display = "block"; document.getElementById("edit").style.display = "none";
    // }}><MusicNoteIcon /></IconButton></Tooltip>
    //         <Tooltip title={"Edit"}><IconButton onClick={editIconPressed}><EditIcon /></IconButton></Tooltip>
    //         <Tooltip title={"Delete"}><IconButton onClick={() => {deleteOrder(rowEdit.id)}}><DeleteIcon/></IconButton></Tooltip>
    //       </div>
    //     ),
    // onRowSelectionChange: (rowsSelected) => {
    //   rowSelect(rowsSelected);
    //   // console.log(rowsSelected);
    // },

    onRowClick: (rowData, rowMeta) => {
      // rowSelect(rowsSelected);
      rowClick(rowMeta);
      // console.log(rowMeta);
    },
    // customToolbar: () => (
    //  <Tooltip title={"Musicians"}><IconButton onClick={displayMusicians}><NavigateNextIcon /></IconButton></Tooltip>),
    setRowProps: (row, dataIndex, rowIndex) => {
      // console.log(dataIndex, rowIndex, row);
      if (arr[dataIndex][1] === "Confirmed") {
        return { style: { backgroundColor: "#ccebd4" } };
      }
      if (arr[dataIndex][1] === "Declined") {
        return { style: { backgroundColor: "#edabab" } };
      }
      if (arr[dataIndex][1] === "Pending") {
        return { style: { backgroundColor: "white" } };
      }
    },
  };

  // ####### MUSICIAN TABLE OPTIONS ####### //
  const optionsMusician = {
    filter: true,
    filterType: "dropdown",
    responsive: "vertical",
    // tableBodyHeight: "400px",
    // tableBodyMaxHeight,
    // resizableColumns: true,
    draggableColumns: {
      enabled: true,
      transitionTime: 300,
    },
    selectableRows: "none",
    customToolbarSelect: (selectedRows) => (
      <div className={"custom-toolbar-select"}>
        <Tooltip title={"Assign"}>
          <IconButton style={{ marginRight: "20px" }} onClick={ToolbarAssign}>
            <CheckCircleIcon />
          </IconButton>
        </Tooltip>
        {/* <Tooltip title={"Edit"}><IconButton onClick={() => {testing(); setEditRow(rowEdit)}}><EditIcon /></IconButton></Tooltip> */}
        {/* <Tooltip title={"Delete"}><IconButton><DeleteIcon/></IconButton></Tooltip> */}
      </div>
    ),
    customToolbar: () => (
      <span>
        <Tooltip title={"View All"}>
          <IconButton
            onClick={() => {
              setMatchedMusicians(dataMusician);
            }}
          >
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={"Home"}>
          <IconButton
            onClick={() => {
              document.getElementById("matched").style.display = "none";
              document.getElementById("orders").style.display = "block";
            }}
          >
            <HomeIcon />
          </IconButton>
        </Tooltip>
      </span>
    ),
    onRowSelectionChange: (rowsSelected) => {
      setMusician(rowsSelected);
      console.log(rowsSelected);
    },
    onRowClick: (rowData, rowMeta) => {
      // rowSelect(rowsSelected);
      // console.log(rowMeta);
      setMusician(rowMeta);
      // rowClick(rowMeta);
      // console.log(rowMeta);
    },
  };
  // setMusicianID(matchedMusicians[rowsSelected[0].dataIndex][0])

  const optionsMusician2 = {
    filter: true,
    filterType: "dropdown",
    responsive: "vertical",
    tableBodyHeight: "400px",
    // tableBodyMaxHeight,
    // resizableColumns: true,
    draggableColumns: {
      enabled: true,
      transitionTime: 300,
    },
    selectableRows: "none",
    onRowClick: (rowData, rowMeta) => {
      setMusician(rowMeta);
    },
    // customToolbar: () => (
    //   <Tooltip title={"Orders"}>
    //     <IconButton onClick={displayOrders}>
    //       <NavigateBeforeIcon />
    //     </IconButton>
    //   </Tooltip>
    // ),
  };

  const data = arr;
  const dataMusician = arr2;

  something();
  something2();

  return (
    <div id="adminContainer">
      {/* <ReactBootStrap.Container className="dashboardNavAdmin" style={{marginTop:"30px"}}> */}

      {/* <ReactBootStrap.Row className="justify-content-md-center">
                        <ReactBootStrap.Col>
                            <h2>Musician Dashboard</h2>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row> */}

      <ReactBootStrap.Row
        className="justify-content-md-center"
        style={{ marginTop: "20px" }}
      >
        <ReactBootStrap.Col>
          <ReactBootStrap.Navbar
            collapseOnSelect
            expand="lg"
            className="color-nav"
            variant="dark"
          >
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="nav-size justify-content-md-center">
                <p
                  className="navText"
                  id="ordersDataTable"
                  onClick={displayOrders}
                >
                  ORDERS
                </p>
                <p
                  className="navText"
                  id="musiciansDataTable"
                  onClick={displayMusicians}
                >
                  MUSICIANS
                </p>
                {/*
                                        <p className="navText" id="stats" onClick={(e) => { active4(); showStats() }}>STATISTICS</p>
                                        <p className="navText" id="income" onClick={(e) => { active5(); showIncome() }}>INCOME</p>
                                        */}
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Navbar>
        </ReactBootStrap.Col>
      </ReactBootStrap.Row>
      {/* </ReactBootStrap.Container> */}

      <div style={{ marginTop: "30px" }}>
        <div id="edit">
          <ReactBootStrap.Container
            className="dashboardNavAdmin"
            style={{ marginTop: "30px" }}
          >
            {/* <label>TEst</label>
        <input placeholder={editRow.firstName} type="text" onChange={(e) => {editFirstName = e.target.value}}/>
        <input placeholder={editRow.lastName} type="text" onChange={(e) => {editLastName = e.target.value}}/>
        <input placeholder={editRow.time_service} type="text" onChange={(e) => {editTime = e.target.value}}/>
        <input placeholder={editRow.date_service} type="text" onChange={(e) => {editDate = e.target.value}}/>
        <input placeholder={editRow.email} type="text" onChange={(e) => {editEmail = e.target.value}}/>
        <input placeholder={editRow.address} type="text" onChange={(e) => {editAddress = e.target.value}}/>
        <input value="save" type="button" onClick={saveRowEdit}/> var editFirstName = rowEdit.firstName;
var editLastName = rowEdit.lastName;
var editNumber = rowEdit.number;
var editEmail = rowEdit.email;
var editAddress = rowEdit.address;
var editDate = rowEdit.date_service;
var editTime = rowEdit.time_service;*/}
            <ReactBootStrap.Row className="setting">
              <ReactBootStrap.Col md="auto">
                <p className="profileHeader">First Name: </p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <input
                  type="text"
                  placeholder={editRow.firstName}
                  onChange={(e) => {
                    editFirstName = e.target.value;
                  }}
                />
              </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="setting">
              <ReactBootStrap.Col md="auto">
                <p className="profileHeader">Last Name: </p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <input
                  type="text"
                  placeholder={editRow.lastName}
                  onChange={(e) => {
                    editLastName = e.target.value;
                  }}
                />
              </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="setting">
              <ReactBootStrap.Col md="auto">
                <p className="profileHeader">Phone: </p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <input
                  type="text"
                  placeholder={editRow.number}
                  onChange={(e) => {
                    editNumber = e.target.value;
                  }}
                />
              </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="setting">
              <ReactBootStrap.Col md="auto">
                <p className="profileHeader">Email: </p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <input
                  type="text"
                  placeholder={editRow.email}
                  onChange={(e) => {
                    editEmail = e.target.value;
                  }}
                />
              </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="setting">
              <ReactBootStrap.Col md="auto">
                <p className="profileHeader">Address: </p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <input
                  type="text"
                  placeholder={editRow.address}
                  onChange={(e) => {
                    editAddress = e.target.value;
                  }}
                />
              </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="setting">
              <ReactBootStrap.Col md="auto">
                <p className="profileHeader">Date: </p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <input
                  type="text"
                  placeholder={editRow.date_service}
                  onChange={(e) => {
                    editDate = e.target.value;
                  }}
                />
              </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row className="setting">
              <ReactBootStrap.Col md="auto">
                <p className="profileHeader">Time: </p>
              </ReactBootStrap.Col>
              <ReactBootStrap.Col md="auto">
                <input
                  type="text"
                  placeholder={editRow.time_service}
                  onChange={(e) => {
                    editTime = e.target.value;
                  }}
                />
              </ReactBootStrap.Col>
            </ReactBootStrap.Row>

            <ReactBootStrap.Row>
              <ReactBootStrap.Button
                variant="danger"
                size="md"
                onClick={backEditing}
                style={{ marginLeft: "15px" }}
              >
                Back
              </ReactBootStrap.Button>
              <ReactBootStrap.Button
                variant="success"
                size="md"
                className="accept"
                onClick={saveRowEdit}
              >
                Save
              </ReactBootStrap.Button>
            </ReactBootStrap.Row>

            {/* <ReactBootStrap.Row className="justify-content-md-center" style={{marginTop: "10px"}}>
                            <ReactBootStrap.Col>
                                <h6 className="lineText">MUSICAL PREFERENCES</h6>
                                <hr className="line"/>
                            </ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                        <ReactBootStrap.Row className="setting">
                            <ReactBootStrap.Col md="auto">
                                <p className="profileHeader">Training: </p>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.training} onChange={(e) => {training = e.target.value}}/></ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                        <ReactBootStrap.Row className="setting">
                            <ReactBootStrap.Col md="auto">
                                <p className="profileHeader">Style: </p>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.style} /></ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                        <ReactBootStrap.Row className="setting">
                            <ReactBootStrap.Col md="auto">
                                <p className="profileHeader">Solo/Duo: </p>
                            </ReactBootStrap.Col>
                            <ReactBootStrap.Col md="auto"><input type="text" placeholder={musicianDetails.number_musicians} /></ReactBootStrap.Col>
                        </ReactBootStrap.Row>
                        <ReactBootStrap.Row style={{marginTop:"20px"}}>
                            {/* <input type="button" onClick={updateMusician} value="Save Changes"/> */}
            {/* <ReactBootStrap.Button onClick={updateMusician}>Save Changes</ReactBootStrap.Button> */}
            {/* </ReactBootStrap.Row> */}
          </ReactBootStrap.Container>
        </div>

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

        {/* <div style={{backgroundColor:"grey"}}>
        <ReactBootStrap.Row><h3 style={{color:"red"}}>Are you sure you want to remove this order?</h3></ReactBootStrap.Row>
        <ReactBootStrap.Row className="justify-content-md-center">
        <ReactBootStrap.Button variant = 'success' size='md'>Confirm</ReactBootStrap.Button>
        <ReactBootStrap.Button variant = 'danger'size="md">Back</ReactBootStrap.Button>
        </ReactBootStrap.Row>
        
        
      </div> */}

        <div style={{ marginTop: "30px" }} id="matched">
          <MuiThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title={"Musicians"}
              data={matchedMusicians}
              columns={columnsMusicianMatch}
              options={optionsMusician}
            />
          </MuiThemeProvider>
        </div>

        <div style={{ marginTop: "30px" }} id="musiciansTable">
          <MuiThemeProvider theme={getMuiTheme()}>
            <MUIDataTable
              title={"Musicians"}
              data={matchedMusicians}
              columns={columnsMusician}
              options={optionsMusician2}
            />
          </MuiThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default Test;