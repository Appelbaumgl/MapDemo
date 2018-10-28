import React, { Component } from 'react'

class MarkerMover extends Component {

    state = {}

    constructor() {
        super();
        this.state.Latitude = '';
        this.state.Longitude = '';
    }

    componentDidMount() {
        var marker = this.props.getMarker();
        this.setState({
            Latitude: marker.lat,
            Longitude: marker.lng
        });
    }

    render() {
        return (
            <div>
                <label> Latitude: </label>
                <input type='number' value={this.state.Latitude} onChange={(event) => this.handleChange('Latitude', event)}/>
                <label> Longitude: </label>
                <input type='number' value={this.state.Longitude} onChange={(event) => this.handleChange('Longitude', event)}/>
                <button onClick={ () => { this.handleSubmit() } }>Submit</button>
            </div>
        );
    }

    handleChange(field, event) {
        if (field === 'Latitude') {
            this.setState({ Latitude: event.target.value });
        } else if (field === 'Longitude') {
            this.setState({ Longitude: event.target.value });
        }
    }

    handleSubmit() {
        var lat = Number.parseFloat(this.state.Latitude);
        var lng = Number.parseFloat(this.state.Longitude);
        if (isNaN(lat) || isNaN(lng)) {
            return;
        } else {
            this.props.setMarker({ lat: lat, lng: lng });
        }
    }
}

export default MarkerMover;
