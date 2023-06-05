import React from 'react';
import { AppRegistry } from 'react-native';
//import App from './App';
import { useAuthentication } from './utils/hooks/useAuthentication';
import UserStack from './navigation/userStack';
import AuthStack from './navigation/authStack';

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <UserStack /> : <AuthStack />;
}

//AppRegistry.registerComponent('expo-app', () => App);
