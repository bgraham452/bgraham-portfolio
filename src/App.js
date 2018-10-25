import React, { Component } from 'react';
import './styles/App.css';
import Header from './header';
import ProfileImg from './profile-img'
import About from './about';
import SkillList from './skill-list';
import Projects from './projects';
import ArtworkPhotography from './artwork-photography';
import Contact from './contact';
import ScrollUpButton from "react-scroll-up-button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProfileImg />
        <About />
        <SkillList />
        <Projects />
        <ArtworkPhotography />
        <Contact />
        <ScrollUpButton />
      </div>
    );
  }
}

export default App;
