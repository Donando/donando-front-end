import React, { Component } from 'react'
import { connect } from 'react-redux'

//import { action_1 } from 'redux/reducers/child-reducer'

import 'styles/header.scss'

export class Header extends Component {
  render() {
    return (
      <header className = 'header clearfix'>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#main-menu' aria-expanded='false'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
              <a className='navbar-brand' href='#'>Donando</a>
            </div>
            <div className='collapse navbar-collapse clearfix' id='main-menu'>
              <div className='menu-list'>
                <ul className='nav navbar-nav'>
                  <li className='active'><a href='#'>Link <span className='sr-only'>(current)</span></a></li>
                  <li><a href='#'>Link</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
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
