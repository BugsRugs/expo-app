import { getFirestore, doc, getDoc } from 'firebase/firestore';
import app from '../../firebaseConfig'; // Replace with your Firebase configuration file

const getUserData = async (userId) => {
  const db = getFirestore(app); // Get the Firestore instance
  const userRef = doc(db, 'users', userId); // Replace 'users' with your collection name

  try {
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return docSnap.data(); // Return user data if the document exists
    } else {
      console.log('User document does not exist');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return null;
  }
};

export { getUserData };
