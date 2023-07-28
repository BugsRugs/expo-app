import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocation, storeLocation, retrieveLocation } from '../utils/hooks/locationUtils';

const LocationComponent = () => {
  const [location, setLocation] = useState(null);

  ///////////////////////////////////
  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      const location = await getLocation();
      await storeLocation(location);
      const storedLocation = await retrieveLocation();
      //console.log('Stored Location:', storedLocation);
    } catch (error) {
      console.log('Error fetching location:', error);
    }
  };
  ///////////////////////////////////

  useEffect(() => {
    // Request permission to access the user's location
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      // Get the user's current location
      const location = await Location.getCurrentPositionAsync({});
      const address = await Location.reverseGeocodeAsync(location.coords);
      setLocation(address);
      storeLocation(address);

    })();
  }, []);

  return (
    <View>
      {location ? (
        <Text>
          The city is: {location[0].city}
        </Text>
      ) : (
        <Text>Finding nearest city...</Text>
      )}
    </View>
  );
};

export default LocationComponent;
