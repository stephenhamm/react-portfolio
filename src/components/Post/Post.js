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
		<h1 className={classes.Title}>{props.title}</h1>
		<h4 className={classes.Date}>{parseDate(props.date)}</h4>
		<div className="Info">
			<div className={classes.Body}>{truncateString(props.body)}</div>
		</div>
		<div className={classes.Link}>
			<p>READ MORE</p>
		</div>
	</div>
);

export default Post;