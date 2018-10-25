import React, {Component} from 'react';
import './styles/about.css';

class About extends Component {

    render(){

        return (
          <section className="about-container" id="about">
          <h2 className="about-title">About Me</h2>
          <div className="about-info">
          <p className="about-text">
          I firmly feel that I know what makes me want to wake up in the morning, what genuinely excites me, and what entices me to push boundaries and test my limits. <br /><br /> My goal is to work my way to the top of the web development industry, then become a leader in the video game industry. <br /><br />
          I am a Full-Stack Web Developer and Graphic Designer. I love to create art through drawing, painting, graphic design, and photography. I even play video games on YouTube!<br /><br /> I aspire to be a Website Developer, Computer Programmer, Video Game Designer, CEO, Philanthropist, Surfer, and a positive influence on the lives of others.<br /><br /> If you have a vision that you feel like I can help you with, then I would be both excited and honored to help you pursue your dream. Because aiding someone's dream with my skills will help me achieve my own goals.




          </p>


          <ul className="about-photo-list">
          <li><img src={require('./images/about1.jpg')} className="about-img-1" alt="Collage of me posing on a rooftop"/></li>
          <li><img src={require('./images/about2.jpg')} className="about-img-2" alt="Eric and I in Athens"/></li>
          <li><img src={require('./images/about3.jpg')} className="about-img-3" alt="Me in fron of a flag"/></li>
          </ul>
        </div>

          </section>
        )
    }
}

export default About;