import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export default function Button(this: any, props: { onPress: any; title?: "Save" | undefined; }) {
  const { onPress, title = 'Save' } = props;
  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Pressable onPress={this.handleButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </Pressable>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  buttonContainer: {
    position: 'relative',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 0,
  },
  button: {
    backgroundColor: 'blue',
    padding: 1,
    borderRadius: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
