import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Posts from '../Posts/Posts';
import classes from './Home.module.css';
import Section from '../Section/Section';
import emptyImage from '../../assets/images/empty.jpg';

class Home extends Component {
  render () {
    const loadPosts = true;

    return (
      <div className={classes.Home}>
        <h1>RECENT BLOG POSTS</h1>
        <div className={classes.Blog}>
          <Posts home={loadPosts}/>
        </div>
        <div className={classes.Link}>
          <Link to="/blog">MORE POSTS</Link>
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