import React, { Component } from 'react';

import Posts from '../Blog/Posts/Posts';

class Blog extends Component {
  render () {
    return (
      <div>
        <h1>BLOG POSTS</h1>
        <Posts/>
      </div>
    );
  }
}

export default Blog;