// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

//import firebase from "firebase";
//import "firebase/auth";
//import "firebase/firestore";
//import { rootReducer } from "reducers";
//import { createStore } from "redux";
//import { createFirestoreInstance } from "redux-firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP08FIxWIJkQIr0yRYeqRUSWgpycSWyJM",
  authDomain: "notus-nextjs-wsa-tokengate.firebaseapp.com",
  projectId: "notus-nextjs-wsa-tokengate",
  storageBucket: "notus-nextjs-wsa-tokengate.appspot.com",
  messagingSenderId: "422959475575",
  appId: "1:422959475575:web:3a523b36c70a43d6f04f72",
  measurementId: "G-BEM4JL37BT",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();
/*
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const initialState = {};
const store = createStore(rootReducer, initialState);


const rrfProps = {
  // firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};
*/

export { auth, db };
