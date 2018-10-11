import React, {Component} from 'react';
import './App.css';

class ArtworkPhotography extends Component {

  render (){
    return (
      <section className="artwork-container" id="artwork-photography">
      <h2 className="artwork-title">Artwork & Photography</h2>
      <div className="artworks">
      <ul className="artphoto-list-1">
      <li>
      <div class="container">
        <img src={require('./images/photography/dt-after-dark-1.png')} className="artwork-img-2" alt="Alicia Key's Here Album Cover Recreation" />
        <div class="overlay">
    <div class="text"> 
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
      <div class="container">
        <img src={require('./images/artwork/school_daze.jpg')} className="artwork-img-1" alt="Mogami 4in cover art" />
        <div class="overlay">
    <div class="text"> <p className="overlay-description">
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
      <div class="container">
        <img src={require('./images/photography/infusion-shoot-1.jpg')} className="artwork-img-3" alt="Alpha Week Flyer Compilation - University of Georgia Alpha Phi Alpha Chapter" />
        <div class="overlay">
    <div class="text"> <p className="overlay-description">
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
      <div class="container">
        <img src={require('./images/artwork/album-shoot-2.png')} className="artwork-img-1" alt="The Weekend's Trilogy Album Cover Recreation" />
        <div class="overlay">
    <div class="text"> <p className="overlay-description">
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
      <div class="container">
        <img src={require('./images/photography/flowers.jpg')} className="artwork-img-1" alt="The Weekend's Trilogy Album Cover Recreation" />
        <div class="overlay">
    <div class="text"> <p className="overlay-description">
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
      <div class="container">
        <img src={require('./images/artwork/Mogami-Vice-Club.jpg')} className="artwork-img-2" alt="Mogami Vice Club promo art piece" />
        <div class="overlay">
    <div class="text"> <p className="overlay-description">
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
      <div class="container">
        <img src={require('./images/photography/DSCF4074.jpg')} className="artwork-img-3" alt="India Arie's Acoustic Soul Album Cover Recreation" />
        <div class="overlay">
    <div class="text"> <p className="overlay-description">
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
      <div class="container">

        <img src={require('./images/artwork/SON-GOKU.jpg')} className="artwork-img-2" alt="Son Goku homage piece" />
        <div class="overlay">
    <div class="text"> <p className="overlay-description">
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
      <div class="container">
        <img src={require('./images/photography/DSC_0175.jpg')} className="artwork-img-1" alt="Sun Gods" />
        <div class="overlay">

        <div class="text"> <p className="overlay-description">
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