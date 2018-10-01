import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

import './App.css';

class Contact extends Component {

    render(){

        return (
          <section className="contact-container" id="contact">
          <h2 className="contact-title">Contact</h2>
          
          <p className="contact-sub-text">Let's talk about work, sports, video games, music, and whatever excites you!!</p>
          <h3 className ="contact-signature">Let's Connect & Work!</h3>

 <form className="contact-box">
            <div className="contact-name">
            <label htmlFor="name">Your Name: </label>
            <Field component="input" type="text" id="name-input"  name="name" />
            </div>

            <div className="contact-email">
            <label htmlFor="email">Email address: </label>
            <Field component="input" type="email" id="email-input" name="email" />
            </div>
            <br /><br />
            <div className="contact-message">
            <label htmlFor="message">Message<br /></label>
            <Field id="message-input" name="message" component="textarea" />
            </div>
            <button className="submit">Submit</button>
        </form>
          <div className="contact-info">
          
          </div>

          </section>
        )
    }
}

export default reduxForm ({
  form: 'contact'
}) (Contact);