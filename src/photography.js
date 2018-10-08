import React, {Component} from 'react';
import './App.css';

class Photography extends Component {

  render (){
    return (
      <section className="photography-container" id="photography">
      <h2 className="photography-title">Photography</h2>
      <div className="photos">
      <ul className="photography-list-1">
      <li><img src={require('./images/photography/DSC_0064.jpg')} className="photography-img-1" alt="Scene from the Bohemian Princess Shoot" /></li>
      <li><img src={require('./images/photography/dt-after-dark-2.png')} className="photography-img-2" alt="Scene from BOLD's Downtown After Dark Shoot" /></li>
      <li><img src={require('./images/photography/coture-2.png')} className="photography-img-3" alt="Scene from the Couture A La Cart Shoot" /></li>
      </ul>
      <ul className="photography-list-2">
      <li><img src={require('./images/photography/flowers.jpg')} className="photography-img-1" alt="Scene from UGA's North Campus Nature Shoot" /></li>
      <li><img src={require('./images/photography/coture-1.jpg')} className="photography-img-2" alt="Scene from the Couture A La Cart Shoot" /></li>
      <li><img src={require('./images/photography/DSC_0175.jpg')} className="photography-img-3" alt="Scene from Infusion Magazine's Spring 2018 Cover Shoot" /></li>
      </ul>
      <ul className="photography-list-3">
      <li><img src={require('./images/photography/dt-after-dark-1.png')} className="photography-img-1" alt="Scene from BOLD's Downtown After Dark Shoot" /></li>
      <li><img src={require('./images/photography/infusion-shoot-1.jpg')} className="photography-img-2" alt="Scene from Infusion Magazine's Fall 2017 Cover Shoot" /></li>
      <li><img src={require('./images/photography/fifi.jpg')} className="photography-img-3" alt="Scene from Fifi's Shoot. Part of the Free Shoots All Summer 16 Promotion" /></li>
      </ul>
      </div>
      </section>
    )
  }

}

export default Photography;