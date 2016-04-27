import React, { Component } from 'react'
import { connect } from 'react-redux'

import { change_filter_location } from 'redux/reducers/filter-reducer'

import 'styles/search-results.scss'

export class SearchResults extends Component {
  componentWillMount() {
    this.props.dispatch(change_filter_location(this.props.params.name));
  }
  render() {
    return (
      <div>
        <p>You search query: {this.props.params.name}</p>
        <p>Current value of API call : {this.props.searchStatus}</p>
        {
          this.props.demands && this.props.demands.map((item, index) => {
            return (
              <div className='search-result' key={index}>
                <p>{item.data}</p>
                <p>{item.ngo.name}</p>
                <p>{item.ngo.phone}</p>
                <p>{item.ngo.email}</p>
                <p>{item.ngo.address}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SearchResults)
