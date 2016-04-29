// Library
import React, { Component } from 'react'
import $ from 'jquery'
// Styles
import 'styles/map.scss'
// Constants
// Inital lat long is Berlin
const INITIAL_LATITUDE = 52.52;
const INITIAL_LONGITUDE = 13.4050;
const INITIAL_ZOOM = 8;

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      map: null
    }
    this.updateMarkers = this.updateMarkers.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }
  handleMarkerClick(marker) {
    let infowindow = new google.maps.InfoWindow({content: '<h3>Hello World</h3>'});
    infowindow.open(this.state.map, marker);
  }
  updateMarkers(markerArray) {
    let marker;
    markerArray.map((item) => {
      marker = new google.maps.Marker({
        position: {
          lat: item.latitude,
          lng: item.longitude
        },
        map: this.state.map
      });
      marker.addListener('click', () => {this.handleMarkerClick(marker, item)});
    });
  }
  componentDidMount() {
    let map = new google.maps.Map($('#map').get(0), {
          center: {
            lat: INITIAL_LATITUDE,
            lng: INITIAL_LONGITUDE
          },
          zoom: INITIAL_ZOOM
        });
    this.setState({map});
    this.updateMarkers(this.props.markers);
  }
  componentWillReceiveProps(nextProps) {
    this.updateMarkers(nextProps.markers);
  }
  render() {
    return (
      <div id = 'map' className = 'map'>
      </div>
    )
  }
}

Map.propTypes = {
    markers: React.PropTypes.array.isRequired
}
