import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <ul className='footer__nav'>
          <li>
            <a onClick={() => this.props.handleClick('aboutUs')}>
              Über uns
            </a>
          </li>
          <li>
            <a onClick={() => this.props.handleClick('impressum')}>
              Impressum
            </a>
          </li>
          <li>
            <a onClick={() => this.props.handleClick('contact')}>
              Kontakt
            </a>
          </li>
        </ul>
      </footer>
    )
  }
}

export default Footer
