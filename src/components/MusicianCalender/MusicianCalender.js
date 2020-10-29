import React from "react";
import { format } from "date-fns";
import TimeRange from "react-timeline-range-slider";

import {
  selectedInterval,
  disabledIntervals,
  timelineInterval,
  selectedIntervalTues
} from "./datesSource";

import "./styles.css";

class MusicianCalander extends React.Component {
  state = {
    error: false,
    selectedInterval
  };
  state2 = {
    error: false,
    selectedIntervalTues
  };


  errorHandler = ({ error }) => this.setState({ error });
  errorHandler2 = ({ error2 }) => this.setState({ error2 });


  onChangeCallback = (selectedInterval) => this.setState({ selectedInterval });
  onChangeCallback2 = (selectedIntervalTues) => this.setState({ selectedIntervalTues });

  render() {
    const { selectedInterval, error } = this.state;
    const { selectedIntervalTues, error2 } = this.state2;
    // console.log(selectedInterval)
    // console.log(selectedIntervalTues)

    // console.log(selectedInterval)
    return (
      <div className="container">
        <h2>Scheduling</h2>
        {/* <div className="info">
          <span>Selected Interval: </span>
          {selectedInterval.map((d, i) => (
            <span key={i}>{format(d, "dd MMM, HH:mm")}</span>
          ))}
        </div> */}
        <h3 style={{color:"black"}}>Monday</h3>
        <TimeRange
          error={error}
          ticksNumber={36}
          selectedInterval={selectedInterval}
          timelineInterval={timelineInterval}
          onUpdateCallback={this.errorHandler}
          onChangeCallback={this.onChangeCallback}
          disabledIntervals={disabledIntervals}
        />

<div className="info">
</div>

<h3 style={{color:"black"}}>Tuesday</h3>

        <TimeRange
          error={error2}
          ticksNumber={36}
          selectedInterval={selectedIntervalTues}
          timelineInterval={timelineInterval}
          onUpdateCallback={this.errorHandler2}
          onChangeCallback={this.onChangeCallback2}
          disabledIntervals={disabledIntervals}
        />
      </div>

      
    );
  }
}

export default MusicianCalander;
