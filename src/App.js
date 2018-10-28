import React, { Component } from 'react'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerMover from './MarkerMover'

class App extends Component {
    state = {
        lat: 43.0440,
        lng: -87.9084,
        zoom: 15,
        marker: {
            lat: 43.05,
            lng: -87.91
        }
    }

    constructor() {
        super();
        this.setMarker = this.setMarker.bind(this);
        this.getMarker = this.getMarker.bind(this);
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        var driverIcon = L.icon({
            iconUrl: 'https://png.icons8.com/metro/1600/car.png',
            iconSize: [30,30],
            iconAnchor: [15,15],
            popupAnchor: [0,-10]
        });

        var schoolIcon = L.icon({
            iconUrl: 'https://cdn4.iconfinder.com/data/icons/building-1/512/build2-512.png',
            iconSize: [30,30],
            iconAnchor: [15,15],
            popupAnchor: [0,-10]
        })

        return (
            <div>
                <MarkerMover getMarker={this.getMarker} setMarker={this.setMarker}/>
                <Map attributionControl={false} center={position} zoom={this.state.zoom}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={this.state.marker} icon={driverIcon}>
                        <Popup>
                            Latitude: {this.state.marker.lat}<br/>
                            Longitude: {this.state.marker.lng}
                        </Popup>
                    </Marker>
                    <Marker position={position} icon={schoolIcon}>
                        <Popup>
                            Latitude: {this.state.lat}<br/>
                            Longitude: {this.state.lng}
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }

    setMarker(marker) {
        this.setState({marker: marker});
    }

    getMarker() {
        return this.state.marker;
    }
}

export default App;
