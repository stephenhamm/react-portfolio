import React, { Component } from 'react';
import axios from '../../axios';
import { Link } from 'react-router-dom';

import Post from '../../components/Post/Post';
import Aux from '../../hoc/Aux/Aux';
import './Posts.module.css';
import classes from './Posts.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';

class Posts extends Component {
  state = {
    posts: [],
    loading: false,
    render: false
  }

  componentDidMount () {
    this.setState({loading: true});

    axios.get('/article_group/article.json')
      .then(response => {
        const posts = response.data;
        const updatedPosts = Object.values(posts);
        this.setState({posts: updatedPosts, loading: false});
    })
    .catch(error => {
      this.setState({error: true, loading: false});
    });
  }

  postSelectedHandler = ( id ) => {
    this.setState({selectedPostId: id});
  }

  render () {
    let posts = this.state.error ? <p className={classes.Error}>Error retrieving posts</p>: <Spinner />;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Link to={'/' + post.id} key={post.id}>
            <Post 
              title={post.title} 
              body={post.body}
              clicked={() => this.postSelectedHandler(post.id)} />
          </Link>);
      });
    }

    if (this.state.loading) {
      posts = <Spinner />;
    }

    return (
      <Aux>
        <div className={classes.PostContainer}>
          <section className={classes.Posts}>
              {posts}
          </section>
        </div>
      </Aux>
    );
  }
}

export default Posts;