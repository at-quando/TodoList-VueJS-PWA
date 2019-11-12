// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';


export class FirebaseService {
  public firebaseOpt: any;
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDaJ1lt9_cAL4uZwv3qEP9nsBhd3c4G-NU',
      authDomain: 'todo-list-pwa-6f02f.firebaseapp.com',
      databaseURL: 'https://todo-list-pwa-6f02f.firebaseio.com',
      projectId: 'todo-list-pwa-6f02f',
      storageBucket: 'todo-list-pwa-6f02f.appspot.com',
      messagingSenderId: '44403035980',
      appId: '1:44403035980:web:411269eb6073512bdd09e9',
      measurementId: 'G-VNHDRX2DLN',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    this.firebaseOpt = firebase;
  }

  public createProviderGmail() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithPopup(provider).then((result: any) => {
        resolve(result);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  public createProviderFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithPopup(provider).then((result: any) => {
        resolve(result);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  public signIn(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password).catch((error: any) => {
        reject(error);
      });
    });
  }
}

