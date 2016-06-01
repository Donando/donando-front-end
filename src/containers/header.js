import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export class Header extends Component {
  constructor () {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.search = this.search.bind(this);
  }

  handleKeyPress(event) {
    if(event.key === 'Enter') {
      this.search();
    }
  }

  search() {
    browserHistory.push('/search?location=' + this.locationInput.value + '&item=' + this.itemInput.value);
  }

  gotoHomePage() {
    browserHistory.push('/');
  }

  render() {
    return (
      <header className = 'header'>
        
        <div className = 'logo' onClick = {this.gotoHomePage}>
          <img src = '../static/images/logo.svg' />
        </div>
        
        <div className = 'search-inputs'>
          
          <div className = 'search-input'>
            <label>Donation</label>
            <div className = 'input-group'>
              <input type = 'text' placeholder = 'what can you give?' ref = {(ref) => this.itemInput = ref} />
              <span className = 'search-icon'><img src = '../static/images/icons/search.svg' /></span>
            </div>
          </div>
          
          <div className = 'search-input'>
            <label>Location</label>
            <div className = 'input-group'>
              <input type = 'text' placeholder = 'where is it needed?' ref = {(ref) => this.locationInput = ref} onKeyPress = {this.handleKeyPress} />
              <span className = 'icon search-icon'><img src = '../static/images/icons/search.svg' /></span>
            </div>
          </div>
        </div>  
      </header>
    )
  }
}

export default Header
