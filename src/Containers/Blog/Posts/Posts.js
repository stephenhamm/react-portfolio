import React, { Component, Fragment } from 'react';
import axios from '../../../axios';
import { Link, Route } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Post from '../../../components/Post/Post';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './Posts.module.css';

class Posts extends Component {
  state = {
    posts: [],
    loading: false,
    error: false
  }

  componentDidMount () {  
    if (this.props.home) {
      this.retrievePosts(4);
    }
    else {
      this.retrievePosts(10);
    }
  }

  retrievePosts = (limit) => {
    this.setState({loading: true});

    axios.get('/article_group/article.json')
      .then(response => {
        const result = Object.keys(response.data).map((k) => response.data[k]);
        const newestPosts = result.sort((a, b) => b.date_edited - a.date_edited);
        const posts = newestPosts.slice(0, limit);     
        this.setState({posts: posts, loading: false});
      })
      .catch(error => {
        this.setState({error: true, loading: false});
      });
  }

  render () {
    let posts = this.state.error ? <p className={classes.Error}>Error retrieving posts</p>: <Spinner />;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Link to={'/post/' + post.id} key={post.id}>
            <Fade clear>
              <Post 
                title={post.title} 
                date={post.date_edited}
                body={post.body} />
            </Fade>
          </Link>);
      });
    }

    if (this.state.loading) {
      posts = <Spinner />;
    }

    return (
      <Fragment>
        <div className={classes.PostContainer}>
          <section className={classes.Posts}>       
            {posts}
          </section>
        </div>
      </Fragment>
    );
  }
}

export default Posts;