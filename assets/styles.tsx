import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 basicContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  basicImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  screens: {
   backgroundColor: '#ffffff',
  },
 scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
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
  postButton: {
    backgroundColor: '#96E3AC',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  basicButton: {
    backgroundColor: '#96E3AC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  checkbox: {
    margin: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  postText: {
   fontSize: 16,
   fontFamily: 'Arial',
   color: 'black'
  },
  reelerColor: {
   color: '#69AEB5',
  },
  logoColorGreen: {
   color: '#96E3AC',
  },
  logoColorBlue: {
   color: '#50AEB6',
  },
});

export default styles;