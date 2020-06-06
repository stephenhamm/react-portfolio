import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../../Auth';
import classes from './Footer.module.css';

const Footer = () => {
  const { adminUser } = useContext(AuthContext);
  let link = adminUser ? <NavLink to="/admin">ADMIN</NavLink> : <NavLink to="/login">LOGIN</NavLink>;

  return (
    <div className={classes.Footer}>
      <div className={classes.Left}>
        <ul className={classes.NavigationItems}>
          <li className={classes.NavigationItem}>
            <NavLink to="/" exact>HOME</NavLink>
          </li>
          <li className={classes.NavigationItem}>
            <NavLink to="/blog">BLOG</NavLink>
          </li>
          <li className={classes.NavigationItem}>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li className={classes.NavigationItem}>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          <li className={classes.NavigationItem}>
            {link}
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
};

export default Footer;