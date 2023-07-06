import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../app/screens/MainScreen';
import Tabs from '../app/screens/TabScreen';

const Stack = createStackNavigator();

const CustomHeader = () => {
  // You can replace "Reeler" with your own image source or component
  const logo = require('/Users/bronsonwong/expo-app/assets/images/adaptive-icon.png');
  
  return (
    <Image source={logo} style={{ width: 100, height: 30 }} resizeMode="contain" />
  );
};

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Reeler" 
          component={Tabs} 
          options={{
            headerLeft: null,
            headerTitle: () => <CustomHeader />,
            headerStyle: { backgroundColor: 'white' },
            headerTitleAlign: 'center',
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// import React from 'react';
// import { Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import ProfileScreen from '../app/screens/ProfileScreen';

// // Create a custom header component
// const CustomHeader = () => {
//   // You can replace "Reeler" with your own image source or component
//   const logo = require('/Users/bronsonwong/expo-app/assets/images/adaptive-icon.png');
  
//   return (
//     <Image source={logo} style={{ width: 100, height: 30 }} resizeMode="contain" />
//   );
// };

// // Create the stack navigator for the user screen
// const Stack = createStackNavigator();

// const UserStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Reeler"
//           component={Tabs}
//           options={{
//             headerLeft: null,
//             headerTitle: () => <CustomHeader />,
//             headerStyle: { backgroundColor: 'lightblue' } // Set the background color to light blue
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// // Create the bottom tab navigator
// const Tab = createBottomTabNavigator();

// const Tabs = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//       {/* Add more screens here */}
//     </Tab.Navigator>
//   );
// };

// export default UserStack;
