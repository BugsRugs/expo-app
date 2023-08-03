import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../app/screens/WeclomeScreen';
import SignInScreen from '../app/screens/SignInScreen';
import SignOutScreen from '../app/screens/SignUpScreen';
import HomeScreen from '../app/screens/HomeScreen';
import MainScreen from '../app/screens/MainScreen';
import Tabs from '../app/screens/TabScreen';
import PhoneAuth from '../authentication/PhoneAuth';

const Stack = createStackNavigator();

function AuthStack() {
  const user = null;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignOutScreen} />
        <Stack.Screen name="Phone Sign In" component={PhoneAuth} />
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Main" component={MainScreen} /> */}
        {/* <Stack.Screen 
          name="Reeler" 
          component={Tabs} 
          options={{ headerLeft : null }}
          /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export {AuthStack};