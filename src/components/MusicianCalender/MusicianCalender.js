import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react";


class MusicianCalender extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        timeHeaders: [{"groupBy":"Month"},{"groupBy":"Day","format":"d"}],
        scale: "Day",
        days: 30,
        startDate: "2019-11-01",
        timeRangeSelectedHandling: "Enabled",
        onTimeRangeSelected: args => {
          const dp = args.control;
          DayPilot.Modal.prompt("Create a new event:", "Event 1").then(modal => {
            dp.clearSelection();
            if (!modal.result) { return; }
            dp.events.add(new DayPilot.Event({
              start: args.start,
              end: args.end,
              id: DayPilot.guid(),
              resource: args.resource,
              text: modal.result
            }));
          });
        },
        treeEnabled: true,
        onBeforeTimeHeaderRender: args => {
          if (args.header.level === 1 && args.header.start === DayPilot.Date.today()) {
            args.header.backColor = "#cc0000";
            args.header.fontColor = "#ffffff";
            args.header.cssClass = "today";
          }
        },
        onBeforeTimeHeaderDomAdd: args => {
          if (args.header.level === 1) {
            let dayOfWeek = args.header.start.getDayOfWeek();
            let weekend = dayOfWeek === 6 || dayOfWeek === 0;
            let style = {fontWeight: "bold", border: "1px solid #333", backgroundColor: "white", padding: "2px", width: "17px", textAlign: "center"};
            if (weekend) {
              args.element = <span style={style}>{args.header.start.toString("d")}</span>;
            }
          }
        },
        onBeforeCornerDomAdd: args => {
          const scheduler = args.control;
          const style = {fontSize:"30px", fontWeight:"bold", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center"};
          args.element = <div style={style}>{scheduler.startDate.toString("yyyy")}</div>;
        }
      };
    }
  
    componentDidMount() {
  
      // load resource and event data
      this.setState({
        resources: [
          {name: "Resource A", id: "A"},
          {name: "Resource B", id: "B"},
          {name: "Resource C", id: "C"},
          {name: "Resource D", id: "D"},
          {name: "Resource E", id: "E"},
          {name: "Resource F", id: "F"},
          {name: "Resource G", id: "G"},
          {name: "Resource H", id: "H"}
        ],
        events: [
          {
            id: 1,
            text: "Event 1",
            start: "2019-11-02T00:00:00",
            end: "2019-11-05T00:00:00",
            resource: "A"
          },
          {
            id: 2,
            text: "Event 2",
            start: "2019-11-03T00:00:00",
            end: "2019-11-10T00:00:00",
            resource: "C",
            barColor: "#38761d",
            barBackColor: "#93c47d"
          },
          {
            id: 3,
            text: "Event 3",
            start: "2019-11-02T00:00:00",
            end: "2019-11-08T00:00:00",
            resource: "E",
            barColor: "#f1c232",
            barBackColor: "#f1c232"
          },
          {
            id: 4,
            text: "Event 3",
            start: "2019-11-04T00:00:00",
            end: "2019-11-08T00:00:00",
            resource: "G",
            barColor: "#cc0000",
            barBackColor: "#ea9999"
          }
        ]
      });
  
    }
  
    render() {
      var {...config} = this.state;
      return (
        <div>
          <DayPilotScheduler
            {...config}
            ref={component => {
              this.scheduler = component && component.control;
            }}
          />
        </div>
      );
    }
  }

export default MusicianCalender