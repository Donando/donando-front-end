// Library
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

export class LocationSearch extends Component {
  constructor () {
    super();
    this.state = {
      showError: false
    };
    this.handleSearchByLocationAndText = this.handleSearchByLocationAndText.bind(this);
    this.handleKeyDownTextBox = this.handleKeyDownTextBox.bind(this);
  }
  handleSearchByLocationAndText() {
    if(this.locationInput.value.trim()) {
      // Fix me: move routes separately
      browserHistory.push('/search?location=' + this.locationInput.value + '&item=' + this.itemInput.value);
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
            <input ref = {(ref) => this.itemInput = ref} type='text' placeholder='Search for items that you want to donate (optional)' />
            <button onClick = {this.handleSearchByLocationAndText}>Search</button>
            <p className={this.state.showError? '': 'hidden'}>Please enter location or pincode</p>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(LocationSearch)
