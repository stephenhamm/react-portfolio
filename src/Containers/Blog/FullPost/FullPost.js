import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import axios from '../../../axios';
import Fade from 'react-reveal/Fade';

import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './FullPost.module.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
    loading: false,
    error: false
  }

  componentDidMount () {
    if (this.props.match.params.id) {
      this.setState({loading: true});

      axios.get('article_group/article/article' + this.props.match.params.id + ".json")
        .then(response => {
          this.setState({loadedPost: response.data, loading: false});       
        })
        .catch(error => {
          this.setState({error: true, loading: false});
        });;
      }
  }

  parseDate = (str) => {
		return new Date(parseInt(str)).toLocaleDateString();
	}

  render () {
    let post = this.state.loadedPost == null || this.state.error ? <p className={classes.Error}>Error retrieving post</p>: <Spinner />;

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

    if (this.state.loading) {
      post = <Spinner />;
    }

    return post;
  }
}

export default FullPost;