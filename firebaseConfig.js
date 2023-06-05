import { initializeApp } from 'firebase/app';
import Constants from 'expo-constants';
// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

//Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCa6dTkqupw2afxFGD3Dr4iPqUoz8A8-Io',
  authDomain: 'expoproj-cb250.firebaseapp.com',
  databaseURL: 'https://expoproj-cb250-default-rtdb.firebaseio.com/',
  projectId: 'expoproj-cb250',
  storageBucket: 'expoproj-cb250.appspot.com',
  messagingSenderId: '155912401906',
  appId: '1:155912401906:android:be55f94fd06406df08716b',
  measurementId: 'G-measurement-id',
};
// const firebaseConfig = {
//   apiKey: Constants.manifest?.extra?.firebaseApiKey,
//   authDomain: Constants.manifest?.extra?.firebaseAuthDomain,
//   projectId: Constants.manifest?.extra?.firebaseProjectId,
//   storageBucket: Constants.manifest?.extra?.firebaseStorageBucket,
//   messagingSenderId: Constants.manifest?.extra?.firebaseMessagingSenderId,
//   appId: Constants.manifest?.extra?.firebaseAppId,
// };

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

const auth = getAuth(app);

export default app;