import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {  useFonts, Inter_900Black } from '@expo-google-fonts/inter';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.container} >
      <Image 
      style = {styles.logo}
      source={require('../assets/images/fish-loader.gif')} 
      />
      <Text>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    fontFamily: 'Inter_900Black',
    fontSize: 20
  }
});

export default SplashScreen;
