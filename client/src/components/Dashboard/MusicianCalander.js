import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import ScheduleSelector from 'react-schedule-selector';
import "./MusicianCalander.css"


class MusicianCalender extends Component {

 
    state = { schedule : [] }
     
    


    handleChange = newSchedule => {
      let days = [] 
      this.setState({ schedule: newSchedule });
      for (let i=0; i<=this.state.schedule.length; i++){
        // console.log(this.state.schedule[i])
        if (typeof this.state.schedule[i] == 'object'){

          days.push(this.state.schedule[i])
          // console.log(days)


        }
      

        }      
     
      
   
  
    }

  render() {
    
  
    // const [monday, setMonday] = useState("");
    // const [tuesday, setTuesday] = useState("");
    // const [thursday, setThursday] = useState("");
    // const [friday, setFriday] = useState("");
    // const [saturday, setSaturday] = useState("");
    // const [sunday, setSunday] = useState("");

    return (

        <div className='topspace' >
        <ScheduleSelector
        selection={this.state.schedule}
        numDays={7}
        minTime={9}
        maxTime={22}
        hourlyChunks={1}
        startDate={new Date('Sunday Nov 01 2020 17:57:06')}
        dateFormat="dddd"
        onChange={this.handleChange}
      />


<div style={{marginLeft:'50px',marginTop:'50px'}}>
      <ReactBootStrap.Button
          variant="primary"
          size="md"
        
         
          >
          Submit
          </ReactBootStrap.Button>

            </div>


      </div>
     

    );
  }
}

export default MusicianCalender