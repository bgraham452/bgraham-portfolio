import React, {Component} from 'react';
import './styles/artwork-photography.css';

class ArtworkPhotography extends Component {

  render (){
    return (
      <section className="artwork-container" id="artwork-photography">
      <h2 className="artwork-title">Artwork & Photography</h2>
      <div className="artworks">
      <ul className="artphoto-list-1">
      <li>
      <div className="container">
        <img src={require('./images/photography/dt-after-dark-1.png')} className="artwork-img-2" alt="Downtown After Dark Photoshoot" />
        <div className="overlay">
    <div className="text"> 
    <p className="overlay-description">
        Downtown After Dark Photoshoot <br />
        Role: Photographer
        </p>   </div>
    </div>
  </div>

      </li>
      <li>
      <p className="img-description">
        Downtown After Dark Photoshoot <br />
        Role: Photographer
        </p> 
      </li>
      <li>
      <div className="container">
        <img src={require('./images/artwork/school_daze.jpg')} className="artwork-img-1" alt="UGA Alpha Week Promotional Flyer Compilation" />
        <div className="overlay">
    <div className="text"> <p className="overlay-description">
        UGA Alpha Week Promotional Flyer Compilation <br />
        Role: Photographer & Graphic Designer
        </p>     </div>
    </div>
  </div>
        </li>
      <li>
      <p className="img-description">
      UGA Alpha Week Promotional Flyer Compilation <br />
        Role: Photographer & Graphic Designer
        </p>
     </li>
      <li>
      <div className="container">
        <img src={require('./images/photography/infusion-shoot-1.jpg')} className="artwork-img-3" alt="Infusion Spring 2018 Photoshoot" />
        <div className="overlay">
    <div className="text"> <p className="overlay-description">
    Infusion Spring 2018 Photoshoot <br />
        Role: Photographer
        </p>     </div>
    </div>
  </div>
        </li>
      <li>
        <p className="img-description">
        Infusion Spring 2018 Photoshoot <br />
        Role: Photographer
        </p>   
     </li>
      </ul>
      <ul className="artphoto-list-2">
      <li>
      <div className="container">
        <img src={require('./images/artwork/album-shoot-2.png')} className="artwork-img-1" alt="Album Cover Re-creation Photoshoot" />
        <div className="overlay">
    <div className="text"> <p className="overlay-description">
    Album Cover Re-creation Photoshoot <br />
        Role: Photographer & Graphic Designer
        </p>     </div>
    </div>
  </div>
        </li>
      <li>
        <p className="img-description">
        Album Cover Re-creation Photoshoot <br />
        Role: Photographer & Graphic Designer
        </p>   
     </li>
      <li>
      <div className="container">
        <img src={require('./images/photography/flowers.jpg')} className="artwork-img-1" alt="North Campus Nature Photoshoot" />
        <div className="overlay">
    <div className="text"> <p className="overlay-description">
    North Campus Nature Photoshoot <br />
        Role: Photographer
        </p>     </div>
    </div>
  </div>
        </li>
      <li>
        <p className="img-description">
        North Campus Nature Photoshoot <br />
        Role: Photographer
        </p>   
     </li>
      <li>
      <div className="container">
        <img src={require('./images/artwork/Mogami-Vice-Club.jpg')} className="artwork-img-2" alt="Mogami Vice Club promo art piece" />
        <div className="overlay">
    <div className="text"> <p className="overlay-description">
    Mogami Vice Club Promotional Art Piece <br />
        Role: Graphic Designer
        </p>     </div>
    </div>
  </div>
        </li>
      <li>
        <p className="img-description">
        Mogami Vice Club Promotional Art Piece <br />
        Role: Graphic Designer
        </p>   
     </li>
      </ul>
      <ul className="artphoto-list-3">
      <li>
      <div className="container">
        <img src={require('./images/photography/DSCF4074.jpg')} className="artwork-img-3" alt="UGA Black Lives Matter Silent Rally" />
        <div className="overlay">
    <div className="text"> <p className="overlay-description">
    UGA Black Lives Matter Silent Rally <br />
        Role: Photographer
        </p>     </div>
    </div>
  </div>
        </li>
      <li>
        <p className="img-description">
        UGA Black Lives Matter Silent Rally <br />
        Role: Photographer
        </p>   
     </li>
      <li>
      <div className="container">

        <img src={require('./images/artwork/SON-GOKU.jpg')} className="artwork-img-2" alt="Son Goku 3-D Promotional Art Piece" />
        <div className="overlay">
    <div className="text"> <p className="overlay-description">
    Son Goku 3-D Promotional Art Piece <br />
        Role: Graphic Designer
        </p>     </div>
    </div>
  </div>
        </li>
      <li>
        <p className="img-description">
        Son Goku 3-D Promotional Art Piece <br />
        Role: Graphic Designer
        </p>   
     </li>
      <li>
      <div className="container">
        <img src={require('./images/photography/DSC_0175.jpg')} className="artwork-img-1" alt="Infusion Fall 2018 Photoshoot" />
        <div className="overlay">

        <div className="text"> <p className="overlay-description">
        Infusion Fall 2018 Photoshoot <br />
        Role: Photographer
        </p>     </div>
    </div>
    </div>
        </li>
      <li>
        <p className="img-description">
        Infusion Fall 2018 Photoshoot <br />
        Role: Photographer
        </p>   
     </li>
      </ul>
      </div>
      </section>
    )
  }

}

export default ArtworkPhotography;