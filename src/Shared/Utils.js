import { notify } from 'react-notify-toast';
import firebase from '../firebase';

export const updateRatings = (post, likes, dislikes) => {
  firebase.database().ref('blog/posts/post' + post.id).update({
		likes: likes,
		dislikes: dislikes
	});

	notify.show("Rating sent. Thank you!", "custom", 3000, {background: "#34ad82", text: "#FFFFFF"});
}

export const parseDate = (str) => {
  return new Date(str).toLocaleDateString();
}

export const truncateString = (str, limit) => {
	return str.length > limit ? str.substring(0, limit) + "..." : str;
}