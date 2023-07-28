import { View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import LocationComponent from "../../components/LocationComponent";
import styles from "../../assets/styles";
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import FetchPosts from "../../components/FetchPosts";

export default function PostScreen() {
 
 const navigation = useNavigation();

 function postButton() {
  navigation.navigate('Create Post');
 }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '#fff' }}>
      <View style={{flex: 1, top: 10, alignItems: 'center', justifyContent: 'flex-start'}}><LocationComponent/></View>
      {/* <FetchPosts /> */}
      <TouchableOpacity onPress={postButton} style={styles.postButton}>
       <Text style={styles.postText}>Create a Post</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
 