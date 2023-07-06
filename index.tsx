import React, { useState } from 'react';
import { AppRegistry } from 'react-native';
import { useAuthentication } from './utils/hooks/useAuthentication';
import {AuthStack} from './navigation/authStack';
import UserStack from './navigation/userStack';
//import "expo-router/entry";

export default function RootNavigation() {
  const { user } = useAuthentication();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  // return isLoggedIn || user ? <UserStack /> : <AuthStack onLogin={handleLogin} />;
  return user ? <UserStack /> : <AuthStack />;
}

//AppRegistry.registerComponent('expo-app', () => App);
