import React, { Component } from 'react'

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className='modal__div'>
          <span onClick={() => this.props.handleClick('aboutUs')}>[x]</span>
        </div>

        <div className='modal__div'>
          <h2>Was ist Donando?</h2>
          <p>
            Donando unterstützt dich bei der Kleiderspende und zeigt dir, bei welchen Organisationen du in deiner Nähe Kleidung und andere Sachen spenden kannst.
          </p>
        </div>

        <div className='modal__div'>
          <h2>Wer und warum?</h2>
          <p>
            Wir sind eine Gruppe von Kollegen und wollten Anfang des Jahres unsere Kleidung für wohltätige Zwecke spenden - und wussten nicht wo. Erst nach längerer Recherche im Internet sind wir auf einige Presseartikel und Facebook-Gruppen gestoßen, in denen Informationen darüber zu finden waren, wo man spenden konnte. Wir dachten, das geht auch einfacher und so schlossen wir uns zusammen, um diese App & Webseite zu entwickeln.
          </p>
        </div>

        <div className='modal__div'>
          <h2>Wir suchen Unterstützung</h2>
          <p>
            Wenn du weitere Organisationen kennst, bei denen man Kleidung spenden kann, schick uns bitte den Namen der Organisation, die Adresse, benötigte Spenden (oder einen Link zur Bedarfsliste) und einen Link zu deren Webseite.
            <br/>
            Darüber hinaus suchen wir nach Web- und iOS- Entwicklern, die uns dabei helfen können, Donando weiterzuentwickeln.
          </p>
        </div>
      </div>
    )
  }
}
