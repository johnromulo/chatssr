import firebase from 'firebase/app';
import 'firebase/database';
import firebaseConfig from '~/config/firebase.config';

export default firebase.initializeApp(firebaseConfig);
