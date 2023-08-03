import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native-elements';
import { FontAwesome, Fontisto, AntDesign } from '@expo/vector-icons';  
import styles from '../../assets/styles';

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text style={{
        marginBottom: 80, 
        fontSize: 30, 
        fontFamily: 'Arial', 
        color: '#50AEB6'
        }}>Sign In</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
        <TouchableOpacity onPress={() => navigation.navigate('Phone Sign In')} style={styles.signButton}>
          <FontAwesome name="mobile-phone" size={42} color="#50AEB6" /> 
          <Text style={{margin: 20, marginTop: 50,justifyContent: 'center', fontSize: 16,}}>Phone </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sign In')} style={styles.signButton}>
          <Fontisto name="email" size={40} color="#50AEB6" /> 
          <Text style={{margin: 20, marginTop: 50,justifyContent: 'center', fontSize: 16,}}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sign In')} style={styles.signButton}>
          <AntDesign name="apple-o" size={40} color="#50AEB6" /> 
          <Text style={{margin: 20, marginTop: 50, justifyContent: 'center', fontSize: 16,}}>AppleID</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
        <TouchableOpacity onPress={() => navigation.navigate('Sign In')} style={styles.signButton}>
          <FontAwesome name="mobile-phone" size={42} color="#3bb85c" /> 
          <Text style={{margin: 20, justifyContent: 'center', color: '#fff', fontSize: 16,}}>Phone </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sign In')} style={styles.signButton}>
          <Fontisto name="email" size={40} color="#3bb85c" /> 
          <Text style={{margin: 20, justifyContent: 'center', color: '#fff', fontSize: 16,}}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Sign In')} style={styles.signButton}>
          <AntDesign name="apple-o" size={40} color="#3bb85c" /> 
          <Text style={{margin: 20, justifyContent: 'center', color: '#fff', fontSize: 16,}}>AppleID</Text>
        </TouchableOpacity>
      </View>
      <Text style={{
        marginTop: 80, 
        fontSize: 30, 
        fontFamily: 'Arial', 
        color: '#3bb85c'
        }}>Sign Up</Text>
    </View>
  );
}


export default WelcomeScreen;