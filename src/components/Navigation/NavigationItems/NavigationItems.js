import React, { useContext } from 'react';

import { AuthContext } from '../../../Auth';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = () => {
  const { adminUser } = useContext(AuthContext);
  let adminLink = adminUser ? <NavigationItem link="/admin">ADMIN</NavigationItem> : null;

  return (
    <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>HOME</NavigationItem>
    <NavigationItem link="/blog" >BLOG</NavigationItem>
    <NavigationItem link="/about">ABOUT</NavigationItem>
    <NavigationItem link="/contact">CONTACT</NavigationItem>
    {adminLink}
  </ul>
  )
}

export default NavigationItems;