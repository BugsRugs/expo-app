import { View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import LocationComponent from "../../components/LocationComponent";
import styles from "../../assets/styles";
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import FetchScreen from "../../components/FetchPosts";

export default function PostScreen() {
 
 const navigation = useNavigation();

 function postButton() {
  navigation.navigate('Create Post');
 }

  return (
    <SafeAreaView style={styles.postContainer}>
      {/* <View style={styles.topContainer}>
        <LocationComponent/>
      </View>
      <View style={styles.middleContainer}>
        <FetchScreen />
      </View> */}
      {/* <View style={{flex: 1, justifyContent: 'center', padding: 10, backgroundColor: 'red', height: 20}}>
        { <LocationComponent/> }
      </View> */}
      <View style={{flex: 1, marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{padding: 10}}>
          <LocationComponent />
        </View>
        {/* <FetchScreen /> */}
      </View>
      <TouchableOpacity onPress={postButton} style={styles.postButton}>
       <Text style={styles.postText}>Create a Post</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
 