import React, { Component } from 'react';

import classes from './Post.module.css';

class Post extends Component {
	truncateString = (str) => {
		return str.length > 100 ? str.substring(0, 100) + "..." : str;
	}

	parseDate = (str) => {
		return new Date(parseInt(str)).toLocaleDateString();
	}

	render () {
		return (
			<article className={classes.Post} onClick={this.props.clicked}>
				<h1>{this.props.title}</h1>
				<h4 className={classes.Date}>{this.parseDate(this.props.date)}</h4>
				<div className="Info">
					<div className={classes.Body}>{this.truncateString(this.props.body)}</div>
				</div>
			</article>
		);
	}
}

export default Post;