import React from 'react';

import ThumbsUp from '../../assets/images/thumbsup.png';
import ThumbsDown from '../../assets/images/thumbsdown.png';
import classes from './Post.module.css';

const truncateString = (str, limit) => {
	return str.length > limit ? str.substring(0, limit) + "..." : str;
}

const parseDate = (str) => {
	return new Date(str).toLocaleDateString();
}

const thumbsUp = (id) => {
	alert("thumbs up: " + id);
}

const Post = (props) => (
	<div className={classes.Post} onClick={props.clicked}>
		<div className={classes.ImageSection}>
			<img src={props.image != null ? props.image : require('../../assets/images/empty.jpg')} alt="Blog" className={classes.Image}/> 
		</div>
		<div className={classes.Content}>
			<div className={classes.Header}>
				<h1 className={classes.Title}>{truncateString(props.title, 50)}</h1>
				<h4 className={classes.Date}>{parseDate(props.date)}</h4>
			</div>
			<div className={classes.Info}>
				<div className={classes.Body}>{truncateString(props.body, 220)}</div>
			</div>
			<div className={classes.Link}>
				<p>READ MORE</p>
			</div>
			<div className={classes.Rating}>
				<img src={ThumbsUp} alt="ThumbsUp" className={classes.Thumbs} onClick={(id) => thumbsUp(props.id)} />
				<img src={ThumbsDown} alt="ThumbsDown" className={classes.Thumbs} />
			</div>
		</div>
	</div>
);

export default Post;