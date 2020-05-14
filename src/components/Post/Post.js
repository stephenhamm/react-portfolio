import React from 'react';

import classes from './Post.module.css';

const truncateString = (str) => {
	return str.length > 100 ? str.substring(0, 100) + "..." : str;
}

const parseDate = (str) => {
	return new Date(parseInt(str)).toLocaleDateString();
}

const Post = (props) => (
	<article className={classes.Post} onClick={props.clicked}>
		<h1>{props.title}</h1>
		<h4 className={classes.Date}>{parseDate(props.date)}</h4>
		<div className="Info">
			<div className={classes.Body}>{truncateString(props.body)}</div>
		</div>
	</article>
);

export default Post;