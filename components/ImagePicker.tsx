// import React, { useState } from 'react';
// import { Button, Image, View } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { getStorage, ref, uploadString, getDownloadURL, uploadBytes } from 'firebase/storage';
// import { uid } from '../authentication/auth_state_listener';
// import firebase from 'firebase/compat';

// export default function ImagePickerFunction() {
//   const [image, setImage] = useState(null)
//   const [uploading, setUploading] = useState(false)
//   const pickImage = async () => {
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.All,  
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,   
//       });

//       const storage = getStorage();
//       const storageRef = ref(storage, '/profilePictures/'.concat(uid));

//       // 'file' comes from the Blob or File API
//       uploadBytes(storageRef, result).then((snapshot) => {
//         console.log('Uploaded a blob or file!');
//       });

//       if (!result.canceled) {
//         console.log('in here');
//         setImage(result.uri);
//         uploadImage(result.uri);
//       }
//     };

//     const uploadImage = async (uri) => {
//       const response = await fetch(uri);
//       const blob = await response.blob();
      
//       const storageRef = firebase.storage().ref();
//       const imageRef = storageRef.child(`profilePictures/${firebase.auth().currentUser.uid}`);
      
//       await imageRef.put(blob);
      
//       const downloadURL = await imageRef.getDownloadURL();
      
//       const userId = firebase.auth().currentUser.uid;
//       const userRef = firebase.firestore().collection('users').doc(userId);
      
//       await userRef.update({
//         profilePictureUrl: downloadURL,
//       });
      
//       console.log('Profile picture uploaded!');
//     };

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         {image && <Image source={{uri: image}} style={{width: 170 , height: 200}}/>}
//         <Button title='Update profile picture' onPress={pickImage} />
//       </View>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase/compat';
import '@firebase/storage';

export default function ImagePickerFunction() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
      uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`profilePictures/${firebase.auth().currentUser.uid}`);
    
    await imageRef.put(blob);
    
    const downloadURL = await imageRef.getDownloadURL();
    
    const userId = firebase.auth().currentUser.uid;
    const userRef = firebase.firestore().collection('users').doc(userId);
    
    await userRef.update({
      profilePictureUrl: downloadURL,
    });
    
    console.log('Profile picture uploaded!');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Update your profile picture" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}
