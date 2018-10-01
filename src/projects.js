import React, {Component} from 'react';
import './App.css';
import SkillBar from 'react-skillbars';

class Projects extends Component {

    render(){
        const project1Skills = [
            {type: "React.js", level: 40},
            {type: "Redux", level: 10},
            {type: "Node.js", level: 30},
            {type: "MongoDB", level: 20},
    
          ];
          const colors = {
            "bar": "#34E4EA",
            "title": {
              "text": "#F5EFED",
              "background": "#0EB1D2"
            }
          }
        return (
          <section className="projects-container" id="projects">
          <h2 className="projects-header">Projects</h2>
          <ul className="project-list">
          <li>
              <h3><u className="project-title">LowerReact's Fantasy Football Rankings App</u></h3>
              <p className="project-description">
              <img src={require('./images/FFRankingsApp.png')} className="project-shot-1" alt="1st about"/>
              
              Love Fantasy Football? Need a guide to draft with? Then this is the app for you! Introudcing LowerReact's Fantasy Football Draft App!<br /><br />

This app is a comprehensive list of players in the NFL ranked in order to give you a better idea on who to draft when your turn comes. Usable for both Standard and PPR (Points-Per-Reception) leagues, this app allows you to search a player by name and sort by the players' name (A-Z & Z-A) and ranking (1-X & X-1).<br /><br />
<a href="https://github.com/thinkful-ei22/bgraham-ff-rankings-client" className="project-links">View GitHub Repo</a><br />
<a href ="https://floating-mesa-73214.herokuapp.com/" className="project-links">Visit Project Site</a>

</p>  
<h4 className="skill-title">Skills Used:</h4>
<div className="skill-bars">
<SkillBar skills={project1Skills} colors={colors} />
</div>
        </li>
        {/* <li>
              <h3>LowerReact's Fantasy Football Rankings App</h3>
              <p>
              <img src={require('./images/about1.jpg')} className="project-shot-1" alt="1st about"/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.</p>  
        </li>
        <li>
              <h3>LowerReact's Fantasy Football Rankings App</h3>
              <p>
              <img src={require('./images/about1.jpg')} className="project-shot-1" alt="1st about"/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.</p>  
        </li> */}
        </ul>

          </section>
        )
    }
}

export default Projects;