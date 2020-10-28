import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";

class Test extends Component {
    render() {
        const columns = ["Name", "Company", "City", "State"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
//   filterType: 'checkbox',
  draggableColumns: {enabled: "true", transitionTime: 5},


};
        return (
            <div>
                <MUIDataTable
  title={"Employee List"}
  data={data}
  columns={columns}
  options={options}
/>
                
            </div>
        );
    }
}

export default Test;