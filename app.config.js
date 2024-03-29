import 'dotenv/config';

export default {
  expo: {
    name: 'expo-app',
    slug: 'expo-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    "plugins": [
      [
        // "expo-camera",
        // {
        //   "cameraPermission": "Allow Reeler to access your camera."
        // },
        "expo-image-picker",
        {
          "photosPermission": "Allow $(Reeler) to access your photo gallery.",
          "cameraPermission": "Allow $(Reeler) to access your camera.",
        }
      ]
    ],
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: 'com.reeler.expoapp',
      icon: './assets/images/android-icon.png',
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: './assets/images/android-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      bundler: 'metro',
      favicon: './assets/images/favicon.png',
    },
    "extra": {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID
    },
  },
};
