import React, { Component, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Button from '../../components/Button';
import * as Font from 'expo-font';

// const MainScreen: React.FC = () => {
//   return (
//     <View>
//       <Text>Welcome to the Main Screen!</Text>
//       {/* Add your main screen UI here */}
//     </View>
//   );
// } functional component

class MainScreen extends Component {
  
  componentDidMount(): void {
      
  }

  componentWillUnmount(): void {
      
  }

  handleButtonPress = () => {
    console.log('Button pressed!');
  };

  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.topContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.reelerLogo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.bottomContainer}>
          {/* Add your main screen UI here */}
          <TouchableOpacity onPress={this.handleButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>Order</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleButtonPress} style={styles.button}>
            <Text style={styles.buttonText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#44E4F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 10
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 0,
  },
  topContainer: {
    top: 0,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  reelerLogo: {
    height: '50%',
    width: '50%'
  },
  buttonText: {
    fontFamily: 'OpenSans-Regular',
  },
  parent: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});

export default MainScreen;