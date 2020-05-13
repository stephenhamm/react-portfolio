import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Posts from '../Blog/Posts/Posts';
import Section from '../Section/Section';
import emptyImage from '../../assets/images/empty.jpg';
import classes from './Home.module.css';

class Home extends Component {
  render () {
    return (
      <div className={classes.Home}>
        <h1>RECENT BLOG POSTS</h1>
        <div className={classes.Blog}>
          <Posts home={true}/>
        </div>
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