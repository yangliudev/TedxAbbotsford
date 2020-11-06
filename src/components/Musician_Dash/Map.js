import React, { Component, useState, useEffect } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

import "./Map.css";
import axios from "axios";

import OrderDataService from "../../services/OrderService";

import OrdersList from "./OrdersList";

const mapStyles = {
  width: "25%",
  height: "25%",
};

export class MapContainer extends Component {
  constructor() {
    super();
  }

  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  

  render() {
    
    return (
      <div>
        <div id="block1">
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: localStorage.getItem("lat"),
              lng: localStorage.getItem("lon"),
            }}
          >
            <Marker
              onClick={this.onMarkerClick}
              //name={"Kenyatta International Convention Centre"}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        </div>
        {/* <div id="block2">
          <h1>Customer Address: Downtown Vancouver</h1>
        </div> */}
        <OrdersList />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCAQOQjlQmx_pyGsWyj87F0X8QbAwcbDvg",
})(MapContainer);