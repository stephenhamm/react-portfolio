import React from 'react';

import classes from './DrawerToggle.module.css';

const DrawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

export default DrawerToggle;