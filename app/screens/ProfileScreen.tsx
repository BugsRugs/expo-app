import React, { useEffect, useState } from 'react';
import { Button, Text, View, TextInput, StyleSheet, ScrollView, SafeAreaView, Image, Switch, Alert } from 'react-native';
import { useAuthentication } from '../../utils/hooks/useAuthentication';
import { StackScreenProps } from '@react-navigation/stack';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { uid } from '../../authentication/auth_state_listener';
import { app } from '../../firebaseConfig';
import auth from '../../firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import ImagePickerFunction from '../../components/ImagePicker';
import { getStorage, ref, getDownloadURL, uploadBytes, getBlob, getBytes } from "firebase/storage";
import firebase from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage);
// const imageRef = ref(storage, '/profilePictures/'.concat(uid));
// const downloadURL = getBlob(imageRef);
// console.log('in profile the download is', downloadURL);


const signOutFunction = () => {
  Alert.alert(
      'Log Out',
      'Are you sure you want to log out of your Reeler account?',
      [
        {
          text: 'Cancel',
          // onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            const a = getAuth();
            signOut(a).then(() => {
              console.log('successfully signed out');
            }).catch((error) => {
              console.log('error signing out: ', error);
            });
          },
        },
      ],
      { cancelable: true }
    );
}

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


  const handleSave = () => {
    const userId = user.uid;
    const db = getFirestore(app);
    const userRef = doc(db, 'users', userId);
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
  }


  useEffect( () => {
    const userId = uid;
    const db = getFirestore(app);
    const userRef = doc(db, 'users', userId);

    
    // console.log('the download url in ProfileScreen is', downloadURL);

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
        //setProfilePicture(userData.profilePicture);
        //setProfilePicture(downloadURL);
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
              <View style={{}}>
                <TouchableOpacity style={{flex: 1, margin: 10}}>  
                  <Text style={{color: 'black', fontSize: 16}} >Add Phone number to make future log in's easier and more secure</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>Receive Emails</Text>
              <Switch
                value={emailEnabled == null ? (true) : (emailEnabled)}
                trackColor={{false: '#ffffff', true: '#4ADEDE'}}
                thumbColor={emailEnabled ? '#2A9DF4' : '#2A9DF4'}
                onValueChange={setEmailEnabled}
              />
              </View>
              
              <View style={{flexDirection: 'row',  margin: 10, }}> 
                <TouchableOpacity onPress={signOutFunction} style={{margin: 10}}>  
                  <Text style={{color: 'red', fontSize: 20}} >Sign Out</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSave} style={{margin: 10}}>  
                  <Text style={{color: 'green', fontSize: 20}} >Save</Text>
                </TouchableOpacity>
              </View>
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

