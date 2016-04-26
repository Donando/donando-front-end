import React, { Component } from 'react'
import { connect } from 'react-redux'

//import { action_1 } from 'redux/reducers/child-reducer'

import 'styles/header.scss'

export class Header extends Component {
  render() {
    return (
      <header className = 'header clearfix'>
        <div className = 'pull-left'>
          <a href='/' className = 'logo'>Donando</a>
        </div>
        <div className = 'pull-right'>
        </div>
        {/*
          {this.props.text}
          <button onClick = {() => (this.props.dispatch(action_1({text: 'This is from UI'})))}>Click to dispatch action</button>
        */}
      </header>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

Header.propTypes = {
  text: React.PropTypes.string
};

export default connect(mapStateToProps)(Header)
