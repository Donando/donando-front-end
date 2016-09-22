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

        <div className = 'logo' onClick = {this.gotoHomePage}></div>

        <div className = 'search-inputs'>

          <div className = 'search-input'>
            <label>Spende</label>
            <div className = 'input-group'>
              <input type = 'text' placeholder = 'Was kannst du spenden?' ref = {(ref) => this.itemInput = ref} onKeyPress = {this.handleKeyPress} onBlur = {this.search} />
              <span className = 'search-icon'><img src = '../static/images/icons/search.svg' /></span>
            </div>
          </div>

          <div className = 'search-input'>
            <label>Ort</label>
            <div className = 'input-group'>
              <input type = 'text' placeholder = 'Wo werden deine Spenden gebraucht?' ref = {(ref) => this.locationInput = ref} onKeyPress = {this.handleKeyPress} onBlur = {this.search} />
              <span className = 'icon search-icon'><img src = '../static/images/icons/search.svg' /></span>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

Header.contextTypes = { //required for the transitionTo function of react-router (to change routes)
  router: React.PropTypes.object.isRequired
}

export default Header
