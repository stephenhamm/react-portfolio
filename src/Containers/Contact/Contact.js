import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from '../../components/UI/Button/Button';
import classes from './Contact.module.css';

const Contact = () => (
  <div className={classes.Contact}>    
    <div className={classes.Image}>
      <div className={classes.Overlay}>
        <Fade clear>
          <p>CONTACT</p>
        </Fade>
      </div>
    </div>
    <p className={classes.Message}>
      I'd love to hear from you! Please fill in and submit the form below and I will respond to you as soon as possible.
    </p>
    <div className={classes.Form}>
      <div className={classes.Left}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name"/>
        <label htmlFor="email">Email</label>
        <input type="text" id="email"/>
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone"/>
      </div>
      <div className={classes.Right}>
        <label htmlFor="message">Message</label>
        <textarea id="message" />
      </div>
    </div>
    <div className={classes.Submit}>
      <Button>SUBMIT</Button>
    </div>
  </div>  
);

export default Contact;