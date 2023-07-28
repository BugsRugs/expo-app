


import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { getBlob, getDownloadURL, getStorage, ref } from "firebase/storage";
import firebase from '../firebaseConfig';
import '@firebase/storage';




export default function FetchPosts() {
 const storage = getStorage();
 const pathReference = ref(storage, 'profilePictures/btoCwW0RGJUf3YNdqx9GxbMUmRX2');
 //console.log('the path reference is', pathReference);
 // const picture = getBlob(pathReference);

 const picture = getDownloadURL(pathReference); 
 console.log('the blob is', picture);
 console.log('first step');
 // const storageRef = firebase.storage().ref();
 // //const imageRef = storageRef.child(`postPictures/btoCwW0RGJUf3YNdqx9GxbMUmRX2.2023-6-20`);
 // console.log('we made it');
 // const imageRef = storageRef.child('profilePictures/btoCwW0RGJUf3YNdqx9GxbMUmRX2');
 // console.log('made it here');
 // const downloadURL = await imageRef.getDownloadURL();
 // console.log('the download url is', downloadURL);
 // console.log(getDownloadURL(pathReference));
 // getDownloadURL(pathReference)
 // .then((url) => {
  
 // })


  //const [imageUrls, setImageUrls] = useState([]);


  // useEffect(() => {
  //   const getImageUrls = async () => {
  //     try {
  //       const storageRef = firebase.storage().ref();
  //       console.log('made it pas the first ref');
  //       const postPicturesRef = storageRef.child('postPictures/');
  //       console.log('the refeerence to the database is', postPicturesRef);
  //       const listResult = await postPicturesRef.list();
  //       console.log('the list result is', listResult);
  //       const urls = await Promise.all(
  //         listResult.items.map((item) => item.getDownloadURL())
  //       );

  //       setImageUrls(urls);
  //     } catch (error) {
  //       console.error('Error getting image URLs:', error);
  //     }
  //   };

  //   getImageUrls();
  // }, []);

  // useEffect(() => {
  // let imageRef = firebase.storage().ref('/postPictures/');
  // imageRef
  //   .getDownloadURL()
  //   .then((url) => {
  //     setImageUrls(url);
  //   })
  //   .catch((e) => console.log('getting downloadURL of image error => ', e));
  //  },[])

  return (
    <View>
     <Text>hi</Text>
    </View>
  );
};

