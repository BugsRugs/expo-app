
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase/compat';
import '@firebase/storage';
import { getApps, initializeApp } from 'firebase/app';
import firebaseConfig from '../firebaseConfig';
import { getBlob, getBytes, getDownloadURL, getStorage, getStream, ref, uploadBytes, uploadString } from 'firebase/storage';
import { uid } from '../authentication/auth_state_listener';
import styles from '../assets/styles';



export default function ImagePickerFunction() {

  
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const storage = getStorage();
  const userId = uid;
  
  
  const getImage = async () => {
    const downloadRef = ref(storage, `profilePictures/${userId}.jpg`);
    try {
      const downloadURL = await getDownloadURL(downloadRef);
      setUrl(downloadURL);
      console.log('Download URL:', downloadURL);
      // You can use the downloadURL in your code as needed
    } catch (error) {
      console.error('Error getting download URL:', error);
    }
  }

  useEffect(() => {
    // Call the getImage function when the component mounts
    getImage();
  }, []); 


  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      // const pathName = `profilePictures/${uid}.jpg`;
      //uploadImage(result.assets[0].uri); commeting out this uploadImage so that the useEffect calls it instead once the image has been set
      //console.log('the upload function has been called', result);
    }
  };

  const uploadImage = async (uri) => {

    try {
    console.log(uri); //for some reason when i put this log of the uri first the app doesnt instantly crash, it seems to be an issue with the asynchronous execution of the below lines. But this does successfuly upload img1 to the firebase storage, it just takes about 30 seconds. Very odd.
    
    // const response = await fetch(uri);
    // console.log('1');
    //  const blob = await response.blob();
    //  console.log('2');
      const storageRef = getStorage();
      console.log('3', storageRef);
       const imageRef = ref(storageRef, `profilePictures/${userId}.jpg`);
      
       console.log('4', imageRef);
       const im = await fetch(uri);
       console.log('5', im);
       const bytes = await im.blob();
       console.log('6', bytes);
       await uploadBytes(imageRef, bytes);
       console.log('7'); //ok we were able to get an image from my phone to upload. We scanned the QR code then logged in and selected an image of a shirt then saw each step accomplioshed while it immedietly sent me back to the profile screen finally taking 30-60-2min seconds to upload. Finally i was able to see it in firebase. 
  } catch (error) {
    console.error('Error uploading image:', error);
    // Handle the error, e.g., show an error message to the user
  }
      
      //What happened and why was that so dificult, we were able to finally upload the profile picture and see it in firebase. We first created the storage ref then another reference to the image name, finally i think we fetched the data of the image and waited to fetch it, as well as converting the image to bytes and waiting on that, the we waited on uploading the bytes using our reference and the bytes we converted. This did not appear in firebase immedietely, it took a minute or less. 

      //another note in order to upload to a specific file inside a collection i have to provide the full path as shown above. 

      //ok now its crashing again and im not sure why
 
  };

  useEffect(() => {
    if (image) {
      // Call the uploadImage function when the 'image' state changes
      uploadImage(image);
      setUrl(image);
    }
  }, [image]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      { url ? (<Image source={{ uri: url }} style={{ width: 200, height: 200, margin: 10 }} />) : 
      ( <View><Text style={styles.postText}>No profile picture available</Text></View> )}
      {/* { image ? (<Image source={{ uri: image }} style={{ width: 200, height: 200, margin: 10 }} />) : (url ? (<Image source={{ uri: url }} style={{ width: 200, height: 200, margin: 10 }} />) : 
      (<View><Text style={styles.postText}>No profile picture available</Text></View>))} */}
      <Button title="Update your profile picture" onPress={pickImage} />
      {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
    </View>
  );
};
