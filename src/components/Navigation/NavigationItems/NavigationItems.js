import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Blog from '../../../Containers/Blog/Blog';
import Home from '../../../Containers/Home/Home';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" componentName={Home}>HOME</NavigationItem>
    <NavigationItem link="/blog" componentName={Blog}>BLOG</NavigationItem>
    <NavigationItem link="/">ABOUT</NavigationItem>
    <NavigationItem link="/">CONTACT</NavigationItem>
  </ul>
);

export default navigationItems;