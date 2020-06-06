import React, { Fragment } from 'react';
import { useForm, ErrorMessage } from 'react-hook-form';
import { notify } from 'react-notify-toast';
import Fade from 'react-reveal';
import firebase from '../../firebase';

import Button from '../../components/UI/Button/Button';
import classes from './Login.module.css';

const Login = () => {
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

  return(
    <Fragment>
      <div className={classes.Image}>
        <div className={classes.Overlay}>
          <Fade clear>
            <p>LOGIN</p>
          </Fade>
        </div>
      </div>    
      <div className={classes.Login}>
          <p className={classes.Message}>
            Please provide your email address and password.
          </p>   
        <form onSubmit={handleSubmit(onSubmit)} className={classes.Form}>
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

          <label htmlFor="password">Password</label>
          <input name="password" id="password" type="password" ref={register({ 
            required: "Password is required.", 
            maxLength: {
              value: 50,
              message: "Password exceeds 50 characters."
            } })} />
          <ErrorMessage errors={errors} name="password">
            {({ messages }) => messages && Object.entries(messages).map(([type, message]) => (<span key={type}>{message}</span>))}
          </ErrorMessage>

          <div className={classes.Submit}>
            <Button type="submit">SUBMIT</Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default Login;