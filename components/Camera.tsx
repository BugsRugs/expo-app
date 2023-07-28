import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useRef } from 'react';
// import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { SaveFormat, manipulateAsync } from 'expo-image-manipulator';

import { useNavigation } from '@react-navigation/native';
import styles from '../assets/styles';
import { storePostImage } from '../utils/hooks/locationUtils';

const CameraFunction = ({ onSave }) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const [mediaStatus, requestMediaPermission] = ImagePicker.useMediaLibraryPermissions();

  const handleImageChange = () => {
    onSave([...selectedImages]);
  }

  useEffect(() => {
    // This will run whenever selectedImages changes
    handleImageChange();
  }, [selectedImages]);
  
  const pickImage = async () => {
      try{
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsMultipleSelection: true,
          selectionLimit: 6,
          aspect: [4, 3],
          quality: 0.0,
        });

      if (!result.canceled) {
        const temp = [...selectedImages];
        for (const asset of result.assets) {
          temp.push(asset.uri);
        }
        setSelectedImages(temp);
        //handleImageChange(); //using the useEffect instead 
        //holy crap this image update took forever for some reason the states are super funky and weird and i needed to update the state this way for some reason!!??
      }
      } catch (error) {
          console.error('Error picking image:', error);
      }
  };

  const pickImageCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 0.0,
    });

    if (!result.canceled) {
      const temp = [...selectedImages]; 
      //SUPER AGGRO need to use states like ^this, otherwise it refernces another variable and causes isses//
        for (const asset of result.assets) {
          temp.push(asset.uri);
        }
        setSelectedImages(temp);
        //handleImageChange();
    }
  }
  //Suoper aggro this took way too long, in order to make sure the entire component re-render i needed to use the syntax above precisley otherwise the changhes wopuld only show effect if hot reloaded. 

  //a little aggro, instead of calling handleImageChange() i used the useeffect with selectedImages as a dependencuy to call handleImageChange anhy time selectedImages changes. 

  const handleDelete = (index) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
    handleImageChange();
  };

  if (status === null) {
    return <View><Text>Need camera permissions to take a picture</Text></View>;
  }



  return (
    <View style={{ flex: 1 }}>
      {/* <Camera style={{ flex: 1 }} type={cameraType} ref={cameraRef}>
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ flex: 0.1, alignSelf: 'flex-end', alignItems: 'center' }}
            onPress={handleCameraTypeToggle}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera> */}
      <View style={{ flexDirection: 'row',  justifyContent: 'center'}}>
        <TouchableOpacity onPress={pickImage} style={ styles.postButton}>
          <Text style={ styles.postText }>Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={pickImageCamera} style={ styles.postButton }>
          <Text style={ styles.postText }>Camera</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={handleCapture}>
          <Text style={{ fontSize: 20, marginVertical: 10, color: 'red' }}>Capture</Text>
        </TouchableOpacity> */}
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {selectedImages.map((image, index) => (
          <View key={index}>
            <Image source={{ uri: image }} style={{ width: 100, height: 100, margin: 5 }}/> 
            <TouchableOpacity onPress={() => handleDelete(index)}>
              <Text style={{ color: 'red', textAlign: 'center' }}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CameraFunction;


// import { Camera, CameraType } from 'expo-camera';
// import { useState } from 'react';
// import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
// import React, { useEffect, useRef } from 'react';
// // import * as Permissions from 'expo-permissions';
// import * as ImagePicker from 'expo-image-picker';

// import { useNavigation } from '@react-navigation/native';
// import styles from '../assets/styles';
// //const navigation = useNavigation();

// const CameraFunction = ({ navigation }) => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [mediaPermission, setMediaPermission] = useState(null);

//   // const [cameraPermission, setCameraPermission] = useState(null);
//   // const [galleryPermission, setGalleryPermission] = useState(null);
//   const [selectedImages, setSelectedImages] = useState([]);

//   const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
//   // const [capturedImages, setCapturedImages] = useState([]);
//   const cameraRef = useRef(null);

//   const [status, requestPermission] = ImagePicker.useCameraPermissions();
//   const [mediaStatus, requestMediaPermission] = ImagePicker.useMediaLibraryPermissions();


//   // useEffect(() => {
//   //   (async () => {
//   //     const { status } = await ImagePicker.useCameraPermissions();
//   //     setHasPermission(status === 'granted');

//   //     const { mediaStatus } = await ImagePicker.useMediaLibraryPermissions();
//   //     setMediaPermission(mediaStatus === 'granted');
//   //     console.log('status is', status);
//   //   })();
//   // }, []);
  



//   const pickImage = async () => {
//       let result = await ImagePicker.launchImageLibraryAsync({ 
//         mediaTypes: ImagePicker.MediaTypeOptions.All,
//         //allowsEditing: true,
//         allowsMultipleSelection: true,
//         selectionLimit: 1, //allowing multiple pictures to be selected via gallery is buggy??
//         aspect: [4, 3],
//         quality: 1,
//       });

//       console.log('result is ', result);


//       if (!result.canceled) {
//         //setSelectedImages(...selectedImages, result.uri);
//         //setCapturedImages(...capturedImages, result.uri);
//         //const selectedImages = [];
//         // result.assets.forEach(async (asset) => {
//         //   if (selectedImages.length < 6) {
//         //     const newImages = [...selectedImages, asset.uri];
//         //     setSelectedImages(newImages);
//         //     //selectedImages.push(asset.uri);
//         //     // console.log('for loop', asset.uri);
//         //     // await setSelectedImages([...selectedImages, asset.uri]);
//         //     // setSelectedImages([]);
//         //   }
          
//         //   //setCapturedImages(...capturedImages, asset.uri);
//         // });
//         for (const asset of result.assets) {
//           console.log('inside the loop the uris are', asset.uri);
//           const uri = asset.uri;
//           //selectedImages.push(uri);
//           setSelectedImages(selectedImages => [...selectedImages, uri]);  
//           //setSelectedImages(selectedImages);
//           // ...
//         }
//         console.log('selected images from gal', selectedImages); 
//       }
//   };

//   // useEffect(() => {
//   //   (async () => {
//   //     const { status } = await Camera.requestPermissionsAsync(); 
//   //     setHasPermission(status === 'granted');

//   //     const { status: mediaStatus } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
//   //     setMediaLibraryPermission(mediaStatus === 'granted');
//   //   })();
//   // }, []);

//   const handleCameraTypeToggle = () => {
//     setCameraType(
//       cameraType === Camera.Constants.Type.back 
//         ? Camera.Constants.Type.front
//         : Camera.Constants.Type.back
//     );
//   };

//   // const handleCapture = async () => {
//   //   if (capturedImages.length < 6 && cameraRef.current) {
//   //     const photo = await cameraRef.current.takePictureAsync();
//   //     setCapturedImages([...capturedImages, photo.uri]);
      
//   //     selectedImages.push(photo.uri);
//   //     console.log('using selected in cap', selectedImages);

//   //     console.log('when capturing images it looks like ', [...capturedImages, photo.uri]);
//   //   }
//   // };


//   const handleCapture = async () => {
//     if (selectedImages.length < 6 && cameraRef.current) {
//       const photo = await cameraRef.current.takePictureAsync();
//       setSelectedImages(selectedImages => [...selectedImages, photo.uri]);
//     }
//   };

//   const pickImageCamera = async () => {
//     let result = await ImagePicker.launchCameraAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });
//     console.log(result);
//   }

  



//   //Suoper aggro this took way too long, in order to make sure the entire component re-render i needed to use the syntax above precisley otherwise the changhes wopuld only show effect if hot reloaded. 

//   const handleDelete = (index) => {
//     const updatedImages = selectedImages.filter((_, i) => i !== index);
//     setSelectedImages(updatedImages);
//   };

//   const handleAccept = () => {
//     navigation.navigate('Create Post', { capturedImages: selectedImages });
//   };

//   if (status === null) {
//     return <View><Text>Need camera permissions to take a picture</Text></View>;
//   }

//   // if (hasPermission === false) {
//   //   return <Text>No access to camera</Text>; 
//   // }

//   return (
//     <View style={{ flex: 1 }}>
//       <Camera style={{ flex: 1 }} type={cameraType} ref={cameraRef}>
//         <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
//           <TouchableOpacity
//             style={{ flex: 0.1, alignSelf: 'flex-end', alignItems: 'center' }}
//             onPress={handleCameraTypeToggle}
//           >
//             <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//       <View style={{ flexDirection: 'row',  justifyContent: 'center'}}>
//         <TouchableOpacity onPress={pickImage}>
//           <Text style={{ fontSize: 20, marginVertical: 10, marginLeft: 0, color: 'blue' }}>Gallery  </Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={pickImageCamera}>
//           <Text style={{ fontSize: 20, marginVertical: 10, marginLeft: 0, color: 'blue' }}>Camera  </Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={handleCapture}>
//           <Text style={{ fontSize: 20, marginVertical: 10, color: 'red' }}>Capture</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//         {selectedImages.map((image, index) => (
//           <View key={index}>
//             <Image source={{ uri: image }} style={{ width: 100, height: 100, margin: 5 }} />
//             <TouchableOpacity onPress={() => handleDelete(index)}>
//               <Text style={{ color: 'red', textAlign: 'center' }}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         ))}
//       </View>
//       {selectedImages.length > 0 && (
//         <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//           <TouchableOpacity onPress={handleAccept}>
//             <Text style={{ fontSize: 20, marginVertical: 10, color: 'green' }}>Accept</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// export default CameraFunction;
