import React, { Component } from 'react';
import './App.css';
import Header from './header';
import ProfileImg from './profile-img'
import About from './about';
import Projects from './projects';
import Contact from './contact';
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProfileImg />
        <About />
        <Projects />
        <Contact />
        <ScrollUpButton />
      </div>
    );
  }
}

export default App;
