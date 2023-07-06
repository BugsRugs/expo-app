import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CameraFunction from '../../components/Camera';

const CreatePostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Add photos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default CreatePostScreen;
