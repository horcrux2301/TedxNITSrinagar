import firebase from 'firebase';
var config = {
	apiKey: 'AIzaSyCJfCpD1TPQna3er3MfL0zJqja4qWAwxQ8',
	authDomain: 'tedx-d7107.firebaseapp.com',
	databaseURL: 'https://tedx-d7107.firebaseio.com',
	projectId: 'tedx-d7107',
	storageBucket: 'tedx-d7107.appspot.com',
	messagingSenderId: '577967881376'
};
var fire = firebase.initializeApp(config);
export default fire;