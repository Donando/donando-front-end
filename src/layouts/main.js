import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from './header'

export class Main extends Component {
  render() {
    return (
      <div className = 'container'>
        <Header text = {this.props.child_1} />
        {this.props.children}
      </div>)
  }
}

function mapStateToProps(state) {
  return state
}

Main.propTypes = {
  child_1: React.PropTypes.string
};

export default connect(mapStateToProps)(Main)
