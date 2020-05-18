import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from '../../../axios';
import Fade from 'react-reveal';

import classes from './FullPost.module.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
    error: false
  }

  componentDidMount () {
    if (this.props.match.params.id) {
      axios.get('blog/posts/post' + this.props.match.params.id + ".json")
        .then(response => {
          if (response.data != null) {
            this.setState({loadedPost: response.data});  
            console.log("tes");
          }
          else
            this.setState({error: true});    
        })
        .catch(error => {
          this.setState({error: true});
        });;
      }
  }

  parseDate = (str) => {
    return new Date(str).toLocaleDateString();
  }

  render () {
    let post = this.state.error ? <p className={classes.Error}>Error retrieving post</p>: null;

    if (this.state.loadedPost && !this.state.error) {
      post = (
        <Fade clear>
          <div className={classes.FullPost}>
            <h1 className={classes.Title}>{this.state.loadedPost.title}</h1>
            <h4 className={classes.Date}>{this.parseDate(this.state.loadedPost.date_posted)}</h4>
            <p className={classes.Body}>{this.state.loadedPost.body}</p>
          </div>
          <div className={classes.Link}>
            <Link to="/blog">MORE POSTS</Link>
          </div>
        </Fade>
      );
    }

    return post;
  }
}

export default FullPost;