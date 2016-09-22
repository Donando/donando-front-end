import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'containers/header'
import Footer from 'containers/footer'
import Notification from 'components/notification'
import AboutUs from 'components/aboutUs'
import Contact from 'components/contact'
import Impressum from 'components/impressum'

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aboutUs: false,
      contact: false,
      impressum: false
    }

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(value) {
    this.setState({
      aboutUs: false,
      contact: false,
      impressum: false
    });

    this.setState({
      [value]: !this.state[value]
    });

    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className = 'container'>
        <div className = 'main'>
          <Header />

          <div className = {this.props.common.loadingStatus === 'loading'? 'loading-container': 'loading-container hide'}>
            {/*
            <p>Loading results....<br/>Please wait</p>
            */}
            <p>Ergebnisse werden geladen</p>
          </div>

          <Notification message = {this.props.common.notificationMessage} />

          {this.props.children}

          <Footer handleClick={this.toggleModal}/>

          <div className={this.state.aboutUs ? 'modal' : 'modal__hide'}>
            <AboutUs handleClick={this.toggleModal} />
          </div>

          <div className={this.state.impressum ? 'modal' : 'modal__hide'}>
            <Impressum handleClick={this.toggleModal} />
          </div>

          <div className={this.state.contact ? 'modal' : 'modal__hide'}>
            <Contact handleClick={this.toggleModal} />
          </div>
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
