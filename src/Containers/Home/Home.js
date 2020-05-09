import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Posts from '../Posts/Posts';
import classes from './Home.module.css';
import Section from '../Section/Section';
import emptyImage from '../../assets/images/empty.jpg';

class Home extends Component {
  render () {
    return (
      <div className={classes.Home}>
        <h1>RECENT BLOG POSTS</h1>
        <div className={classes.Blog}>
          <Posts />
        </div>
        <h4 style={{textAlign: 'center'}}>MORE POSTS</h4>
        <h1>SKILLS</h1>
        <div className={classes.Sections}>
          <Section title="Section 1" image={emptyImage} />
          <Section title="Section 2" image={emptyImage} />
          <Section title="Section 3" image={emptyImage} />
          <Section title="Section 4" image={emptyImage} />
        </div> 
      </div>     
    );
  }
}

export default Home;