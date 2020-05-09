import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';
import Aux from '../../../../hoc/Aux/Aux';

class NavigationItem extends Component {
  render () {
    return (
      <Aux>
      <li className={classes.NavigationItem}>
        <NavLink 
          to={this.props.link} 
          className={this.props.active ? classes.active : null}>{this.props.children}</NavLink>
      </li>
      </Aux>
    );
  }
}

export default NavigationItem;