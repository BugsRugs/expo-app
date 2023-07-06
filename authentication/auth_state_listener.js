import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

let uid = null;
let user = null;

onAuthStateChanged(auth, (currentUser) => {
  if (currentUser) {
    uid = currentUser.uid;
    user = currentUser;
  } else {
    uid = null;
    user = null;
  }
});

export { uid, user };

// import { useEffect } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { getUserData } from '../utils/hooks/firestoreAPI.js'; // Replace with your Firestore API function

// const auth = getAuth(); // Get the Firebase authentication instance

// const auth_state_listener = () => {
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         // User is signed in
//         const userData = await getUserData(user.uid); // Retrieve user data from Firestore
//         // Update user status or trigger any necessary actions
//         console.log('User logged in:', user);
//         console.log('User data:', userData);
//       } else {
//         // User is signed out
//         console.log('User logged out');
//       }
//     });

//     return () => {
//       unsubscribe(); // Cleanup the listener when the component unmounts
//     };
//   }, []);
// };

// export default auth_state_listener;
