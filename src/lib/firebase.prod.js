import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// we need to somehow seed the database

// we need a config here
const config = {
	apiKey: 'AIzaSyAbtRFLkxf4buN4EFyrzzyILWZZ4CpVbG8',
	authDomain: 'netflix-9189b.firebaseapp.com',
	databaseURL: 'https://netflix-9189b.firebaseio.com',
	projectId: 'netflix-9189b',
	storageBucket: 'netflix-9189b.appspot.com',
	messagingSenderId: '7475860135',
	appId: '1:7475860135:web:e6e05068f4295da7e9c182',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
