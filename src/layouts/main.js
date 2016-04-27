import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './header'

export class Main extends Component {
  render() {
    return (
      <div className = 'container'>
        <Header />
        {this.props.children}
      </div>)
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Main)
