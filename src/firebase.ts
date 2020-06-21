import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9nOS_QRY3ozzHcZ6idKz4lWkxSdzkFPE",
  authDomain: "vue-ts-af9f5.firebaseapp.com",
  databaseURL: "https://vue-ts-af9f5.firebaseio.com",
  projectId: "vue-ts-af9f5",
  storageBucket: "vue-ts-af9f5.appspot.com",
  messagingSenderId: "771419491714",
  appId: "1:771419491714:web:352d28f09367ad52e8539b"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
