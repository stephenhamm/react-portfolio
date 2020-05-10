import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>HOME</NavigationItem>
    <NavigationItem link="/blog" >BLOG</NavigationItem>
    <NavigationItem link="/about">ABOUT</NavigationItem>
    <NavigationItem link="/contact">CONTACT</NavigationItem>
  </ul>
);

export default navigationItems;