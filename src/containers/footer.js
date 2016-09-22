import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <ul className='footer__nav'>
          <li>
            <a onClick={() => this.props.handleClick('aboutUs')}>
              About Us
            </a>
          </li>
          <li>
            <a onClick={() => this.props.handleClick('contact')}>
              Contact
            </a>
          </li>
        </ul>
      </footer>
    )
  }
}

export default Footer
