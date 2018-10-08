import React, {Component} from 'react';
import './App.css';

class Photography extends Component {

  render (){
    return (
      <section className="photography-container" id="photography">
      <h2 className="photography-title">Photography</h2>
      <div className="photos">
      <ul className="photography-list-1">
      <li><img src={require('./images/photography/DSC_0064.jpg')} className="photography-img-1" alt="Mogami 4in cover art" /></li>
      <li><img src={require('./images/photography/dt-after-dark-2.png')} className="photography-img-2" alt="Mogami 4in cover art" /></li>
      <li><img src={require('./images/photography/coture-2.png')} className="photography-img-3" alt="Mogami 4in cover art" /></li>
      </ul>
      <ul className="photography-list-2">
      <li><img src={require('./images/photography/flowers.jpg')} className="photography-img-1" alt="Mogami 4in cover art" /></li>
      <li><img src={require('./images/photography/coture-1.jpg')} className="photography-img-2" alt="Mogami 4in cover art" /></li>
      <li><img src={require('./images/photography/DSC_0175.jpg')} className="photography-img-3" alt="Mogami 4in cover art" /></li>
      </ul>
      <ul className="photography-list-3">
      <li><img src={require('./images/photography/dt-after-dark-1.png')} className="photography-img-1" alt="Mogami 4in cover art" /></li>
      <li><img src={require('./images/photography/infusion-shoot-1.jpg')} className="photography-img-2" alt="Mogami 4in cover art" /></li>
      <li><img src={require('./images/photography/fifi.jpg')} className="photography-img-3" alt="Mogami 4in cover art" /></li>
      </ul>
      </div>
      </section>
    )
  }

}

export default Photography;