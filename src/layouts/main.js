import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './header'

export class Main extends Component {
  render() {
    return (
      <div className = 'container'>
        <Header />
        <div className = 'relative'>
          <div className={this.props.searchStatus === 'loading'? 'loading-container': 'loading-container hide'}>
            <p>Loading results....<br/>Please wait</p>
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  searchStatus: React.PropTypes.string.isRequired
}
function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Main)
