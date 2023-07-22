

import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import firebase from 'firebase/compat';
import {getStorage, ref, uploadBytes} from 'firebase/storage';
import 'firebase/firestore';
import styles from '../assets/styles';
import { uid } from '../authentication/auth_state_listener';
import { useNavigation } from '@react-navigation/native';
import { getFirestore, doc, setDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { app } from '../firebaseConfig';


const SavePost = ({ capturedImages, typeOfFish, lbs, pricePerLbs, postLocation, description, delivery, pickup, availability }) => {
 const navigation = useNavigation(); //for some reason cannot declare this inside the async function
 console.log('we have the availability in save component', availability);
 async function savePost() {
  if (typeOfFish.trim() === '' || lbs.trim() === '' || pricePerLbs.trim() === '') {
      Alert.alert('Error', 'Cannot leave Type of Fish, Pounds of Fish, or Price per Pound empty');
      return;
    } 

   const storage = getStorage();
   //const dateId = Date.now().toString();
   const currentDate = new Date();
   const year = currentDate.getFullYear().toString();
   const month = currentDate.getMonth().toString();
   const day = currentDate.getDate().toString();
   const millisecond = currentDate.getMilliseconds().toString();
   const dateId = year.concat('-', month, '-', day, '-', millisecond);
   const userId = uid;
   const postId = userId.concat('.', dateId);
   const storageRef = ref(storage, 'postPictures/'.concat(postId));
   console.log('the post id is', postId);
   // 'file' comes from the Blob or File API
   uploadBytes(storageRef, capturedImages).then((snapshot) => {
     //console.log('Uploaded a blob or file!');
     navigation.navigate('Posts');
   });
   

    const db = getFirestore(app);
    // const pathReference = ref(storage, '/postText/'.concat(uid, '.', dateId));
    // const documentRef = firestore.collection('collectionName').doc('documentId');
    const userRef = doc(db, 'postText/', postId);
      setDoc(userRef, {
        typeOfFish: typeOfFish,
        lbs: lbs, 
        pricePerLbs: pricePerLbs,
        postLocation: postLocation,
        description: description,
        delivery: delivery,
        pickup: pickup,
        isPostActive: true,
        dateOfPost: dateId,
      })
        .then(() => {
          console.log('Uploaded post text');
        })

    //const activeRef = doc(db, 'activePostIds/', userId.concat('.', dateId));
    //dont think i need an active and inactive of just post ID's because postText and inactivePost text can take that place.
    const userPostRef = doc(db, 'users', userId);

// Update the "posts" field in the user document to add the new postId
   try {
     await updateDoc(userPostRef, {
       posts: arrayUnion(postId),
     });
     console.log('PostId added to the user document!');
   } catch (error) {
     console.error('Error adding postId to user document:', error);
   }
  }

  return (
    <TouchableOpacity onPress={savePost} style={{ backgroundColor: '#40E0D0', padding: 10, borderRadius: 5, margin: 10, paddingVertical: 10 }}>
      <Text style={styles.postText}>Save Post!</Text>
    </TouchableOpacity>
  );
};

export default SavePost;
