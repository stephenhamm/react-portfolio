import React from 'react';

import './Post.module.css';

const post = (props) => (
	<article className="Post" onClick={props.clicked}>
		<h1>{props.title}</h1>
		<div className="Info">
			<div className="Author">{props.body}</div>
		</div>
	</article>
);

export default post;