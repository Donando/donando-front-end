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
  handleMarkerClick(marker, item) {
    // Fix me: Need a better logic here
    let infowindow = new google.maps.InfoWindow({content: '<h3>'+ item.name +'</h3>' +
      '<p>'+ item.phone+'</p>' +
      '<a href=javascript:void(0) class="info-window">Read More</a>'
    });
    console.log('marker is ', marker);
    infowindow.open(this.state.map, marker);
    // Fix me: Need a better logic here
    this.openModal();
  }
  updateMarkers(markerArray) {
    let marker;
    markerArray.map((item) => {
      marker = new google.maps.Marker({
        position: {
          lat: item.latitude || INITIAL_LATITUDE,
          lng: item.longitude || INITIAL_LONGITUDE
        },
        map: this.state.map
      });
      marker.addListener('click', () => {this.handleMarkerClick(marker, item)});
    });
  }
  openModal() {
    $( document ).delegate('.info-window', 'click', function(){
      this.props.openModal()
    }.bind(this));
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
    markers: React.PropTypes.array.isRequired,
    openModal: React.PropTypes.func
}
