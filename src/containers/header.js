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
            <div className = 'input-group'>
              <input type = 'text' placeholder = 'what can you give?' />
              <span className = 'search-icon'><img src = '../static/images/icons/search.svg' /></span>
            </div>
          </div>
          <div className = 'search-input'>
            <label>Location</label>
            <div className = 'input-group'>
              <input type = 'text' placeholder = 'where is it needed?' />
              <span className = 'search-icon'><img src = '../static/images/icons/search.svg' /></span>
            </div>
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
