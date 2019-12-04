import * as firebase from "firebase";

let config = {
  apiKey: "AIzaSyCvXlvAEtNjCvtt8kquDYrSi4JOqGLZr2c",
  authDomain: "cramapp-2997f.firebaseapp.com",
  databaseURL: "https://cramapp-2997f.firebaseio.com",
  storageBucket: "cramapp-2997f.appspot.com"
};

let app = firebase.initializeApp(config);
export const db = app.database();
