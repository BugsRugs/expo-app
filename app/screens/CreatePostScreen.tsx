import React, { useEffect, useState } from 'react';
import { Image, View, Text, StyleSheet, TextInput, TouchableOpacity, Switch } from 'react-native';
import CameraFunction from '../../components/Camera';
import styles from '../../assets/styles';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'expo-checkbox';
import { storeLocation, retrieveLocation, retrievePostImage } from '../../utils/hooks/locationUtils';
import { ScrollView } from 'react-native-gesture-handler';
import SavePost from '../../components/SavePost';
import TimePicker from '../../components/TimePicker';


const CreatePostScreen = ({ route }) => { 
  //also add distance, time posted, share button, order button,
  //things user must input location of post, price per lb
  const [capturedImages, setCapturedImages] = useState([]);  
  const navigation = useNavigation();
  const [typeOfFish, setTypeOfFish] = useState('');
  const [lbs, setLbs] = useState('');
  const [delivery, setDelivery] = useState(false);
  const [pickup, setPickup] = useState(false);
  const [postLocation, setPostLocation] = useState('');
  const [pricePerLbs, setPricePerLbs] = useState('');
  const [description, setDescription] = useState('');
  const [isFilet, setIsFilet] = useState(false);
  const [availability, setAvailability] = useState(['', '', '']);


  // const handleTimePickerSave = (timeFrames) => {
  //   // Save the time frames to your state or any other necessary logic
  //   setTimeFrames(timeFrames);
  //   console.log('Time Frames:', timeFrames);
  // };
  const handleTimePickerSave = (availabilityData) => {
    setAvailability(availabilityData);
  };

  const handleCameraFunctionSave = (imageData) => {
    setCapturedImages(imageData);
    //console.log('inside create post the images are', capturedImages);
  }
  
//   useEffect(() => {
//   console.log('inside create post the images are', capturedImages);
// }, [capturedImages]); 

    // async function fetchPostPictures() {
    //   try {
    //     const retrievedPostPicture = await retrievePostImage();
    //     setCapturedImages(retrievedPostPicture);
    //     console.log('the image object being retrieved is', retrievedPostPicture);
    //   } catch (error) {
    //     console.log('Error retrieving location:', error);
    //   }
    // }



  const filetToggle = () => {
    setIsFilet(!isFilet);
  };

  useEffect(() => {
    fetchLocation();
    //fetchPostPictures();
  }, []);

  const fetchLocation = async () => {
    try {
      // const { latitude, longitude } = await getLocation();
      // const currentCity = await getCityFromCoordinates(latitude, longitude);
      // setCity(currentCity);
      const retrievedLocation = await retrieveLocation();
      setPostLocation(retrievedLocation[0].city);
      //console.log('the location object being retrieved is', retrievedLocation);
    } catch (error) {
      console.log('Error retrieving location:', error);
    }
  };

  // function cameraButton() {
  //   navigation.navigate('CameraFunction');
  // }

  // useEffect(() => {
  //   if (route.params && route.params.capturedImages) {
  //     setCapturedImages(route.params.capturedImages);
  //   }
  // }, [route.params]);

  // function cameraButton() {
  //   navigation.navigate('CameraFunction');
  // }

  return (
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center'}}>
        <TextInput
                  value={typeOfFish}
                  onChangeText={setTypeOfFish}
                  placeholder="Type of Fish"
                  style={styles.textInput}
        />
        <TextInput
                  value={lbs}
                  onChangeText={setLbs}
                  placeholder="Pounds of Fish"
                  style={styles.textInput}
        />
        <TextInput
                  value={pricePerLbs}
                  onChangeText={setPricePerLbs}
                  placeholder="Price per pound"
                  style={styles.textInput}
        />
        <TextInput
                  value={postLocation}
                  onChangeText={setPostLocation}
                  placeholder="Where post is located"
                  style={styles.textInput}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.postText}>{isFilet ? 'Filet' : 'Whole'}</Text>
          <Switch value={isFilet} onValueChange={filetToggle} />

          <Text style={styles.postText}>Delivery</Text>
          <Checkbox style={styles.checkbox} value={delivery} onValueChange={setDelivery} />
          <Text style={styles.postText}>Pickup</Text>
          <Checkbox style={styles.checkbox} value={pickup} onValueChange={setPickup} />
        </View>
        
        <TextInput
                  value={description}
                  onChangeText={setDescription}
                  placeholder="(Optional) description"
                  style={styles.textInput}
        />
        {/* <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', margin: 10,}}>
          {capturedImages.length > 0 ? (
            capturedImages.map((image, index) => (
              <Image key={index} source={{ uri: image }} style={{ margin: 10, width: 80, height: 80 }} />
            ))
          ) : (
            <Text></Text>
          )}
        </View> */}

        {/* <TouchableOpacity onPress={cameraButton} style={{  backgroundColor: '#96E3AC', padding: 10, borderRadius: 5, margin: 10, paddingVertical: 10}}>  
        <Text style={styles.postText}>Add Pictures</Text>
        </TouchableOpacity> */}

        <CameraFunction onSave={handleCameraFunctionSave} />
        
        <View style={styles.basicContainer}>
          <TimePicker onSave={handleTimePickerSave}/>
        </View>

        <SavePost
          capturedImages={capturedImages}
          typeOfFish={typeOfFish}
          lbs={lbs}
          pricePerLbs={pricePerLbs}
          postLocation={postLocation}
          description={description}
          delivery={delivery}
          pickup={pickup}
          availability={availability}
          isFilet={isFilet}
        />
      </View>
    </ScrollView>
  );
};


export default CreatePostScreen; //justifyContent alignItems

