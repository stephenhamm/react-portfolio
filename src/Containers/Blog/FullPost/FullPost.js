import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from '../../../axios';
import Fade from 'react-reveal';

import { updateRatings, parseDate } from '../../../Shared/Utils';
import classes from './FullPost.module.css';

const FullPost = (props) => {  
  let [loadedPost, loadPost] = useState(null);
  let [error, setError] = useState(false);
  let [likes, setLikes ] = useState(null);
	let [dislikes, setDislikes] = useState(null);
  let post = error ? <p className={classes.Error}>Error retrieving post</p> : null;

  useEffect(() => {
    if (props.match.params.id) {
      axios.get('blog/posts/post' + props.match.params.id + ".json")
        .then(response => {  
          if (response.data != null) {
            loadPost(loadedPost = response.data);
            console.log(loadedPost);
          } else {
            setError(error = true);  
          }  
        })
        .catch(error => {
          setError(error = true);
        });
      }
  }, []);

  useEffect(() => {
    if (loadedPost != null && (likes !== loadedPost.likes || dislikes !== loadedPost.dislikes))
      updateRatings(loadedPost, loadedPost.likes + likes, loadedPost.dislikes + dislikes);
	}, [likes, dislikes]);
  
  if (loadedPost && !error) {
    post = (
      <Fade clear>
        <div className={classes.Image}>{loadedPost.image}</div>
        <div className={classes.FullPost}>
          <h1 className={classes.Title}>{loadedPost.title}</h1>
          <h4 className={classes.Date}>{parseDate(loadedPost.date_posted)}</h4>
          <p className={classes.Body}>{loadedPost.body}</p>
          <div className={classes.Rating}>
            <div className={classes.ThumbsUp} onClick={() => setLikes(likes + 1)}></div>
						<div className={classes.ThumbsDown} onClick={() => setDislikes(dislikes + 1)}></div>
          </div>
        </div>
        <div className={classes.Link}>
          <Link to="/blog">MORE POSTS</Link>
        </div>
      </Fade>
    )
  }

  return post;
}

export default FullPost;