import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Footer.module.css';

class Footer extends Component {
  render () {
    return (
      <div className={classes.Footer}>

        <div class={classes.Left}>
          <ul className={classes.NavigationItems}>
            <li className={classes.NavigationItem}>
              <NavLink to="/" exact>HOME</NavLink>
              <NavLink to="/blog" exact>BLOG</NavLink>
              <NavLink to="/about" exact>ABOUT</NavLink>
              <NavLink to="/contact" exact>CONTACT</NavLink>
          </li>
          </ul>
        </div>

        <div className={classes.Right}>
          <a href="https://www.linkedin.com/in/stephenhamm/" target="_blank" rel="noopener noreferrer" className={classes.Link}>
            <img src={require('../../../assets/images/linkedin.png')} alt="LinkedIn" className={classes.Icon}/>
          </a>
          <a href="https://github.com/stephenhamm" target="_blank" rel="noopener noreferrer" className={classes.Link}>
            <img src={require('../../../assets/images/github.png')} alt="GitHub" className={classes.Icon}/>
          </a>
        </div>

      </div>
    );
  }
}

export default Footer;