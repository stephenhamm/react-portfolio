import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Blog from '../../../Containers/Blog/Blog';
import Home from '../../../Containers/Home/Home';
import About from '../../../Containers/About/About';
import Contact from '../../../Containers/Contact/Contact';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">HOME</NavigationItem>
    <NavigationItem link="/blog" >BLOG</NavigationItem>
    <NavigationItem link="/about">ABOUT</NavigationItem>
    <NavigationItem link="/contact">CONTACT</NavigationItem>
  </ul>
);

export default navigationItems;