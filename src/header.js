import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {HashRouter as Router} from 'react-router-dom';

import './styles/header.css';

class Header extends Component {

    render(){
        return (
            <header role="banner" id ="top" className="App-header">
            <h1 className="App-title"> <span className ="name"><u>Brandon Graham<br /></u></span> <span className="job-title">Full-Stack Developer</span> </h1>
            
            <Router>
            <nav className="navbar">
        <Link to ={{hash: "#top"}} >Home</Link> 
        <Link to ={{hash: "#projects"}}>Projects</Link> 
        <Link to ={{hash: "#skills"}}>Skills</Link> 
        <Link to ={{hash: "#about"}}>About</Link>
        <Link to ={{hash: "#artwork-photography"}}>Artwork/Photography</Link> 
        <Link to ={{hash: "#contact"}}>Contact</Link>
        </nav>
        </Router>

            
          </header>
        )
    }
}

export default Header;