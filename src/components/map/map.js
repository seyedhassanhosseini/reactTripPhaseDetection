import React, {Component} from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

import SignIn from '../auth/Signin';

class MapTrips extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cords: [
            {latitude: 51.507351, longitude: -0.127758},
            {latitude: 31.046051, longitude: 34.851612},
            {latitude: 51.165691, longitude: 10.451526},
            {latitude: 52.215933, longitude: 19.134422},
            {latitude: 50.0874654, longitude: 14.4212535},
            {latitude: 7.5554942, longitude: 80.7137847},
          ]
        }
    }
      drawMarker = () => {
        return this.state.cords.map((store, i) => {
          return <Marker key={i} id={i} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
     
         onClick={() => console.log("Event Hanlder Called")} />
        })
      }
       style = {
        width: "100%",
        height: "100%",
        }
    
  

  render() {
    return (
    <div className='mainContainer'>
        <div className='section2'>
        <Map
          google={this.props.google}
          center={{
            lat: 9.96233,
            lng: 49.80404
          }}
          style={this.style}
          zoom={8}
        >
          {this.drawMarker()}
        </Map>
        
        
        </div>
    <div className="section1"><div className='seyed'><SignIn/></div></div>
        
    </div>
    

    
    
    )

  }
}

export default GoogleApiWrapper({
    apiKey: "----"
})(MapTrips)

