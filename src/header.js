import React, {Component} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './styles/header.css';

class Header extends Component {

    render(){
        return (
            <header role="banner" id ="top" className="App-header">
            <h1 className="App-title"> <span className ="name"><u>Brandon Graham<br /></u></span> <span className="job-title">Full-Stack Developer</span> </h1>
            
            <Router>
            <nav className="navbar">
        <AnchorLink href= "#top" >Home</AnchorLink> 
        <AnchorLink href= "#about">About</AnchorLink>
        <AnchorLink href= "#skills">Skills</AnchorLink> 
        <AnchorLink href="#projects">Projects</AnchorLink> 
        <AnchorLink href="#artwork-photography">Artwork/Photography</AnchorLink> 
        <AnchorLink href= "#contact">Contact</AnchorLink>
        </nav>
        </Router>

            
          </header>
        )
    }
}

export default Header;