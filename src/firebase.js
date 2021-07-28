import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDZdtQbxtEwtwRbjZ_Qr8QsHa_VkNsBxhc",
    authDomain: "messages-chat-app-156ea.firebaseapp.com",
    projectId: "messages-chat-app-156ea",
    storageBucket: "messages-chat-app-156ea.appspot.com",
    messagingSenderId: "103300155973",
    appId: "1:103300155973:web:f4f123dcc784700e73312c",
    measurementId: "G-C29WK8QLGQ"
};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp({ ...firebaseConfig }).auth();