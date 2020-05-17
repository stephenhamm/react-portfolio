import React from 'react';

import classes from './Post.module.css';

const truncateString = (str) => {
	return str.length > 200 ? str.substring(0, 200) + "..." : str;
}

const parseDate = (str) => {
	return new Date(str).toLocaleDateString();
}

const Post = (props) => (
	<div className={classes.Post} onClick={props.clicked}>
		<div className={classes.ImageSection}>
			<img src={props.image != null ? props.image : require('../../assets/images/empty.jpg')} alt="Blog" className={classes.Image}/> 
		</div>
		<div className={classes.Content}>
			<h1 className={classes.Title}>{props.title}</h1>
			<h4 className={classes.Date}>{parseDate(props.date)}</h4>
			<div className="Info">
				<div className={classes.Body}>{truncateString(props.body)}</div>
			</div>
			<div className={classes.Link}>
				<p>READ MORE</p>
			</div>
		</div>
	</div>
);

export default Post;