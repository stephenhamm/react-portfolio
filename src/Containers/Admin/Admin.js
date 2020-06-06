import React from 'react';
import firebase from '../../firebase';

import Button from '../../components/UI/Button/Button';
import classes from './Admin.module.css';

const Admin = () => (
  <div>
    <h1>Admin</h1>
    <Button clicked={() => firebase.auth().signOut()}>LOGOUT</Button>
  </div>
)

export default Admin;