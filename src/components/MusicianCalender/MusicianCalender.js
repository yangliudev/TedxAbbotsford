import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";

import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { SliderRail, Handle, Track, Tick } from "./components";


const sliderStyle = {
  position: "relative",
  height: "400px",
  marginLeft: "45%",
  touchAction: "none"
};

const domain = [800, 2100];
let defaultValues = [1250, 1600];


class MusicianCalender extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     timeHeaders: [{"groupBy":"Month"},{"groupBy":"Day","format":"d"}],
  //     scale: "Day",
  //     days: 30,
  //     startDate: "2019-11-01",
  //     timeRangeSelectedHandling: "Enabled",
  //     onTimeRangeSelected: args => {
  //       const dp = args.control;
  //       DayPilot.Modal.prompt("Create a new event:", "Event 1").then(modal => {
  //         dp.clearSelection();
  //         if (!modal.result) { return; }
  //         dp.events.add(new DayPilot.Event({
  //           start: args.start,
  //           end: args.end,
  //           id: DayPilot.guid(),
  //           resource: args.resource,
  //           text: modal.result
  //         }));
  //       });
  //     },
  //     treeEnabled: true,
  //     onBeforeTimeHeaderRender: args => {
  //       if (args.header.level === 1 && args.header.start === DayPilot.Date.today()) {
  //         args.header.backColor = "#cc0000";
  //         args.header.fontColor = "#ffffff";
  //         args.header.cssClass = "today";
  //       }
  //     },
  //     onBeforeTimeHeaderDomAdd: args => {
  //       if (args.header.level === 1) {
  //         let dayOfWeek = args.header.start.getDayOfWeek();
  //         let weekend = dayOfWeek === 6 || dayOfWeek === 0;
  //         let style = {fontWeight: "bold", border: "1px solid #333", backgroundColor: "white", padding: "2px", width: "17px", textAlign: "center"};
  //         if (weekend) {
  //           args.element = <span style={style}>{args.header.start.toString("d")}</span>;
  //         }
  //       }
  //     },
  //     onBeforeCornerDomAdd: args => {
  //       const scheduler = args.control;
  //       const style = {fontSize:"30px", fontWeight:"bold", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center"};
  //       args.element = <div style={style}>{scheduler.startDate.toString("yyyy")}</div>;
  //     }
  //   };
  // }

  // componentDidMount() {

  //   // load resource and event data
  //   this.setState({
  //     resources: [
  //       {name: "Resource A", id: "A"},
  //       {name: "Resource B", id: "B"},
  //       {name: "Resource C", id: "C"},
  //       {name: "Resource D", id: "D"},
  //       {name: "Resource E", id: "E"},
  //       {name: "Resource F", id: "F"},
  //       {name: "Resource G", id: "G"},
  //       {name: "Resource H", id: "H"}
  //     ],
  //     events: [
  //       {
  //         id: 1,
  //         text: "Event 1",
  //         start: "2019-11-02T00:00:00",
  //         end: "2019-11-05T00:00:00",
  //         resource: "A"
  //       },
  //       {
  //         id: 2,
  //         text: "Event 2",
  //         start: "2019-11-03T00:00:00",
  //         end: "2019-11-10T00:00:00",
  //         resource: "C",
  //         barColor: "#38761d",
  //         barBackColor: "#93c47d"
  //       },
  //       {
  //         id: 3,
  //         text: "Event 3",
  //         start: "2019-11-02T00:00:00",
  //         end: "2019-11-08T00:00:00",
  //         resource: "E",
  //         barColor: "#f1c232",
  //         barBackColor: "#f1c232"
  //       },
  //       {
  //         id: 4,
  //         text: "Event 3",
  //         start: "2019-11-04T00:00:00",
  //         end: "2019-11-08T00:00:00",
  //         resource: "G",
  //         barColor: "#cc0000",
  //         barBackColor: "#ea9999"
  //       }
  //     ]
  //   });

  // }

  state = {
    values: defaultValues.slice(),
    update: defaultValues.slice()
  };

  onUpdate = (update) => {
    this.setState({ update });
  };

  onChange = (values) => {
    this.setState({ values });
  };


  render() {
    // var {...config} = this.state;
    // return (
    //   <div>
    //     <DayPilotScheduler
    //       {...config}
    //       ref={component => {
    //         this.scheduler = component && component.control;
    //       }}
    //     />
    //   </div>
    // );

    const {
      state: { values, update }
    } = this;

    return (

      <ReactBootStrap.Container className="top-space">

        <div className="bg-display">

          <ReactBootStrap.Row className="justify-content-md-center" >
            <ReactBootStrap.Col><h1 class="info">Select your Availability</h1>
            </ReactBootStrap.Col>
          </ReactBootStrap.Row>

          <ReactBootStrap.Container>
            <ReactBootStrap.Row>
              <ReactBootStrap.Col md={{ span: 1 }}>
                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Label>Monday</ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>
                <div style={{ height: 520, width: "100%", padding: "10px" }}>
                  {/* <ValueViewer values={values} update={update} /> */}
                  <Slider
                    vertical
                    mode={2}
                    step={5}
                    domain={domain}
                    rootStyle={sliderStyle}
                    onUpdate={this.onUpdate}
                    onChange={this.onChange}
                    values={values}
                  >
                    <Rail>
                      {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                    </Rail>
                    <Handles>
                      {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                          {handles.map((handle) => (
                            <Handle
                              key={handle.id}
                              handle={handle}
                              domain={domain}
                              getHandleProps={getHandleProps}
                            />
                          ))}
                        </div>
                      )}
                    </Handles>
                    <Tracks left={false} right={false}>
                      {({ tracks, getTrackProps }) => (
                        <div className="slider-tracks">
                          {tracks.map(({ id, source, target }) => (
                            <Track
                              key={id}
                              source={source}
                              target={target}
                              getTrackProps={getTrackProps}
                            />
                          ))}
                        </div>
                      )}
                    </Tracks>
                    <Ticks count={13}>
                      {({ ticks }) => (
                        <div className="slider-ticks">
                          {ticks.map((tick) => (
                            <Tick key={tick.id} tick={tick} />
                          ))}
                        </div>
                      )}
                    </Ticks>
                  </Slider>
                </div>
              </ReactBootStrap.Col>
              

              <ReactBootStrap.Col md={{ span: 1 }}>
                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Label>Tuesday</ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>
                <div style={{ height: 520, width: "100%", padding: "10px" }}>
                  {/* <ValueViewer values={values} update={update} /> */}
                  <Slider
                    vertical
                    mode={2}
                    step={5}
                    domain={domain}
                    rootStyle={sliderStyle}
                    onUpdate={this.onUpdate}
                    onChange={this.onChange}
                    values={values}
                  >
                    <Rail>
                      {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                    </Rail>
                    <Handles>
                      {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                          {handles.map((handle) => (
                            <Handle
                              key={handle.id}
                              handle={handle}
                              domain={domain}
                              getHandleProps={getHandleProps}
                            />
                          ))}
                        </div>
                      )}
                    </Handles>
                    <Tracks left={false} right={false}>
                      {({ tracks, getTrackProps }) => (
                        <div className="slider-tracks">
                          {tracks.map(({ id, source, target }) => (
                            <Track
                              key={id}
                              source={source}
                              target={target}
                              getTrackProps={getTrackProps}
                            />
                          ))}
                        </div>
                      )}
                    </Tracks>
                    <Ticks count={13}>
                      {({ ticks }) => (
                        <div className="slider-ticks">
                          {ticks.map((tick) => (
                            <Tick key={tick.id} tick={tick} />
                          ))}
                        </div>
                      )}
                    </Ticks>
                  </Slider>
                </div>
              </ReactBootStrap.Col>



              <ReactBootStrap.Col md={{ span: 1 }}>
                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Label>Wednesday</ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>
                <div style={{ height: 520, width: "100%", padding: "10px" }}>
                  {/* <ValueViewer values={values} update={update} /> */}
                  <Slider
                    vertical
                    mode={2}
                    step={5}
                    domain={domain}
                    rootStyle={sliderStyle}
                    onUpdate={this.onUpdate}
                    onChange={this.onChange}
                    values={values}
                  >
                    <Rail>
                      {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                    </Rail>
                    <Handles>
                      {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                          {handles.map((handle) => (
                            <Handle
                              key={handle.id}
                              handle={handle}
                              domain={domain}
                              getHandleProps={getHandleProps}
                            />
                          ))}
                        </div>
                      )}
                    </Handles>
                    <Tracks left={false} right={false}>
                      {({ tracks, getTrackProps }) => (
                        <div className="slider-tracks">
                          {tracks.map(({ id, source, target }) => (
                            <Track
                              key={id}
                              source={source}
                              target={target}
                              getTrackProps={getTrackProps}
                            />
                          ))}
                        </div>
                      )}
                    </Tracks>
                    <Ticks count={13}>
                      {({ ticks }) => (
                        <div className="slider-ticks">
                          {ticks.map((tick) => (
                            <Tick key={tick.id} tick={tick} />
                          ))}
                        </div>
                      )}
                    </Ticks>
                  </Slider>
                </div>
              </ReactBootStrap.Col>




              <ReactBootStrap.Col md={{ span: 1 }}>
                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Label>Thursday</ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>
                <div style={{ height: 520, width: "100%", padding: "10px" }}>
                  {/* <ValueViewer values={values} update={update} /> */}
                  <Slider
                    vertical
                    mode={2}
                    step={5}
                    domain={domain}
                    rootStyle={sliderStyle}
                    onUpdate={this.onUpdate}
                    onChange={this.onChange}
                    values={values}
                  >
                    <Rail>
                      {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                    </Rail>
                    <Handles>
                      {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                          {handles.map((handle) => (
                            <Handle
                              key={handle.id}
                              handle={handle}
                              domain={domain}
                              getHandleProps={getHandleProps}
                            />
                          ))}
                        </div>
                      )}
                    </Handles>
                    <Tracks left={false} right={false}>
                      {({ tracks, getTrackProps }) => (
                        <div className="slider-tracks">
                          {tracks.map(({ id, source, target }) => (
                            <Track
                              key={id}
                              source={source}
                              target={target}
                              getTrackProps={getTrackProps}
                            />
                          ))}
                        </div>
                      )}
                    </Tracks>
                    <Ticks count={13}>
                      {({ ticks }) => (
                        <div className="slider-ticks">
                          {ticks.map((tick) => (
                            <Tick key={tick.id} tick={tick} />
                          ))}
                        </div>
                      )}
                    </Ticks>
                  </Slider>
                </div>
              </ReactBootStrap.Col>



              <ReactBootStrap.Col md={{ span: 1 }}>
                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Label>Friday</ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>
                <div style={{ height: 520, width: "100%", padding: "10px" }}>
                  {/* <ValueViewer values={values} update={update} /> */}
                  <Slider
                    vertical
                    mode={2}
                    step={5}
                    domain={domain}
                    rootStyle={sliderStyle}
                    onUpdate={this.onUpdate}
                    onChange={this.onChange}
                    values={values}
                  >
                    <Rail>
                      {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                    </Rail>
                    <Handles>
                      {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                          {handles.map((handle) => (
                            <Handle
                              key={handle.id}
                              handle={handle}
                              domain={domain}
                              getHandleProps={getHandleProps}
                            />
                          ))}
                        </div>
                      )}
                    </Handles>
                    <Tracks left={false} right={false}>
                      {({ tracks, getTrackProps }) => (
                        <div className="slider-tracks">
                          {tracks.map(({ id, source, target }) => (
                            <Track
                              key={id}
                              source={source}
                              target={target}
                              getTrackProps={getTrackProps}
                            />
                          ))}
                        </div>
                      )}
                    </Tracks>
                    <Ticks count={13}>
                      {({ ticks }) => (
                        <div className="slider-ticks">
                          {ticks.map((tick) => (
                            <Tick key={tick.id} tick={tick} />
                          ))}
                        </div>
                      )}
                    </Ticks>
                  </Slider>
                </div>
              </ReactBootStrap.Col>



              <ReactBootStrap.Col md={{ span: 1 }}>
                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Label>Sarturday</ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>
                <div style={{ height: 520, width: "100%", padding: "10px" }}>
                  {/* <ValueViewer values={values} update={update} /> */}
                  <Slider
                    vertical
                    mode={2}
                    step={5}
                    domain={domain}
                    rootStyle={sliderStyle}
                    onUpdate={this.onUpdate}
                    onChange={this.onChange}
                    values={values}
                  >
                    <Rail>
                      {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                    </Rail>
                    <Handles>
                      {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                          {handles.map((handle) => (
                            <Handle
                              key={handle.id}
                              handle={handle}
                              domain={domain}
                              getHandleProps={getHandleProps}
                            />
                          ))}
                        </div>
                      )}
                    </Handles>
                    <Tracks left={false} right={false}>
                      {({ tracks, getTrackProps }) => (
                        <div className="slider-tracks">
                          {tracks.map(({ id, source, target }) => (
                            <Track
                              key={id}
                              source={source}
                              target={target}
                              getTrackProps={getTrackProps}
                            />
                          ))}
                        </div>
                      )}
                    </Tracks>
                    <Ticks count={13}>
                      {({ ticks }) => (
                        <div className="slider-ticks">
                          {ticks.map((tick) => (
                            <Tick key={tick.id} tick={tick} />
                          ))}
                        </div>
                      )}
                    </Ticks>
                  </Slider>
                </div>
              </ReactBootStrap.Col>



              <ReactBootStrap.Col md={{ span: 1 }}>
                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Label>Sunday</ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>
                <div style={{ height: 520, width: "100%", padding: "10px" }}>
                  {/* <ValueViewer values={values} update={update} /> */}
                  <Slider
                    vertical
                    mode={2}
                    step={5}
                    domain={domain}
                    rootStyle={sliderStyle}
                    onUpdate={this.onUpdate}
                    onChange={this.onChange}
                    values={values}
                  >
                    <Rail>
                      {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                    </Rail>
                    <Handles>
                      {({ handles, getHandleProps }) => (
                        <div className="slider-handles">
                          {handles.map((handle) => (
                            <Handle
                              key={handle.id}
                              handle={handle}
                              domain={domain}
                              getHandleProps={getHandleProps}
                            />
                          ))}
                        </div>
                      )}
                    </Handles>
                    <Tracks left={false} right={false}>
                      {({ tracks, getTrackProps }) => (
                        <div className="slider-tracks">
                          {tracks.map(({ id, source, target }) => (
                            <Track
                              key={id}
                              source={source}
                              target={target}
                              getTrackProps={getTrackProps}
                            />
                          ))}
                        </div>
                      )}
                    </Tracks>
                    <Ticks count={13}>
                      {({ ticks }) => (
                        <div className="slider-ticks">
                          {ticks.map((tick) => (
                            <Tick key={tick.id} tick={tick} />
                          ))}
                        </div>
                      )}
                    </Ticks>
                  </Slider>
                </div>
              </ReactBootStrap.Col>



            </ReactBootStrap.Row>
          </ReactBootStrap.Container>
        </div>

      </ReactBootStrap.Container>


    );
  }
}

export default MusicianCalender