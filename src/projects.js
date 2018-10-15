import React, {Component} from 'react';
import './styles/projects.css';

class Projects extends Component {

    render(){
        
        return (
          <section className="projects-container" id="projects">
          <h2 className="projects-header">Projects</h2>
          <ul className="project-list">
          <li>
              <h3><u className="project-title-1">Weather FM</u></h3>
              <p className="project1-description">
              <img src={require('./images/weather-fm.png')} className="project-shot-1" alt="Weather FM Website"/>
              
              Looking for the right rainy day music? Need some tunes to get you grooving in the sun? Then Weather FM is for YOU!<br /><br />

This is a playlist app that generates mood music based on the weather in your area ☀️🎶⛅🎶☁️ .<br /><br /> Features include:<br /> <strong>Discover </strong> - Allows users to generate music that reflects the weather, add a song to that specific weather playlist,and tweak the discover songs by adjusting song attributes like happiness, popularity and danceability. <br /><br />
<strong>Playlists</strong> - Allows users to take songs from discover and add/delete them to/from their personal weather playlists and export their personal playlist with Spotify (Must have a Spotify account). <br /><br />
<strong>Customization</strong> - Allow users to access all of their different weather playlists as well as use the discover feature, regardless of the current weather. By changing the current weather, users can generate rainy day playlists when its sunny outside. Similarly, if a user does not want to share their location, or wants to discover music for another weather, they can manually set the weather. <br /> <br />
<a href="https://github.com/thinkful-ei22/WeatherFM-Client-PurpleCobras" className="project-links">View GitHub Repo</a><br />
<a href ="https://weatherfm-client.herokuapp.com/" className="project-links">Visit Project Site</a>

</p>  
<h4 className="skill-title">Skills Used:</h4>
<ul className="skill-bars-1 top">
<li>
  <img src={require('./images/icons/node.svg')} className="project-skill-node" alt="Node" />
</li>
<li>
  <img src={require('./images/icons/js.png')} className="project-skill-js" alt="javascript" />
</li>
<li>
  <img src={require('./images/icons/mongodb.png')} className="project-skill-mongodb" alt="mongoDB" />
</li>

<li>
  <img src={require('./images/icons/004-express-js.png')} className="project-skill-express" alt="css" />
</li>
<li>
  <img src={require('./images/icons/ajax.png')} className="project-skill-ajax" alt="css" />
</li>
</ul>
<ul className="skill-bars-1">
<li>
  <img src={require('./images/icons/reactv4.jpg')} className="project-skill-react" alt="React" />
</li>
<li>
  <img src={require('./images/icons/css.png')} className="project-skill-css" alt="css" />
</li>
<li>
  <img src={require('./images/icons/mocha.png')} className="project-skill-mocha" alt="css" />
</li>
<li>
  <img src={require('./images/icons/git.png')} className="project-skill-git" alt="css" />
</li>
<li>
  <img src={require('./images/icons/HTML5_Logo_512.png')} className="project-skill-html" alt="css" />
</li>
<li>
  <img src={require('./images/icons/redux.svg')} className="project-skill-redux" alt="Redux" />
</li>
</ul>
        </li>
        <li>
              <h3><u className="project-title-2"><br /><br />Dream's Destination Travel App</u></h3>
              <p className="project2-description">
              <img src={require('./images/DD-Home.png')} className="project-shot-2" alt="Dreams Destination Travel App"/>
              
              <br />Looking for the travel destination of your dreams? This is the app for you! <br /><br /> Not only does it provide popular destinations at reasonable prices, but we put the Dreams Destinations touch on every trip. We help find events in that area and provide Dreams Destination packages complete with gifts and souvenirs so you don't forget your magical vacation!  <br /><br /> We even organize events in certain locations where you and your friends can join other travelers for drinks, partying, sightseeing, and more!  <br />
<a href="https://github.com/thinkful-ei22/BG-Dreams-Destination-React-Native" className="project-links">View GitHub Repo</a><br />
<a href="https://expo.io/@bgraham452/dreams-destination-v2" className="project-links">Visit Project Site</a><br />

</p>  
<h4 className="skill-title">Skills Used:</h4>
<ul className="skill-bars-2">
<li>
  <img src={require('./images/icons/reactv4.jpg')} className="project-skill-react" alt="React" />
</li>
<li>
  <img src={require('./images/icons/js.png')} className="project-skill-js" alt="javascript" />
</li>
<li>
  <img src={require('./images/icons/css.png')} className="project-skill-css" alt="css" />
</li>
<li>
  <img src={require('./images/icons/git.png')} className="project-skill-git" alt="git" />
</li>
</ul>
        
        
        </li>
        <li>
              <h3> <br /><br /><u className="project-title-3">LowerReact's Fantasy Football Rankings App</u></h3>
              <p className="project3-description">
              <img src={require('./images/FFRankingsApp.png')} className="project-shot-3" alt="Fantasy Football Rankings Website"/>
              
              Love Fantasy Football? Need a guide to draft with? Then this is the app for you! Introudcing LowerReact's Fantasy Football Draft App!<br /><br />

This app is a comprehensive list of players in the NFL ranked in order to give you a better idea on who to draft when your turn comes. Usable for both Standard and PPR (Points-Per-Reception) leagues, this app allows you to search a player by name and sort by the players' name (A-Z & Z-A) and ranking (1-X & X-1).<br /><br />
<a href="https://github.com/thinkful-ei22/bgraham-ff-rankings-client" className="project-links">View GitHub Repo</a><br />
<a href ="https://floating-mesa-73214.herokuapp.com/" className="project-links">Visit Project Site</a>

</p>  
<h4 className="skill-title">Skills Used:</h4>
<ul className="skill-bars-3">
<li>
  <img src={require('./images/icons/reactv4.jpg')} className="project-skill-react" alt="Node" />
</li>
<li>
  <img src={require('./images/icons/node.svg')} className="project-skill-node" alt="Node" />
</li>
<li>
  <img src={require('./images/icons/js.png')} className="project-skill-js" alt="javascript" />
</li>
<li>
  <img src={require('./images/icons/mongodb.png')} className="project-skill-mongodb" alt="mongoDB" />
</li>
<li>
  <img src={require('./images/icons/004-express-js.png')} className="project-skill-express" alt="css" />
</li>
</ul>
<ul className="skill-bars-3 bottom">
<li>
  <img src={require('./images/icons/css.png')} className="project-skill-css" alt="css" />
</li>
<li>
  <img src={require('./images/icons/HTML5_Logo_512.png')} className="project-skill-html" alt="css" />
</li>
<li>
  <img src={require('./images/icons/git.png')} className="project-skill-git" alt="css" />
</li>
<li>
  <img src={require('./images/icons/ajax.png')} className="project-skill-ajax" alt="css" />
</li>
<li>
  <img src={require('./images/icons/redux.svg')} className="project-skill-redux" alt="Redux" />
</li>
</ul>
        </li>
        </ul>

          </section>
        )
    }
}

export default Projects;