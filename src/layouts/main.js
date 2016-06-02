import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'containers/header'
import Notification from 'components/notification'

export class Main extends Component {
  render() {
    return (
      <div className = 'container'>
        <div className = 'main'>
          <Header />
          <div className = {this.props.common.loadingStatus === 'loading'? 'loading-container': 'loading-container hide'}>
            <p>Loading results....<br/>Please wait</p>
          </div>
          <Notification message = {this.props.common.notificationMessage} />
          {this.props.children}
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  common: React.PropTypes.object.isRequired
}
function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Main)
