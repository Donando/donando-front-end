import React, { Component } from 'react'

export default class Impressum extends Component {
  render() {
    return (
      <div>
        <div className='modal__div'>
          <span onClick={() => this.props.handleClick('impressum')}>[x]</span>
        </div>

        <div className='modal__div'>
          <h2>IMPRESSUM</h2>
          <p>
            <b>donandoapp.com</b> ist ein Angebot der
          </p>
        </div>

        <div className='modal__div'>
          <p>
            Zalando SE
            <br/>
            Tamara-Danz- Straße 1
            <br/>
            10243 Berlin
            <br/>
            Telefax: +49 (0)30 2759 46 93
            <br/>
            E-Mail: info@zalando.de
          </p>
        </div>

        <div className='modal__div'>
          <h2>Vorstand:</h2>
          <p>
            Robert Gentz, David Schneider, Rubin Ritter
          </p>
        </div>

        <div className='modal__div'>
          <h2>Vorsitzende des Aufsichtsrates:</h2>
          <p>
            Lothar Lanz
          </p>
        </div>

        <div className='modal__div'>
          <p>
            Eingetragen beim Amtsgericht Charlottenburg Berlin, HRB 158855 B
            <br/>
            Umsatzsteuer-ID: DE 260543043
            <br/>
            Steuernummer: 37/132/45004
            <br/><br/>
            Verantwortlicher für eigene Inhalte der Zalando SE gem. § 55 II RStV: Robert Gentz
          </p>
        </div>
      </div>
    )
  }
}
