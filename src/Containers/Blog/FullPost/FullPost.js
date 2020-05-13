import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from '../../../axios';
import Fade from 'react-reveal/Fade';

import classes from './FullPost.module.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
    error: false
  }

  componentDidMount () {
    if (this.props.match.params.id) {
      axios.get('article_group/article/article' + this.props.match.params.id + ".json")
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
		return new Date(parseInt(str)).toLocaleDateString();
	}

  render () {
    let post = this.state.error ? <p className={classes.Error}>Error retrieving post</p>: null;

    if (this.state.loadedPost && !this.state.error) {
      post = (
        <Fade clear>
          <div className="FullPost">
            <h1 className={classes.Title}>{this.state.loadedPost.title}</h1>
            <h4 className={classes.Date}>{this.parseDate(this.state.loadedPost.date_edited)}</h4>
            <p>{this.state.loadedPost.body}</p>
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