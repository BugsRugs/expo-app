
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import * as firebase from 'firebase/app';
import '@firebase/storage';
import { ScrollView } from 'react-native-gesture-handler';
import { app } from '../firebaseConfig';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { uid } from '../authentication/auth_state_listener';
import styles from '../assets/styles';
import Swiper from 'react-native-swiper';

const storage = getStorage();

const FetchScreen = () => {
  const [imageList, setImageList] = useState<{[key: string]: string[]}>({});
  const [postTextList, setPostTextList] = useState<{ [key: string]: Post | null }>({});

  interface Post {
    availability: string[];
    dateOfPost: string;
    delivery: boolean;
    description: string;
    isPostActive: boolean;
    lbs: string;
    pickup: boolean;
    postLocation: string;
    pricePerLbs: string;
    typeOfFish: string;
  }

  useEffect(() => {
  console.log("Size of postTextList:", Object.keys(postTextList).length);
  console.log("All objects in postTextList:", postTextList);
  }, [postTextList]);


  useEffect(() => {
    const fetchImages = async () => { 
      try {
        const storageRef = ref(storage, 'postPictures/');
        const result = await listAll(storageRef);
        const imageList: {[key: string]: string[]} = {};
        const postTextList: { [key: string]: string } = {};
        await Promise.all(
          result.prefixes.map(async (folderRef) => {
            const folderResult = await listAll(folderRef);
            await Promise.all(
              folderResult.items.map(async (imageRef) => {
                const url = await getDownloadURL(imageRef);
                const IDt = url.split('%')[1];
                const ID = IDt.substring(2);
                if (ID in imageList) {
                  imageList[ID].push(url);
                } else {
                  imageList[ID] = [url];
                }

                if (!(ID in postTextList)) {
                  const db = getFirestore(app);
                  const postTextDocRef = doc(db, 'postText', ID); 
                  getDoc(postTextDocRef).then((doc) => {
                    if (doc.exists()) {
                      const newPost = doc.data() as Post; 
                      setPostTextList((prevPostTextList) => ({
                        ...prevPostTextList,
                        [ID]: newPost,
                      }));
                    }
                  });
                }
              })
            );
          })
        );
        setImageList(imageList);
      } catch (error) {
        console.error('Error fetching images:', error); 
      }
    };
    fetchImages();
  }, []);

  const ImageCarousel = ({ urls }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
      <View style={{ width: '90%', }}>
        <Swiper
          style={{ height: 200 }}
          //autoplay
          showsPagination={true}
          //autoplayTimeout={3}
          loop
        >
          {urls.map((url, index) => (
            <View key={index}>
              <Image source={{ uri: url }} style={{ width: windowWidth, height: 200, }} resizeMode="cover" />
            </View>
          ))}
        </Swiper>
      </View>
    );
  };
//};

  return (
    <View>
      <ScrollView>
        {Object.entries(imageList).map(([ID, urls]) => (
          <View key={ID} style={styles.postContainer2}>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
              <Text style={ styles.postTextBold2 }> {postTextList[ID] && postTextList[ID]?.typeOfFish} </Text>
              <Text style={ styles.postText }> Pounds Available: {postTextList[ID] && postTextList[ID]?.lbs} </Text>
              <Text style={ styles.postText }> Price per Pound: {postTextList[ID] && postTextList[ID]?.pricePerLbs} </Text>
              <Text style={ styles.postText }> {postTextList[ID] && postTextList[ID]?.dateOfPost} </Text>
            </View>
            <ImageCarousel urls={urls} style={{ borderRadius: 10}}/>
            {/* <View style={styles.imageContainer}>
              {urls.map((url) => (
                <Image key={url} source={{ uri: url }} style={ styles.image } />
              ))}
            </View> */}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FetchScreen;


