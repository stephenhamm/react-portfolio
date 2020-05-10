import React, { Component } from 'react';
import axios from '../../axios';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Post from '../../components/Post/Post';
import Aux from '../../hoc/Aux/Aux';
import './Posts.module.css';
import classes from './Posts.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';

class Posts extends Component {
  state = {
    posts: [],
    loading: false,
    error: false
  }

  componentDidMount () { 
    this.retrieveFourPosts();
  }

  retrieveFourPosts = () => {
    this.setState({loading: true});

    axios.get('/article_group/article.json')
      .then(response => {
        const result = Object.keys(response.data).map((k) => response.data[k]);
        const newestPosts = result.sort((a, b) => b.date_edited - a.date_edited);
        const posts = newestPosts.slice(0, 4);     
        this.setState({posts: posts, loading: false});
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
            <Fade clear>
              <Post 
                title={post.title} 
                date={post.date_edited}
                body={post.body}
                clicked={() => this.postSelectedHandler(post.id)} />
            </Fade>
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