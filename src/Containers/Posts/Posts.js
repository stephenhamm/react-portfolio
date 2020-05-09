import React, { Component } from 'react';
import axios from '../../axios';
import { Link } from 'react-router-dom';

import Post from '../../components/Post/Post';
import './Posts.module.css';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount () {
    console.log(this.props);

    axios.get('/article_group/article.json')
      .then(response => {
        const posts = response.data;
        const updatedPosts = Object.values(posts);
        this.setState({posts: updatedPosts});
    })
    .catch(error => {
      console.log(error);
      //this.setState({error: true});
    });
  }

  postSelectedHandler = ( id ) => {
    this.setState({selectedPostId: id});
  }

  render () {
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;

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

    return (
      <section className="Posts">
          {posts}
      </section>
    );
  }
}

export default Posts;