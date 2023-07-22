import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';
import PostScreen from './PostScreen';
import CreatePostScreen from './CreatePostScreen';
import CameraFunction from '../../components/Camera';
import styles from '../../assets/styles';

function OrderScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Orders!</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>whatre we about!</Text>
    </View>
  );
}

function MessageScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Messages!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function PostsStackNavigator() {
  return (
    <Stack.Navigator initialRouteName='Posts'>
      <Stack.Screen name="Posts" component={PostScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Create Post" component={CreatePostScreen} options={{ headerTitle: '' }} />
      <Stack.Screen name="CameraFunction" component={CameraFunction} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: 'white' }, // Set the background color for the tab bar
        tabBarActiveTintColor: styles.logoColorBlue.color, // Set the active tab color
        tabBarInactiveTintColor: 'gray', // Set the inactive tab color
      }}>
      <Tab.Screen name="Post" component={PostsStackNavigator} options={{ headerShown: false, }} />
      <Tab.Screen name="Orders" component={OrderScreen} options={{ headerShown: false }} />
      <Tab.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Messages" component={MessageScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function Tabs() {
  return (
    <MyTabs /> 
  );
}