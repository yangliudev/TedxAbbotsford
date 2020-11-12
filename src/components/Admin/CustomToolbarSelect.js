import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterIcon from "@material-ui/icons/FilterList";
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from "@material-ui/core/styles";

import OrderEdit from "./OrderEdit";

const defaultToolbarSelectStyles = {
  iconButton: {
    marginRight: "24px",
    top: "50%",
    display: "inline-block",
    position: "relative"
    // transform: "translateY(-50%)"
  },
  deleteIcon: {
    color: "#000"
  }
};


class CustomToolbarSelect extends React.Component {
  handleClick = () => {
    console.log("click! current selected rows", this.props.selectedRows);
    console.log("click! current selected rows", this.props.data);

  };
  
  

  render() {
    const { classes } = this.props;
    var editable = false;
    const editRow = () => {
      editable = true;
  }


    return (
      <div className={"custom-toolbar-select"}>
        <Tooltip title={"icon 3"}>
          <IconButton className={classes.iconButton} onClick={this.props.saveRowEdit}>
            <FilterIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={"icon 2"}>
          <IconButton className={classes.iconButton} onClick={this.handleClick}>
            <EditIcon className={classes.deleteIcon} />
          </IconButton>
        </Tooltip>
        <Tooltip title={"icon 1"}>
          <IconButton className={classes.iconButton} onClick={this.handleClick}>
            <DeleteIcon className={classes.deleteIcon} />
          </IconButton>
        </Tooltip>
      </div>



      
    );
  }
}

export default withStyles(defaultToolbarSelectStyles, {
  name: "CustomToolbarSelect"
})(CustomToolbarSelect);
