import React, {Component} from 'react';
import './styles/skills.css';
import SkillBar from 'react-skillbars';

class Skills extends Component {

render(){
    const skills = [
        {type: "HTML5", level: 95},
        {type: "CSS3", level: 95},
        {type: "CSS3", level: 95},

      ];
      const colors = {
        "bar": "#34E4EA",
        "title": {
          "text": "#F5EFED",
          "background": "#0EB1D2"
        }
      }
    return (
        <section className="skills-container" id="skills">
          <h2 className="skills-title">Skills</h2>
<SkillBar skills={skills} colors={colors}/>
</section>
    );
}
}

export default Skills;