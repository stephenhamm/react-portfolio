import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Footer.module.css';

const Footer = () => (
  <div className={classes.Footer}>
    <div className={classes.Left}>
      <ul className={classes.NavigationItems}>
        <li className={classes.NavigationItem}>
          <NavLink to="/" exact>HOME</NavLink>
          <NavLink to="/blog" exact>BLOG</NavLink>
          <NavLink to="/about" exact>ABOUT</NavLink>
          <NavLink to="/contact" exact>CONTACT</NavLink>
        </li>
      </ul>
      <p className={classes.Copyright}>© {new Date().getFullYear()} Steve Hamm</p>
    </div>
    <div className={classes.Right}>
      <a href="https://www.linkedin.com/in/stephenhamm/" target="_blank" rel="noopener noreferrer" className={classes.Link}>
        <div className={classes.Linkedin}></div>
      </a>
      <a href="https://github.com/stephenhamm" target="_blank" rel="noopener noreferrer" className={classes.Link}>
        <div className={classes.Github}></div>
      </a>
    </div>
  </div>
);

export default Footer;