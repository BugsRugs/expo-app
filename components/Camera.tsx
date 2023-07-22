import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useRef } from 'react';
import * as Permissions from 'expo-permissions';
import { useNavigation } from '@react-navigation/native';

//const navigation = useNavigation();

const CameraFunction = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [mediaLibraryPermission, setMediaLibraryPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [capturedImages, setCapturedImages] = useState([]);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');

      const { status: mediaStatus } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
      setMediaLibraryPermission(mediaStatus === 'granted');
    })();
  }, []);

  const handleCameraTypeToggle = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const handleCapture = async () => {
    if (capturedImages.length < 6 && cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImages([...capturedImages, photo.uri]);
    }
  };

  const handleDelete = (index) => {
    const updatedImages = capturedImages.filter((_, i) => i !== index);
    setCapturedImages(updatedImages);
  };

  const handleAccept = () => {
    navigation.navigate('Create Post', { capturedImages: capturedImages });
  };

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={cameraType} ref={cameraRef}>
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ flex: 0.1, alignSelf: 'flex-end', alignItems: 'center' }}
            onPress={handleCameraTypeToggle}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={handleCapture}>
          <Text style={{ fontSize: 20, marginVertical: 10, color: 'blue' }}>Capture</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {capturedImages.map((image, index) => (
          <View key={index}>
            <Image source={{ uri: image }} style={{ width: 100, height: 100, margin: 5 }} />
            <TouchableOpacity onPress={() => handleDelete(index)}>
              <Text style={{ color: 'red', textAlign: 'center' }}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      {capturedImages.length > 0 && (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={handleAccept}>
            <Text style={{ fontSize: 20, marginVertical: 10, color: 'green' }}>Accept</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CameraFunction;
