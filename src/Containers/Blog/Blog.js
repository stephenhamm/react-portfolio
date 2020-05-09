import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Posts from '../Posts/Posts';

class Blog extends Component {
  render () {
    return (
      <div>
        <Posts />
      </div>
    );
  }
}

export default Blog;