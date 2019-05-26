import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_M_CITY_API_KEY,
  //   authDomain: process.env.REACT_APP_M_CITY_AUTH_DOMAIN,
  //   databaseURL: process.env.REACT_APP_M_CITY_DATABASE_URL,
  //   projectId: process.env.REACT_APP_M_CITY_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_M_CITY_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_M_CITY_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_M_CITY_ID
};

console.log("firebaseConfig", firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");

export { firebase, firebaseMatches, firebasePromotions };
// firebaseDB
//   .ref("matches")
//   .once("value")
//   .then(snapshot => {
//     console.log("SNAPSHOT", snapshot.val());
//   });
