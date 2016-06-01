import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'containers/header'
import Notification from 'components/notification'

export class Main extends Component {
  render() {
    let notification = {message: '1349 NGOs found!'}; //FIX: to be replace with a value from the reducer
    return (
      <div className = 'container'>
        <div className = 'main'>
          <Header />
          <div className = {this.props.searchStatus === 'loading'? 'loading-container': 'loading-container hide'}>
            <p>Loading results....<br/>Please wait</p>
          </div>
          <Notification notification = {notification} />
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
