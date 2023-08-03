# expo-app

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
    Set up user profiles with shipping and payment details.
    Real-time updates on order status and shipment tracking.
    Vendor dashboard for managing products and inventory.
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
