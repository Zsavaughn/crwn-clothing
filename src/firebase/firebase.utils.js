import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBSG_Ui2pTx4gr4US4nK7sJ4rGDPOqpvpY",
    authDomain: "crwn-db-cca1f.firebaseapp.com",
    projectId: "crwn-db-cca1f",
    storageBucket: "crwn-db-cca1f.appspot.com",
    messagingSenderId: "121733388572",
    appId: "1:121733388572:web:088f1a342504ccdd3742d9",
    measurementId: "G-H6RQKLCE7T"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;