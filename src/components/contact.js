import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className='modal__div'>
          <span onClick={() => this.props.handleClick('contact')}>[x]</span>
        </div>

        <div className='modal__div'>
          <h2>admin@donandoapp.com</h2>
        </div>
      </div>
    )
  }
}
