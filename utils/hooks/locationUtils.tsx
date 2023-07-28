import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getLocation = async () => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status === 'granted') {
      const { coords } = await Location.getCurrentPositionAsync();
      return coords;
    } else {
      throw new Error('Location permission denied');
    }
  } catch (error) {
    console.log('Error retrieving location:', error);
    throw error;
  }
};

export const storeLocation = async (location) => {
  try {
    await AsyncStorage.setItem('location', JSON.stringify(location));
  } catch (error) {
    console.log('Error storing location:', error);
    throw error;
  }
};

export const retrieveLocation = async () => {
  try {
    const storedLocation = await AsyncStorage.getItem('location');
    return JSON.parse(storedLocation);
  } catch (error) {
    console.log('Error retrieving location:', error);
    throw error;
  }
};

export const storePostImage = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('postPictures', jsonValue);
  } catch (e) {
    console.log('error storing post picture in cache', error);
  }
};

export const retrievePostImage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('postPictures');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('error retrieving post picture in cache', error);
  }
};
