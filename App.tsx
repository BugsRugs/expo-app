import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from './components/SplashScreen';
import MainScreen from './app/screens/MainScreen';
import { registerRootComponent } from 'expo';
import FontLoader from './components/FontLoader';
import './firebaseConfig';
import RootNavigation from './index';
import { AppRegistry } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

const App: React.FC = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true); 

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsSplashVisible(false);
    }, 100); // Delay of 2000 milliseconds (2 seconds) in this example
  }, []);

  if (isSplashVisible) {
    return (
      <View>
        <SplashScreen />
      </View>
    );
  }

  return (
    // <FontLoader>
    //  <MainScreen />
    // </FontLoader>
    <ThemeProvider>
        <RootNavigation />
    </ThemeProvider>
  );
}

registerRootComponent(App);
//AppRegistry.registerComponent('expo-app', () => App);
