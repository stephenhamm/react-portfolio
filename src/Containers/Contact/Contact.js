import React, { Fragment } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import { notify } from 'react-notify-toast';
import Fade from 'react-reveal';
import firebase from '../../firebase';

import Button from '../../components/UI/Button/Button';
import classes from './Contact.module.css';

const Contact = () => {
  const { register, errors, handleSubmit } = useForm({
    validateCriteriaMode: "all"
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    const messagesRef = firebase.database().ref('contact/messages');
    const message = {
      Name: data.name.trim(),
      email: data.email.trim(),
      phone: data.phone,
      subject: data.subject.trim(),
      message: data.message.trim()
    }

    messagesRef.push(message).then(response => {
      e.target.reset();
      notify.show("Message sent. Thank you!", "custom", 3000, {background: "#34ad82", text: "#FFFFFF"}); 
    })
  }

  return (
    <Fragment>
      <div className={classes.Image}>
        <div className={classes.Overlay}>
          <Fade clear>
            <p>CONTACT</p>
          </Fade>
        </div>
      </div>
      <div className={classes.Contact}>       
        <div className={classes.Intro}>
          <p className={classes.Message}>
            I'd love to hear from you! Please fill in and submit this form and I will respond to you as soon as possible. You can also contact
            me through the links below.
          </p>
          <div className={classes.Social}>
            <a href="https://www.linkedin.com/in/stephenhamm/" target="_blank" rel="noopener noreferrer" className={classes.Link}>
              <div className={classes.Linkedin}></div>
            </a>
            <a href="https://www.github.com/stephenhamm" target="_blank" rel="noopener noreferrer" className={classes.Link}>
              <div className={classes.Github}></div>
            </a>
            <a href="https://www.brightenapparel.com" target="_blank" rel="noopener noreferrer" className={classes.Link}>
              <div className={classes.Brighten}></div>
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.Form}>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" ref={register({ 
            required: "Name is required.", 
            pattern: {
              value: /^[A-Za-z- ]+$/,
              message: "Name contains invalid characters."
            },
            maxLength: {
              value: 30,
              message: "Name exceeds 30 characters."
            } })} />
          <ErrorMessage errors={errors} name="name">
            {({ messages }) => messages && Object.entries(messages).map(([type, message]) => (<span key={type}>{message}</span>))}
          </ErrorMessage>

          <label htmlFor="email">Email</label>
          <input name="email" id="email" ref={register({ 
            required: "Email is required.", 
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Not a valid email address."
            },
            maxLength: {
              value: 50,
              message: "Email exceeds 50 characters."
            } })} />
          <ErrorMessage errors={errors} name="email">
            {({ messages }) => messages && Object.entries(messages).map(([type, message]) => (<span key={type}>{message}</span>))}
          </ErrorMessage>

          <label htmlFor="phone">Phone</label>
          <input name="phone" id="phone" placeholder="optional" ref={register({ 
            pattern: {
              value: /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
              message: "Not a valid phone number."
            },
            maxLength: {
              value: 20,
              message: "Phone number exceeds 20 characters."
            } })} />
          <ErrorMessage errors={errors} name="phone">
            {({ messages }) => messages && Object.entries(messages).map(([type, message]) => (<span key={type}>{message}</span>))}
          </ErrorMessage>

          <label htmlFor="subject">Subject</label>
          <input name="subject" id="subject" placeholder="optional"ref={register({ 
            maxLength: {
              value: 100,
              message: "Subject exceeds 100 characters."
            } })} />
          <ErrorMessage errors={errors} name="subject" as="span" />

          <label htmlFor="message">Message</label>
          <textarea name="message" ref={register({ 
            required: "Message is required.",
            maxLength: {
              value: 2000,
              message: "Message exceeds 2000 characters."
            } })} />
          <ErrorMessage errors={errors} name="message" as="span" />

          <div className={classes.Submit}>
            <Button type="submit">SUBMIT</Button>
          </div>
        </form>
      </div>  
    </Fragment>
  );  
}

export default Contact;