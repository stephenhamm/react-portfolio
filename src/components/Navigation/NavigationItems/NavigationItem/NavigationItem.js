import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

class NavigationItem extends Component {
  render () {
    return (
      <Fragment>
        <li className={classes.NavigationItem}>
          <NavLink 
            to={this.props.link}
            exact={this.props.exact}
            activeClassName={classes.active}>{this.props.children}</NavLink>
        </li>
      </Fragment>
    );
  }
}

export default NavigationItem;