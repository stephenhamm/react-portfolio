import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Posts from '../Posts/Posts';
import classes from './Home.module.css';
import Section from '../Section/Section';

class Home extends Component {
  render () {
    return (
      <div className={classes.Home}>
        <h2>RECENT BLOG POSTS</h2>
        {<Route path="/" exact component={Posts} />}
        <h2>SKILLS</h2>
        <div className={classes.Sections}>
          <Section title="Section 1" image="empty.jpg" />
          <Section title="Section 2" image="empty.jpg" />
          <Section title="Section 3" image="empty.jpg" />
        </div> 
      </div>     
    );
  }
}

export default Home;