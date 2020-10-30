import React, { Component, useState, useEffect } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

import "./Map.css";
import axios from "axios";

import OrderDataService from "../../services/OrderService";

import OrdersList from "./OrdersList";

const mapStyles = {
  width: "65%",
  height: "65%",
};

export class MapContainer extends Component {
  constructor() {
    super();

    // const [orders, setOrders] = useState();

    // useEffect(() => {
    //   retrieveOrder();
    // }, []);

    // const retrieveOrder = () => {
    //   let orders = null;
    //   OrderDataService.getAll()
    //     .then((response) => {
    //       //orders = response.data;
    //       setOrders(response.data);
    //       console.log("orders = " + JSON.stringify(orders));
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    //   //return orders;
    // };

    //let orders = retrieveOrder();
    //retrieveOrder();

    //let orders = OrdersList.orders;

    //console.log("orders = " + JSON.stringify(orders));
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
    

    // let orders = null;
    // OrderDataService.getAll()
    //   .then((response) => {
    //     orders = response.data;
    //     console.log("orders = " + JSON.stringify(orders));
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    // console.log("orders 2 = " + JSON.stringify(orders));
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

// import React, { Component, useState, useEffect } from 'react';
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

// import "./Map.css"

// import OrderDataService from "../../services/OrderService";

// const mapStyles = {
//   width: '65%',
//   height: '65%'
// };

// export const MapContainer = () => {

//   // const state = {
//   //   showingInfoWindow: false,  // Hides or shows the InfoWindow
//   //   activeMarker: {},          // Shows the active marker upon click
//   //   selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
//   // };

//   // const onMarkerClick = (props, marker, e) =>
//   //   this.setState({
//   //     selectedPlace: props,
//   //     activeMarker: marker,
//   //     showingInfoWindow: true
//   //   });

//   // const onClose = props => {
//   //   if (this.state.showingInfoWindow) {
//   //     this.setState({
//   //       showingInfoWindow: false,
//   //       activeMarker: null
//   //     });
//   //   }
//   // };

//   const [orders, setOrders] = useState([]);
//   const [currentAddress, setCurrentAddress] = useState(null);

//   //setOrders(OrderDataService.getAll());
//   //OrderDataService.getAll();

//   useEffect(() => {
//     retrieveOrders();

//   }, []);

//   const retrieveOrders = () => {

//     OrderDataService.getAll()
//       .then(response => {
//         setOrders(response.data);
//         console.log(response.data);
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   };

//   console.log(orders);
//   let address1 = '';
//   if (orders != null && orders.length > 0) {
//     address1 = orders[0].address1;
//   };

//   return (
//     // <div>
//     //     <div id="block1">
//     //       <Map
//     //           google={this.props.google}
//     //           zoom={14}
//     //           style={mapStyles}
//     //           initialCenter={
//     //           {
//     //               lat: 49.2827,
//     //               lng: -123.1207
//     //           }
//     //           }
//     //       >
//     //           <Marker
//     //           onClick={this.onMarkerClick}
//     //           name={'Kenyatta International Convention Centre'}
//     //           />
//     //           <InfoWindow
//     //           marker={this.state.activeMarker}
//     //           visible={this.state.showingInfoWindow}
//     //           onClose={this.onClose}
//     //           >
//     //           <div>
//     //               <h4>{this.state.selectedPlace.name}</h4>
//     //           </div>
//     //           </InfoWindow>
//     //       </Map>
//     //     </div>
//     //     <div id="block2">
//     //         <h1>Customer Address: Downtown Vancouver</h1>
//     //     </div>
//     //   </div>
//     <h1>hello {address1}</h1>
//   );
// };

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCAQOQjlQmx_pyGsWyj87F0X8QbAwcbDvg'
// })(MapContainer);
