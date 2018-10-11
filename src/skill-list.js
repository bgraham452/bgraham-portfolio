import React, {Component} from 'react';
import './App.css';

class SkillsList extends Component {

  render (){
    return (
      <section className="skills-container" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills">
      <ul className="skills-list-mobile">
      <li>
        <img src={require('./images/icons/js.png')} className="skill-icon" alt="Javascript" />
        <p className="skill-name">Javascript</p>
        </li>
      <li>
        <img src={require('./images/icons/jqueryv3.png')} className="skill-icon" alt="jQuery" />
        <p className="skill-name">jQuery</p>
        </li>
      <li>
        <img src={require('./images/icons/reactv4.jpg')} className="skill-icon" alt="React" />
        <p className="skill-name">React/React Native</p>
        </li>
      <li>
        <img src={require('./images/icons/HTML5_Logo_512.png')} className="skill-icon" alt="HTML5" />
        <p className="skill-name">HTML5</p>
        </li>
      <li>
        <img src={require('./images/icons/node.svg')} className="skill-icon" alt="NodeJS" />
        <p className="skill-name">Node JS</p>
        </li>
      <li>
        <img src={require('./images/icons/git.png')} className="skill-icon" alt="Git" />
        <p className="skill-name">Git</p>
        </li>
      <li>
        <img src={require('./images/icons/css.png')} className="skill-icon" alt="CSS3" />
        <p className="skill-name">CSS3</p>
        </li>
      <li>
        <img src={require('./images/icons/mongodb.png')} className="skill-icon" alt="MongoDB" />
        <p className="skill-name">MongoDB</p>
        </li>
      <li>
        <img src={require('./images/icons/ajax.png')} className="skill-icon" alt="Ajax" />
        <p className="skill-name">Ajax</p>
        </li>
      <li>
        <img src={require('./images/icons/004-express-js.png')} className="skill-icon express" alt="Express JS" />
              <p className="skill-name">Express</p>
      </li>
      <li>
        <img src={require('./images/icons/database-postgres.png')} className="skill-icon" alt="PostgreSQL" />
        <p className="skill-name">PostgreSQL</p>
        </li>
      <li>
        <img src={require('./images/icons/mocha.png')} className="skill-icon" alt="Mocha" />
        <p className="skill-name">Mocha</p>
        </li>
  
      <li>
        <img src={require('./images/icons/rest.png')} className="skill-icon" alt="Rest API" />
        <p className="skill-name">Rest API</p>
        </li>
      <li>
        <img src={require('./images/icons/jasmine.png')} className="skill-icon" alt="Jasmine" />
        <p className="skill-name">Jasmine</p>
        </li>
        <li>
        <img src={require('./images/icons/redux.svg')} className="skill-icon" alt="Redux" />
        <p className="skill-name">Redux</p>
        </li>
        <li>
        <img src={require('./images/icons/npm-logo.png')} className="skill-icon" alt="NPM" />
        <p className="skill-name">NPM</p>
        </li>
      </ul>

      {/* Bigger Skills list */}
      <ul className="skills-list-mobile-1">
      <li>
        <img src={require('./images/icons/js.png')} className="skill-icon" alt="Javascript" />
        <p className="skill-name">Javascript</p>
        </li>
      <li>
        <img src={require('./images/icons/jqueryv3.png')} className="skill-icon" alt="jQuery" />
        <p className="skill-name">jQuery</p>
        </li>
      <li>
        <img src={require('./images/icons/reactv4.jpg')} className="skill-icon react" alt="React" />
        <p className="skill-name">React/React Native</p>
        </li>
      <li>
        <img src={require('./images/icons/HTML5_Logo_512.png')} className="skill-icon" alt="HTML5" />
        <p className="skill-name">HTML5</p>
        </li>
      <li>
        <img src={require('./images/icons/node.svg')} className="skill-icon node" alt="Node JS" />
        <p className="skill-name">Node JS</p>
        </li>
      <li>
        <img src={require('./images/icons/git.png')} className="skill-icon" alt="Git" />
        <p className="skill-name">Git</p>
        </li>
        <li>
        <img src={require('./images/icons/004-express-js.png')} className="skill-icon express" alt="Express JS" />
              <p className="skill-name">Express</p>
      </li>
      <li>
        <img src={require('./images/icons/redux.svg')} className="skill-icon" alt="Redux" />
        <p className="skill-name">Redux</p>
        </li>
        </ul>

        <ul className="skills-list-mobile-2">
        <li>
        <img src={require('./images/icons/css.png')} className="skill-icon css" alt="CSS3" />
        <p className="skill-name">CSS3</p>
        </li>
      <li>
        <img src={require('./images/icons/mongodb.png')} className="skill-icon" alt="MongoDB" />
        <p className="skill-name">MongoDB</p>
        </li>
      <li>
        <img src={require('./images/icons/ajax.png')} className="skill-icon" alt="Ajax" />
        <p className="skill-name">Ajax</p>
        </li>
     
      <li>
        <img src={require('./images/icons/database-postgres.png')} className="skill-icon" alt="PostgreSQL" />
        <p className="skill-name">PostgreSQL</p>
        </li>
      <li>
        <img src={require('./images/icons/mocha.png')} className="skill-icon" alt="Mocha" />
        <p className="skill-name">Mocha</p>
        </li>
      
      <li>
        <img src={require('./images/icons/rest.png')} className="skill-icon" alt="Rest API" />
        <p className="skill-name">Rest API</p>
        </li>
      <li>
        <img src={require('./images/icons/jasmine.png')} className="skill-icon" alt="Jasmine" />
        <p className="skill-name">Jasmine</p>
        </li>
       
      <li>
        <img src={require('./images/icons/npm-logo.png')} className="skill-icon" alt="NPM" />
        <p className="skill-name">NPM</p>
        </li>
      </ul>
         {/* Bigger Skills list */}
         <ul className="skills-list-desktop-1">
      <li>
        <img src={require('./images/icons/js.png')} className="skill-icon js" alt="Javascript" />
        <p className="skill-name">Javascript</p>
        </li>
      <li>
        <img src={require('./images/icons/jqueryv3.png')} className="skill-icon" alt="jQuery" />
        <p className="skill-name">jQuery</p>
        </li>
      <li>
        <img src={require('./images/icons/reactv4.jpg')} className="skill-icon react" alt="React" />
        <p className="skill-name">React/React Native</p>
        </li>
      <li>
        <img src={require('./images/icons/HTML5_Logo_512.png')} className="skill-icon" alt="HTML5" />
        <p className="skill-name">HTML5</p>
        </li>
        </ul>
        <ul className="skills-list-desktop-2">

      <li>
        <img src={require('./images/icons/node.svg')} className="skill-icon node" alt="Node JS" />
        <p className="skill-name">Node JS</p>
        </li>
      <li>
        <img src={require('./images/icons/git.png')} className="skill-icon" alt="Git" />
        <p className="skill-name">Git</p>
        </li>
        <li>
        <img src={require('./images/icons/004-express-js.png')} className="skill-icon express" alt="Express" />
              <p className="skill-name">Express</p>
      </li>

        <li>
        <img src={require('./images/icons/css.png')} className="skill-icon css" alt="CSS3" />
        <p className="skill-name">CSS3</p>
        </li>
        </ul>
        <ul className="skills-list-desktop-3">
      <li>
        <img src={require('./images/icons/mongodb.png')} className="skill-icon mongodb" alt="MongoDB" />
        <p className="skill-name">MongoDB</p>
        </li>
      <li>
        <img src={require('./images/icons/ajax.png')} className="skill-icon ajax" alt="Ajax" />
        <p className="skill-name">Ajax</p>
        </li>
     
      <li>
        <img src={require('./images/icons/database-postgres.png')} className="skill-icon postgres" alt="PostgreSQL" />
        <p className="skill-name">PostgreSQL</p>
        </li>
      <li>
        <img src={require('./images/icons/mocha.png')} className="skill-icon" alt="Mocha" />
        <p className="skill-name">Mocha</p>
        </li>
      </ul>
      <ul className="skills-list-desktop-4">

      <li>
        <img src={require('./images/icons/rest.png')} className="skill-icon rest" alt="Rest API" />
        <p className="skill-name">Rest API</p>
        </li>
      <li>
        <img src={require('./images/icons/jasmine.png')} className="skill-icon" alt="Jasmine" />
        <p className="skill-name">Jasmine</p>
        </li>
        <li>
        <img src={require('./images/icons/redux.svg')} className="skill-icon" alt="Redux" />
        <p className="skill-name">Redux</p>
        </li>
      <li>
        <img src={require('./images/icons/npm-logo.png')} className="skill-icon npm" alt="NPM" />
        <p className="skill-name">NPM</p>
        </li>
      </ul>
      </div>
      </section>
    )
  }

}

export default SkillsList;