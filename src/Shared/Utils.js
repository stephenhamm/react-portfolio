import { notify } from 'react-notify-toast';
import axios from '../axios';
import {cloneDeep} from 'lodash'

export const thumbsUp = (post) => {
	// const updatedPost = cloneDeep(post);
	// updatedPost.likes += 1;

	// axios.put('/blog/posts/post' + post.id + ".json", updatedPost)
	// 	.then(response => {
	// 		console.log(response);
	// 		notify.show("Rating sent. Thank you!", "custom", 3000, {background: "#34ad82", text: "#FFFFFF"});
	// 	})
	// 	.catch(error => {
	// 		notify.show("Error sending Rating.", "error")
  //   });
    
	notify.show("Rating sent. Thank you!", "custom", 3000, {background: "#34ad82", text: "#FFFFFF"});
}

export const thumbsDown = (post) => {
	notify.show("Rating sent. Thank you!", "custom", 3000, {background: "#34ad82", text: "#FFFFFF"}); 
}

export const parseDate = (str) => {
  return new Date(str).toLocaleDateString();
}

export const truncateString = (str, limit) => {
	return str.length > limit ? str.substring(0, limit) + "..." : str;
}