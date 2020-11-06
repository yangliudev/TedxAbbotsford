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
      <ReactBootStrap.Container>
        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col>
              <h2>Schedule</h2>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
        


        <div className='topspace'>
        <ScheduleSelector
          selection={this.state.schedule}
          numDays={7}
          minTime={9}
          maxTime={22}
          hourlyChunks={2}
          startDate={new Date('Mon Nov 02 2020 17:57:06')}
          dateFormat="ddd"
          timeFormat="h:mma"
          onChange={this.handleChange}
        />
        </div>
      </ReactBootStrap.Container> 


    );
  }
}

export default MusicianCalender