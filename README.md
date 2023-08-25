# expo-app
<img width="330" alt="Screenshot 2023-08-25 at 10 00 22 AM" src="https://github.com/BugsRugs/expo-app/assets/43876237/7266d98b-cd9e-4738-9c4a-ccf459585e24">
<img width="330" alt="Screenshot 2023-08-25 at 9 59 16 AM" src="https://github.com/BugsRugs/expo-app/assets/43876237/2b8f5588-15cd-4ed6-b59d-db9d847eeffb">
<img width="329" alt="Screenshot 2023-08-25 at 9 58 19 AM" src="https://github.com/BugsRugs/expo-app/assets/43876237/c78b1e3a-dbef-4778-9983-4dfc6a84d588">
<img width="324" alt="Screenshot 2023-08-25 at 10 00 38 AM" src="https://github.com/BugsRugs/expo-app/assets/43876237/b589990a-1710-461b-8662-9db6f58f3cdf">
<img width="323" alt="Screenshot 2023-08-25 at 10 05 39 AM" src="https://github.com/BugsRugs/expo-app/assets/43876237/7130acd7-aa38-44f0-a21f-063679e70595">
<img width="327" alt="Screenshot 2023-08-25 at 10 01 05 AM" src="https://github.com/BugsRugs/expo-app/assets/43876237/af114750-a944-48b0-a432-9d3c2b54d2db">
<img width="333" alt="Screenshot 2023-08-25 at 10 01 47 AM" src="https://github.com/BugsRugs/expo-app/assets/43876237/0682a2ae-74fb-4cf9-80b6-66fa190fb5eb">
<img width="326" alt="Screenshot 2023-08-25 at 10 01 17 AM" src="https://github.com/BugsRugs/expo-app/assets/43876237/ad170842-88c4-4284-914e-bd62db3b1e87">



Seafood Marketplace App
Table of Contents

    Description
    Features
    Usage
    Technologies Used
    Firebase Setup
    License

Description

The Seafood Marketplace App is a mobile application built using React Native and Expo. It serves as a direct-to-consumer platform for buying and selling seafood products. The app connects seafood vendors with customers, providing a seamless and efficient way to purchase fresh and sustainable seafood.
Features

    Browse a wide variety of fresh seafood products.
    Search for specific seafood items.
    View detailed product information, including price, quantity, and origin.
    Add items to the cart and place orders securely.
    Set up user profiles with personal location and fishing details.
    Secure authentication and user authorization.

Usage

To use the Seafood Marketplace App, you need to create an account or log in using your existing credentials. As a customer, you can browse through the available seafood products, add them to your cart, and complete the purchase with a secure payment method. Vendors can access the dashboard to manage their inventory, update product details, and track orders.
Technologies Used

    React Native
    Expo
    Firebase Authentication
    Firebase Firestore (Database)
    Firebase Cloud Functions
    Firebase Storage
    React Navigation

Firebase Setup

To set up Firebase for this app, follow these steps:

    Create a Firebase project at firebase.google.com.
    Enable Firebase Authentication and Firestore in the Firebase console.
    Replace the Firebase configuration in firebaseConfig.js with your own configuration obtained from the Firebase console.

javascript

// firebaseConfig.js

export default {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

    (Optional) If you plan to use Firebase Cloud Functions, deploy the functions to your Firebase project using the Firebase CLI.

bash

cd functions
firebase deploy --only functions

## License

All Rights Reserved. No part of this project may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior written permission of the creator.
