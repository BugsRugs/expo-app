

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
import { retrievePostImage } from '../utils/hooks/locationUtils';


const SavePost = ({ capturedImages, typeOfFish, lbs, pricePerLbs, postLocation, description, delivery, pickup, availability, isFilet }) => {

 const navigation = useNavigation(); //for some reason cannot declare this inside the async function
//  console.log('we have the availability in save component', availability);
  //console.log('we have the captured images in save component', capturedImages);
 

 async function savePost() {
  //console.log('we have the captured images in save component', capturedImages);
  // if (typeOfFish.trim() === '' || lbs.trim() === '' || pricePerLbs.trim() === '') { 
  //     Alert.alert('Error', 'Cannot leave Type, Pounds, or Price empty');
  //     return;
  //   } //ucomment this later as it is what restricts users from saving empty posts
  
  //console.log('retrieving post image', await retrievePostImage());

   const storage = getStorage();
   const storageRef = ref(storage);
   //const dateId = Date.now().toString();
   const currentDate = new Date();
   const year = currentDate.getFullYear().toString();
   const month = currentDate.getMonth().toString();
   const day = currentDate.getDate().toString();
   const millisecond = currentDate.getMilliseconds().toString();
   const dateId = year.concat('-', month, '-', day, '-', millisecond);
   const userId = uid;
   const postId = userId.concat('.', dateId);
   //const storageRef = ref(storage, 'postPictures/'.concat(postId));

  //  let imageNumber = 0;
  //  console.log('the captured images in SavePost', capturedImages);
  // for (const object of capturedImages) {
  //   // const imageRef = ref(storage, 'postPictures/${postId}/${imageNumber}');
  //   const imageRef = ref(storage, 'postPictures/' + postId.toString() + '/' + imageNumber.toString());
  //   //METHOD FOR REFERENCING LONG PATHS you can use + signs to add strings
  //   const im = await fetch(object);
  //   const bytes = await im.blob();
  //   try {
  //     await uploadBytes(imageRef, bytes);
  //     imageNumber = imageNumber + 1;
  //     console.log('uploaded image number ', imageNumber);
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //   }
  //}
    const uploadPromises = capturedImages.map(async (image, index) => {
      const imageRef = ref(storage, 'postPictures/' + postId.toString() + '/' + index.toString());
      console.log('0 ', imageRef)
      const im = await fetch(image);
      console.log('1 ', im);
      let bytes;
      try{
        bytes = await im.blob();
      } catch (error) {
        console.log('error uploading ', error);
      } 
      return uploadBytes(imageRef, bytes);
    });

    try {
      // Wait for all uploads to complete
      await Promise.all(uploadPromises);
      console.log('All images uploaded successfully');
    } catch (error) {
      console.error('Error uploading images:', error);
    }

    //oh my gosh it actually uploaded 2 images properly. Everything had to be clean and work together, the camera function used a useEffect to update the handleImageChange function anytime selected images changed. Inside the createPostScreen theres the handleCameraFunction save which uses the onsave to communicate with camera screen. As well there is a useEffect for logging the caoturedImages in create finally everytuihgn is sent to save and uploaded via a promise. 
  

    

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
        availability: availability,
      })
        .then(() => {
          console.log('Uploaded post text');
        })

    

    //const activeRef = doc(db, 'activePostIds/', userId.concat('.', dateId));
    //dont think i need an active and inactive of just post ID's because postText and inactivePost text can take that place.
    //const userPostRef = doc(db, 'users', userId);

// Update the "posts" field in the user document to add the new postId
  //  try {
  //    await updateDoc(userPostRef, {
  //      posts: arrayUnion(postId),
  //    });
  //    //console.log('PostId added to the user document!');
  //  } catch (error) {
  //    console.error('Error adding postId to user document:', error);
  //  }
  }

  return (
    <TouchableOpacity onPress={savePost} style={{ backgroundColor: '#40E0D0', padding: 10, borderRadius: 5, margin: 10, paddingVertical: 10 }}>
      <Text style={styles.postText}>Save Post!</Text>
    </TouchableOpacity>
  );
};

export default SavePost;
