


import React, { useRef, useState } from 'react';
import { View, TextInput, Button, Text, Pressable} from 'react-native';
import firebase from 'firebase/app';
import {getApp,initializeApp} from 'firebase/app';
import { getAuth, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
//import firebaseConfig from '../firebaseConfig';
//import auth from '../firebaseConfig';

const app = getApp();
const auth = getAuth(app);

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const recaptchaVerifier = useRef(null);
  const firebaseConfig = app ? app.options : undefined;
  const [info,setInfo] = useState("");
  const attemptInvisibleVerification = false;

  const sendVerificationCode = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      console.log('PHONE AUTH ', phoneProvider);
      const verificationId = await phoneProvider.verifyPhoneNumber(
            phoneNumber,
            recaptchaVerifier.current
        );
      console.log('VI ', verificationId);
      // const phoneProvider = new firebase.auth.PhoneAuthProvider();
      // const verificationId = await phoneProvider.verifyPhoneNumber(
      //   phoneNumber,
      //   recaptchaVerifier.current
      // );
      setVerificationId(verificationId);
      setInfo('Success : Verification code has been sent to your phone');
    } catch (error) {
      console.log('Error sending verification code:', error);
    }
  };

  const confirmVerificationCode = async () => {
    try {
      //const auth = getAuth(); // Use getAuth() directly
      //const credential = signInWithPhoneNumber(auth, verificationId, verificationCode);
      const credential = PhoneAuthProvider.credential(verificationId,verificationCode); 
      await signInWithCredential(auth,credential);
      //await firebase.auth().signInWithCredential(credential);
      console.log('Phone authentication successful');
    } catch (error) {
      console.log('Error confirming verification code:', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20}}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <TextInput
        style={{ fontSize: 20, color: '#000', padding: 10}}
        placeholder="Enter Phone Number"
        onChangeText={ (phoneNumber) => setPhoneNumber(phoneNumber)}
        keyboardType="phone-pad"
        autoCompleteType="tel"
      />
      <Button 
        title='Send Code'
        onPress={ () => sendVerificationCode()} 
        disabled={!phoneNumber}
      />
      <TextInput
        style={{ fontSize: 20, color: '#000', padding: 10}}
        placeholder="Enter Verification Code"
        onChangeText={setVerificationCode}
        keyboardType="number-pad"
      />
      <Button 
        title="Confirm Code" 
        onPress={confirmVerificationCode} 
        disabled={!verificationCode}
      />
    </View>
  );
};

export default PhoneAuth;
