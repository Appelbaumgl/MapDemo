import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'

class App extends Component {
  state = {
    lat: 43.0440,
    lng: -87.9084,
    zoom: 15,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map key={'map'} center={position} zoom={this.state.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    );
  }
}

export default App;
