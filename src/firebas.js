import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyC3rs4bJU1QO4oYkW_282aj7N1bHWARg6w',
	authDomain: 'whatsapp-clone-c912d.firebaseapp.com',
	databaseURL: 'https://whatsapp-clone-c912d.firebaseio.com',
	projectId: 'whatsapp-clone-c912d',
	storageBucket: 'whatsapp-clone-c912d.appspot.com',
	messagingSenderId: '59493852213',
	appId: '1:59493852213:web:cc5817c06410b13045bd7c',
	measurementId: 'G-HXCEBLPWG0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
