import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import 'styles/location-search.scss'

export class LocationSearch extends Component {
  constructor () {
    super();
    this.state = {
      showError: false
    };
    this.handleSearchByLocation = this.handleSearchByLocation.bind(this);
    this.handleKeyDownTextBox = this.handleKeyDownTextBox.bind(this);
  }
  handleSearchByLocation() {
    if(this.locationInput.value.trim()) {
      // Fix me: move routes separately
      browserHistory.push('/search/location/'+this.locationInput.value);
    } else {
      this.setState({showError: true});
    }
  }
  handleKeyDownTextBox() {
    this.setState({showError: false});
  }
  render() {
    return (
      <div>
        <div className='location-container'>
          <div className='location-search'>
            <input ref = {(ref) => this.locationInput = ref} type='text' placeholder='Enter your zip code or place to search' onKeyDown = {this.handleKeyDownTextBox}/>
            <button onClick = {this.handleSearchByLocation}>Search</button>
            <p className={this.state.showError? '': 'hidden'}>Please enter location or pincode</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(LocationSearch)
