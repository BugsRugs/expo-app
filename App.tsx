import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from './components/SplashScreen';
import MainScreen from './app/screens/MainScreen';
import { registerRootComponent } from 'expo';
import FontLoader from './components/FontLoader';
import './firebaseConfig';
import RootNavigation from './index';
import { AppRegistry } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import * as Font from 'expo-font';

const App: React.FC = () => {
  // const [isSplashVisible, setIsSplashVisible] = useState(true); 

  // useEffect(() => {
  //   // Simulate loading time
  //   setTimeout(() => {
  //     setIsSplashVisible(false);
  //   }, 1000); // Delay of 2000 milliseconds (2 seconds) in this example
  // }, []);

  // if (isSplashVisible) {
  //   return (
  //     <View>
  //       <SplashScreen />
  //     </View>
  //   );
  // }
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Arial': require('./assets/fonts/arial.ttf')
    });
  };

  useEffect(() => {
    // Load the font during splash screen
    loadFonts();

    // Simulate loading time
    setTimeout(() => {
      setIsSplashVisible(false);
    }, 1000); // Delay of 2000 milliseconds (2 seconds) in this example
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
