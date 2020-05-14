import React, { Component, Fragment } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Post from '../../../components/Post/Post';
import classes from './Posts.module.css';

class Posts extends Component {
  state = {
    posts: [],
    error: false,
    postCount: 0,
    totalAvailable: 0
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts = () => {
    const limit = this.props.home ? 4 : 10;

    axios.get('/article_group/article.json')
      .then(response => {
        const result = Object.keys(response.data).map((k) => response.data[k]);
        const totalPosts = result.length      
        const newestPosts = result.sort((a, b) => b.date_edited - a.date_edited);
        const postList = newestPosts.splice(this.state.postCount, limit);      
        this.addItems(postList, totalPosts);  
      })
      .catch(error => {
        this.setState({error: true});
      });
  }

  addItems = (items, total) => {
    this.setState({
      posts: [...this.state.posts, ...items],
      postCount: this.state.postCount + items.length,
      totalAvailable: total
    });
  }

  render () {
    let posts = this.state.error ? <p className={classes.Error}>Error retrieving posts</p>: null;

    let postEnd = this.state.totalAvailable === this.state.postCount && this.state.postCount > 0 ?
      <Fade>
        <div className={classes.End}><span>END OF POSTS</span></div>
      </Fade> : null;

    let blogLink = this.props.home && this.state.postCount > 0 ? 
      <Fade clear>
        <div className={classes.Link}><Link to="/blog">MORE POSTS</Link></div>
      </Fade> : null;
      
    let loadMoreLink = !this.props.home && this.state.postCount > 0 && postEnd == null ? 
      <Fade clear>
        <div className={classes.Link}>
          <a role="button" onClick={this.retrievePosts}>LOAD MORE POSTS</a>
        </div>
      </Fade> : null;

    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
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

    return (
      <Fragment>
        <section className={classes.Posts}>   
          {posts}
        </section>
        {loadMoreLink}
        {blogLink}
        {postEnd}
      </Fragment>
    );
  }
}

export default Posts;