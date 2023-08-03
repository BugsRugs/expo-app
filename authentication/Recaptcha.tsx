import React, {useRef} from 'react';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

import firebase from 'firebase/compat';

export const Recaptcha = () => {
  const recaptchaVerifier = useRef(null);
  return (
    <FirebaseRecaptchaVerifierModal
      ref={recaptchaVerifier}
      firebaseConfig={firebase.app().options}
    />
  );
}