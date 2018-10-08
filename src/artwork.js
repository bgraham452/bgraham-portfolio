import React, {Component} from 'react';
import './App.css';

class Artwork extends Component {

  render (){
    return (
      <section className="artwork-container" id="artwork">
      <h2 className="artwork-title">Artwork</h2>
      <div className="artworks">
      <ul className="artwork-list-1">
      <li><img src={require('./images/artwork/4in.png')} className="artwork-img-1" alt="Mogami 4in cover art" /></li>
      <li><img src={require('./images/artwork/album-shoot-1.png')} className="artwork-img-2" alt="Alicia Key's Here Album Cover Recreation" /></li>
      <li><img src={require('./images/artwork/drawings-paintings.png')} className="artwork-img-3" alt="Various drawings and paintings" /></li>
      </ul>
      <ul className="artwork-list-2">
      <li><img src={require('./images/artwork/album-shoot-2.png')} className="artwork-img-1" alt="The Weekend's Trilogy Album Cover Recreation" /></li>
      <li><img src={require('./images/artwork/Mogami-Vice-Club.jpg')} className="artwork-img-2" alt="Mogami Vice Club promo art piece" /></li>
      <li><img src={require('./images/artwork/school_daze.jpg')} className="artwork-img-3" alt="Alpha Week Flyer Compilation - University of Georgia Alpha Phi Alpha Chapter" /></li>
      </ul>
      <ul className="artwork-list-3">
      <li><img src={require('./images/artwork/SUNGODS-twitter.jpg')} className="artwork-img-1" alt="Sun Gods" /></li>
      <li><img src={require('./images/artwork/SON-GOKU.jpg')} className="artwork-img-2" alt="Son Goku homage piece" /></li>
      <li><img src={require('./images/artwork/album-shoot-3.png')} className="artwork-img-3" alt="India Arie's Acoustic Soul Album Cover Recreation" /></li>
      </ul>
      </div>
      </section>
    )
  }

}

export default Artwork;