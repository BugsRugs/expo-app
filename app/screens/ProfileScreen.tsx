import React, { useEffect, useState } from 'react';
import { Button, Text, View, TextInput, StyleSheet, ScrollView, SafeAreaView, Image, Switch } from 'react-native';
import { useAuthentication } from '../../utils/hooks/useAuthentication';
import { StackScreenProps } from '@react-navigation/stack';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { uid } from '../../authentication/auth_state_listener';
import { app } from '../../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import ImagePickerFunction from '../../components/ImagePicker';
import { getStorage, ref, getDownloadURL, uploadBytes, getBlob, getBytes } from "firebase/storage";
import firebase from 'firebase/compat';

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage);



const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuthentication();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [city, setCity] = useState('');
  const [county, setCounty] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  let [emailEnabled, setEmailEnabled] = useState(true);
  
// Create a reference with an initial file path and name
  const storage = getStorage();
  const pathReference = ref(storage, '/profilePictures/'.concat(uid));

  const pic = getBlob(pathReference);
  console.log('Blob is succesfully downloaded', pic != null);
  console.log(pic.uri);

  const handleSave = () => {
    const userId = user.uid;
    const db = getFirestore(app);
    const userRef = doc(db, 'users', userId);

    // if(profilePicture){
    //     const storageRef = ref(storage, `users/${user.uid}/profilePicture.jpg`);
    //     // The function below will upload the user's profile picture in Firebase Storage
    //     uploadBytes(storageRef, profilePicture);
    //     // After you upload the profile picture, you can get the download URL and set it as the profilePicture in Firestore
    //     getDownloadURL(storageRef)
    //       .then((downloadURL) => {
    //         setDoc(userRef, {
    //           name: name || 'Default Name',
    //           age: age || 'Default Age',
    //           bio: bio || 'Default Bio',
    //           city: city || 'Default City',
    //           county: county || 'Default County',
    //           state: state || 'Default State',
    //           street: street || 'Default Street',
    //           zipcode: zipcode || 'Default Zipcode',
    //           email: email || 'Default Email',
    //           phoneNumber: phoneNumber || 'Default Phone Number',
    //           profilePicture: downloadURL
    //         })
    //           .then(() => {
    //             console.log('User profile saved!');
    //           })
    //           .catch((error) => {
    //             console.error('Error saving user profile: ', error);
    //           });
    //       })
    //       .catch((error) => {
    //         console.error('Error getting download URL from Firebase Storage: ', error);
    //       });
    // } else {
      setDoc(userRef, {
        name: name || 'Default Name',
        age: age || 'Default Age',
        bio: bio || 'Default Bio',
        city: city || 'Default City',
        county: county || 'Default County',
        state: state || 'Default State',
        street: street || 'Default Street',
        zipcode: zipcode || 'Default Zipcode',
        email: email || 'Default Email',
        phoneNumber: phoneNumber || 'Default Phone Number',
        emailEnabled: emailEnabled || true
      })
        .then(() => {
          console.log('User profile saved');
        })
    //};
  }


  useEffect(() => {
    const userId = uid;
    const db = getFirestore(app);
    const userRef = doc(db, 'users', userId);

    getDoc(userRef).then((doc) => {
      if (doc.exists()) {
        const userData = doc.data();
        setName(userData.name);
        setAge(userData.age);
        setBio(userData.bio);
        setCity(userData.city);
        setCounty(userData.county);
        setState(userData.state);
        setStreet(userData.street);
        setZipcode(userData.zipcode);
        setEmail(userData.email);
        setPhoneNumber(userData.phoneNumber);
        setProfilePicture(userData.profilePicture);
        setEmailEnabled(userData.emailEnabled);
      } else {
        console.log('No such user!');
      }
    }).catch((error) => {
      console.error('Error fetching user profile: ', error);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View>
          {user ? (
            <View>
              <ImagePickerFunction />
              {/* {profilePictureUrl ? (
        <Image source={{ uri: profilePictureUrl }} style={{ width: 200, height: 200 }} />
      ) : (
        <Text>No profile picture available</Text>
      )} */}
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Name"
                style={styles.input}
              />
              <TextInput
                value={age}
                onChangeText={setAge}
                placeholder="Age"
                style={styles.input}
              />
              <TextInput
                value={bio}
                onChangeText={setBio}
                placeholder="Bio"
                style={styles.input}
              />
              <TextInput
                value={city}
                onChangeText={setCity}
                placeholder="City"
                style={styles.input}
              />
              <TextInput
                value={county}
                onChangeText={setCounty}
                placeholder="County"
                style={styles.input}
              />
              <TextInput
                value={state}
                onChangeText={setState}
                placeholder="State"
                style={styles.input}
              />
              <TextInput
                value={street}
                onChangeText={setStreet}
                placeholder="Street"
                style={styles.input}
              />
              <TextInput
                value={zipcode}
                onChangeText={setZipcode}
                placeholder="Zipcode"
                style={styles.input}
              />
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                style={styles.input}
              />
              <TextInput
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Phone Number"
                style={styles.input}
              />
              <Switch
                value={emailEnabled == null ? (true) : (emailEnabled)}
                trackColor={{false: '#ffffff', true: '#4ADEDE'}}
                thumbColor={emailEnabled ? '#2A9DF4' : '#2A9DF4'}
                onValueChange={setEmailEnabled}
              />
              <Button title="Save" onPress={handleSave} />
            </View>
          ) : (
            <Text>Please log in to see your profile.</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Similar background color as in AppStyles.js
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: 10,
    // paddingVertical: 10,
  },
  input: {
    height: 40,
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#ccc', // Similar border color as in AppStyles.js
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff', // Similar background color as in AppStyles.js
    fontFamily: 'Arial', // Similar font family as in AppStyles.js
    fontSize: 16,
    color: '#333', // Similar text color as in AppStyles.js
  },
});

export default ProfileScreen;
