import React, { useCallback, useContext, useRef, Fragment } from 'react';
import { withRouter, Redirect } from 'react-router';
import { notify } from 'react-notify-toast';
import Fade from 'react-reveal';
import firebase from '../../firebase';

import { AuthContext } from '../../Auth';
import Button from '../../components/UI/Button/Button';
import classes from './Login.module.css';

const Login = ({ history }) => {
  const form = useRef(null);

  const onSubmit = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push("/admin");
      } catch {
        notify.show("Invalid username or password", "custom", 3000, {background: "#e23838", text: "#FFFFFF"}); 
        form.current.reset();
      }
    },
    [history]
  );

  const { adminUser } = useContext(AuthContext);

  if (adminUser)
    return <Redirect to="/admin" />;

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
        <form onSubmit={onSubmit} ref={form} className={classes.Form}>
          <label htmlFor="email">Email</label>
          <input name="email" id="email" />
          <label htmlFor="password">Password</label>
          <input name="password" id="password" type="password" />
          <div className={classes.Submit}>
            <Button type="submit">SUBMIT</Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default withRouter(Login);