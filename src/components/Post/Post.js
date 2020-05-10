import React, { Component } from 'react';

import classes from './Post.module.css';

class Post extends Component {
	truncateString = (str) => {
		return str.length > 100 ? str.substring(0, 100) + "..." : str;
	}

	render () {
		return (
			<article className={classes.Post} onClick={this.props.clicked}>
				<h1>{this.props.title}</h1>
				<div className="Info">
					<div className={classes.Body}>{this.truncateString(this.props.body)}</div>
				</div>
			</article>
		);
	}
}

export default Post;