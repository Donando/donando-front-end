import React, { Component } from 'react'
import { connect } from 'react-redux'

import { load_location_data } from 'redux/reducers/filter-reducer'

import Map from 'components/map'

import 'styles/search-results.scss'

export class SearchResults extends Component {
  componentWillMount() {
    this.props.dispatch(load_location_data(this.props.params.name));
  }
  render() {
    let markerObjects = [];
    let searchResult = this.props.demands && this.props.demands.map((item, index) => {
      markerObjects.push(item.ngo);
      return (
        <div className='search-result' key={index}>
          <p>{item.data}</p>
          <p>{item.ngo.name}</p>
          <p>{item.ngo.phone}</p>
          <p>{item.ngo.email}</p>
          <p>{item.ngo.address}</p>
          <p>{item.ngo.latitude}</p>
          <p>{item.ngo.longitude}</p>
        </div>
      )
    });

    return (
      <div>
        <p>You search query: {this.props.params.name}</p>
        <Map markers = {markerObjects} />
        <p>Current value of API call : {this.props.searchStatus}</p>
        {
          searchResult
        }
      </div>
    )
  }
}
SearchResults.propTypes = {
  demands: React.PropTypes.array,
  searchStatus: React.PropTypes.string
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SearchResults)
