import React, {Component} from 'react';
import './App.css';

class ArtworkPhotography extends Component {

  render (){
    return (
      <section className="artwork-container" id="artwork-photography">
      <h2 className="artwork-title">Artwork & Photography</h2>
      <div className="artworks">
      <ul className="artphoto-list-1">
      <li><img src={require('./images/photography/dt-after-dark-1.png')} className="artwork-img-2" alt="Alicia Key's Here Album Cover Recreation" /></li>
      <li><img src={require('./images/artwork/school_daze.jpg')} className="artwork-img-1" alt="Mogami 4in cover art" /></li>
      <li><img src={require('./images/photography/infusion-shoot-1.jpg')} className="artwork-img-3" alt="Alpha Week Flyer Compilation - University of Georgia Alpha Phi Alpha Chapter" /></li>
      </ul>
      <ul className="artphoto-list-2">
      <li><img src={require('./images/artwork/album-shoot-2.png')} className="artwork-img-1" alt="The Weekend's Trilogy Album Cover Recreation" /></li>
      <li><img src={require('./images/photography/flowers.jpg')} className="artwork-img-1" alt="The Weekend's Trilogy Album Cover Recreation" /></li>
      <li><img src={require('./images/artwork/Mogami-Vice-Club.jpg')} className="artwork-img-2" alt="Mogami Vice Club promo art piece" /></li>
      </ul>
      <ul className="artphoto-list-3">
      <li><img src={require('./images/photography/DSCF4074.jpg')} className="artwork-img-3" alt="India Arie's Acoustic Soul Album Cover Recreation" /></li>
      <li><img src={require('./images/artwork/SON-GOKU.jpg')} className="artwork-img-2" alt="Son Goku homage piece" /></li>
      <li><img src={require('./images/photography/DSC_0175.jpg')} className="artwork-img-1" alt="Sun Gods" /></li>
      </ul>
      </div>
      </section>
    )
  }

}

export default ArtworkPhotography;