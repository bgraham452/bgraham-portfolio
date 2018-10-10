import React, { Component } from 'react';
import './App.css';
import Header from './header';
import ProfileImg from './profile-img'
import About from './about';
import Projects from './projects';
import Artwork from './artwork';
import Photography from './photography';
import Contact from './contact';
import ScrollUpButton from "react-scroll-up-button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProfileImg />
        <About />
        <Projects />
        <Artwork />
        <Photography />
        <Contact />
        <ScrollUpButton />
      </div>
    );
  }
}

export default App;
