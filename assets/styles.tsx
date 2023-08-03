import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 basicContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  postContainer: {
    flex: 1,
    justifyContent: 'center',
    //justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  postContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff4cf', //'#fcf7bd', cafcfc
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //height: 50
  },
  postScreenText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
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
  postTextBold: {
   fontSize: 16,
   fontFamily: 'Arial',
   color: '#50AEB6',
   fontWeight: 'bold',
  },
  postTextBold2: {
   fontSize: 16,
   fontFamily: 'Arial',
   color: 'black',
   fontWeight: 'bold',
  },
  titleText: {
   fontSize: 16,
   fontFamily: 'Arial',
   color: 'black',
   fontWeight: 'bold'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 10,
    // marginBottom: 10,
  },
  signButton: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signButton2: {
    //marginHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput2: {
    backgroundColor: '#EFEFEF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
  },
  saveButton: {
    backgroundColor: '#40E0D0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
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