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
