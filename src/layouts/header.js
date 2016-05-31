import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

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
              <Link to = '/' className = 'navbar-brand'>Donando</Link>
            </div>
            {
              /*
                Fix me: Have proper menus
              */
            }
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
      </header>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Header)
