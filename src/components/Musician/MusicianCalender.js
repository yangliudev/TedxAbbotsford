import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import ScheduleSelector from 'react-schedule-selector';



class MusicianCalender extends Component {

 
    state = { schedule : [] }
 
    handleChange = newSchedule => {
      this.setState({ schedule: newSchedule });
        console.log(this.state)
  
    }

  render() {
  
    // const [monday, setMonday] = useState("");
    // const [tuesday, setTuesday] = useState("");
    // const [thursday, setThursday] = useState("");
    // const [friday, setFriday] = useState("");
    // const [saturday, setSaturday] = useState("");
    // const [sunday, setSunday] = useState("");

    return (

        <div className='topspace'>
        <ScheduleSelector
        selection={this.state.schedule}
        numDays={7}
        minTime={9}
        maxTime={22}
        hourlyChunks={1}
        startDate={new Date('Mon Nov 02 2020 17:57:06')}
        dateFormat="ddd"
        onChange={this.handleChange}
      />
            </div>


    );
  }
}

export default MusicianCalender