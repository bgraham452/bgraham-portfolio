import React, {Component} from 'react';
import {Form, Field, reduxForm} from 'redux-form';
import './App.css';

class Contact extends Component {
constructor(props){
  super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
  }
}

//  onSubmit= () => {
//   const form = document.querySelector('form')
//   const data = new FormData(form)
//   const req = new XMLHttpRequest()
//   req.open(form.method, form.action)
//   req.send(data)
//  }

    render(){

        return (
          <section className="contact-container" id="contact">
          <h2 className="contact-title">Contact</h2>
          
          <p className="contact-sub-text">Let's talk about work, sports, video games, music, and whatever excites you!!<br /></p>
          <h3 className ="contact-signature">Let's Connect & Work!</h3>

 <Form onSubmit={() => console.log()}   action="https://formspree.io/xqlqkplm"

      method="POST" className="contact-box" >
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
            <button className="submit" >Submit</button>
        </Form>
        <h3 className="follow-signature">Follow Me Here!</h3>
          <ul className="social-media-icons">
          <li><a href="mailto:bgraham452@gmail.com"><img src={require('./images/icons/email.png')} className="icon-1" alt="Email Icon" /></a></li>
          <li><a href="https://github.com/bgraham452"><img src={require('./images/icons/github.png')} className="icon-1" alt="Github Icon" /></a></li>
          <li><a href="https://www.behance.net/brandonleegraham"><img src={require('./images/icons/behance.png')} className="icon-2" alt="Behance Icon" /></a></li>
          <li><a href="https://twitter.com/DutchNorris_"><img src={require('./images/icons/twitter.png')} className="icon-4" alt="Twitter Icon" /></a></li>
          <li><a href="https://www.instagram.com/dutchnorris/"><img src={require('./images/icons/instagram.png')} className="icon-5" alt="Instagram Icon" /></a></li>
          </ul>
<br />
<br />
<br />

          </section>
        )
    }
}

export default reduxForm ({
  form: 'contact'
}) (Contact);