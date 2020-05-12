import React, { Component } from 'react';

import Posts from '../Blog/Posts/Posts';
import classes from './Blog.module.css';

class Blog extends Component {
  render () {
    return (
      <div>
        <h1>BLOG POSTS</h1>
        <div className={classes.Posts}>
          <Posts/>
        </div>
      </div>
    );
  }
}

export default Blog;