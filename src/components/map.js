import React, { Component } from 'react'
import $ from 'jquery';
import 'styles/map.scss'

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
    let infowindow = new google.maps.InfoWindow({content: '<h3 class="info-window">Hello World</h3>'});
    infowindow.open(this.state.map, marker);
    this.openModal()
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
  openModal() {
    $( document ).delegate('.info-window', 'click', function(){
      this.props.openModal()
    }.bind(this));
  }
  componentDidMount() {
    let map = new google.maps.Map(document.getElementById('map'), {
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
