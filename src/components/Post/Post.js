import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/';

import { thumbsUp, thumbsDown, parseDate, truncateString } from '../../Shared/Utils';
import classes from './Post.module.css';

const Post = (props) => (
	<Fade clear>
		<div className={classes.PostContainer}>
			<div className={classes.Post}>
				<div className={classes.ImageSection}>
					<img src={props.image != null ? props.image : require('../../assets/images/empty.jpg')} alt="Blog" className={classes.Image}/> 
				</div>
				<div className={classes.Content}>
					<div className={classes.Header}>
						<h1 className={classes.Title}>{truncateString(props.title, 50)}</h1>
						<h4 className={classes.Date}>{parseDate(props.date_posted)}</h4>
					</div>
					<div className={classes.Info}>
						<div className={classes.Body}>{truncateString(props.body, 220)}</div>
					</div>
					<div className={classes.Link}>
						<Link to={"/post/" + (props.id)}>READ MORE</Link>
					</div>
					<div className={classes.Rating}>
						<div className={classes.ThumbsUp} onClick={(id) => thumbsUp(props)}></div>
						<div className={classes.ThumbsDown} onClick={(id) => thumbsDown(props)}></div>
					</div>
				</div>
			</div>
		</div>
	</Fade>
);

export default Post;