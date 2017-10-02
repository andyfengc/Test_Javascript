// import library
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import firebase from 'firebase';
import Header from './src/components/header';
import Footer from './src/components/footer';
import Nav from './src/components/nav';

import { Nav2 } from './src/components/nav2';
import { TaskList } from './src/components/task-list';
import { AlbumList } from './src/components/album-list';
import { FirebaseDemo } from './src/components/firebase-demo';
import { NewTask } from './src/components/new-task';

// create a component
const App = () => {
  return (
    <View>
      <Header title={'I am title'}/>
      <NewTask></NewTask>

    </View>
  );
};

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAa0fNiD75oUeC0OJuIjQaAKMSIUC1Pamg",
  authDomain: "development-2b97f.firebaseapp.com",
  databaseURL: "https://development-2b97f.firebaseio.com",
  projectId: "development-2b97f",
  storageBucket: "development-2b97f.appspot.com",
  messagingSenderId: "444642293096"
});


// render it to the device
AppRegistry.registerComponent('start', () => App);
