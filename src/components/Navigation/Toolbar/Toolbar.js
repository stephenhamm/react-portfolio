import React, { useContext, useState, useEffect } from 'react';

import { AuthContext } from '../../../Auth';
import NavigationItem from '../NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.module.css';

const Toolbar = () => {
  const { adminUser } = useContext(AuthContext);
  const [checked, setChecked] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    setChecked(false);
  }, [windowWidth]);

  const updateWidth = () => {
    setWindowWidth(window.innerWidth);
  }

  const toggleNav = () => {
    if (windowWidth > 708) {
      setChecked(false);
    }
    else {
      setChecked(!checked);  
    }
  }

  let adminLink = adminUser ? <NavigationItem link="/admin" clicked={toggleNav}>ADMIN</NavigationItem> : null;

  return (
    <header className={classes.Header}>     
      <Logo />
      <input className={classes.MenuButton} type="checkbox" id="menuBtn" checked={checked} onClick={toggleNav} />
      <label className={classes.MenuIcon} htmlFor="menuBtn"><span className={classes.NavIcon}></span></label>
      <ul className={classes.Menu}>
        <NavigationItem link="/" exact clicked={toggleNav}>HOME</NavigationItem>
        <NavigationItem link="/blog" clicked={toggleNav}>BLOG</NavigationItem>
        <NavigationItem link="/about" clicked={toggleNav}>ABOUT</NavigationItem>
        <NavigationItem link="/contact" clicked={toggleNav}>CONTACT</NavigationItem>
        {adminLink}
      </ul>
    </header>
  );
};

export default Toolbar;