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
      <li><img src={require('./images/artwork/album-shoot-1.png')} className="artwork-img-2" alt="Mogami 4in cover art" /></li>
      <li><img src={require('./images/artwork/drawings-paintings.png')} className="artwork-img-3" alt="Mogami 4in cover art" /></li>
      </ul>
      <ul className="artwork-list-2">
      <li><img src={require('./images/artwork/album-shoot-2.png')} className="artwork-img-1" alt="Mogami 4in cover art" /></li>
      <li><img src={require('./images/artwork/Mogami-Vice-Club.jpg')} className="artwork-img-2" alt="Mogami 4in cover art" /></li>
      <li><img src={require('./images/artwork/school_daze.jpg')} className="artwork-img-3" alt="Mogami 4in cover art" /></li>
      </ul>
      <ul className="artwork-list-3">
      <li><img src={require('./images/artwork/SUNGODS-twitter.jpg')} className="artwork-img-1" alt="Mogami 4in cover art" /></li>
      <li><img src={require('./images/artwork/SON-GOKU.jpg')} className="artwork-img-2" alt="Mogami 4in cover art" /></li>
      <li><img src={require('./images/artwork/album-shoot-3.png')} className="artwork-img-3" alt="Mogami 4in cover art" /></li>
      </ul>
      </div>
      </section>
    )
  }

}

export default Artwork;