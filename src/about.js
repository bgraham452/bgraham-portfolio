import React, {Component} from 'react';
import './App.css';

class About extends Component {

    render(){

        return (
          <section className="about-container" id="about">
          <h2 className="about-title">About Me</h2>
          <div className="about-info">
          <p className="about-text">
          If you look up "Brandon Graham" on Google, Twitter, Facebook,  or anywhere else you look people up, you'll find out that the name is VERY common. <br /><br />
          
          There are radio hosts with that name, and my current favorite football player (who plays on my hometown Eagles) has my exact name. <br /><br />           


          In a world where there are more Brandon Graham's than I can count, my great friends blessed me with a stage name that has stood since: <b>Dutch Norris</b>. <br /><br />
          

          Who is Dutch Norris? <br /><br />
        
          The Black Chuck Norris?<br /><br />
          
           Dutch Norris is I and I am him. <br /><br />
          I am an artist, using whatever medium I can get my hands on. <br /><br />
          With my passions in: <br /><br />

             
- tech (full-stack web development)<br /><br />

- visual art (drawing, photography, & graphic design)<br /><br />

- music (check my SoundCloud)<br /><br />


          If I can create on/with it I will. <br /><br />
          Now that you're here check out my work!  <br /><br />
          View my galleries, visit the websites I've made! <br /><br />
          And once you see the quality of work I hold as my standard, feel free to contact me so I can work with/for you! 

          </p>


          <ul className="about-photo-list">
          <li><img src={require('./images/about1.jpg')} className="about-img-1" alt="1st about"/></li>
          <li><img src={require('./images/about2.jpg')} className="about-img-2" alt="1st about"/></li>
          <li><img src={require('./images/about3.jpg')} className="about-img-3" alt="1st about"/></li>
          </ul>
        </div>

          </section>
        )
    }
}

export default About;