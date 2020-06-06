import React from 'react';

import Posts from '../Blog/Posts/Posts';
import classes from './Blog.module.css';

const Blog = () => (
  <div className={classes.Blog}>
    <div className={classes.Posts}>
      <Posts/>
    </div>
  </div>
);

export default Blog;