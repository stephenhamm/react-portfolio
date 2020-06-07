import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const NavigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink 
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}
      onClick={props.clicked}>{props.children}
    </NavLink>
  </li>
);

export default NavigationItem;