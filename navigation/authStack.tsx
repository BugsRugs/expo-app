import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../app/screens/WeclomeScreen';
import SignInScreen from '../app/screens/SignInScreen';
import SignOutScreen from '../app/screens/SignUpScreen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignOutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}