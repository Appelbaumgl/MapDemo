import React, { Component } from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker } from 'react-leaflet'
import MarkerMover from './MarkerMover'

class App extends Component {
    state = {
        lat: 43.0440,
        lng: -87.9084,
        zoom: 15,
        marker: {
            lat: 43.0440,
            lng: -87.9084
        }
    }

    constructor() {
        super();
        this.updateMarker = this.updateMarker.bind(this);
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        var driverIcon = L.icon({
            iconUrl: 'https://png.icons8.com/metro/1600/car.png',
            iconSize: [30,30],
            iconAnchor: [15,15],
            popupAnchor: [15,15]
        });

        return (
            <div>
                <MarkerMover updateMarker={this.updateMarker}/>
                <Map attributionControl={false} center={position} zoom={this.state.zoom}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={this.state.marker} icon={driverIcon}/>
                </Map>
            </div>
        );
    }

    updateMarker(marker) {
        this.setState({marker: marker});
    }
}

export default App;
