import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Header extends Component {
  render() {
    return (
      <header className = 'header'>
        <div className = 'logo'>
          <img src = '../static/images/logo.svg' />
        </div>
        <div className = 'search-inputs'>
          <div className = 'search-input'>
            <label>Donation</label>
            <input type = 'text' placeholder = 'Donation' />
          </div>
          <div className = 'search-input'>
            <label>Location</label>
            <input type = 'text' placeholder = 'Location' />
          </div>
        </div>  
      </header>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Header)
