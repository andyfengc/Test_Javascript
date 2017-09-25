// import library
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import Footer from './src/components/footer';
import Nav from './src/components/nav';
import { Nav2 } from './src/components/nav2';
import { TaskList } from './src/components/task-list';
import { AlbumList } from './src/components/album-list';
import { FirebaseDemo } from './src/components/firebase-demo';

// create a component
const App = () => {
  return (
    <View>
      <Header title={'I am title'}/>

      <FirebaseDemo></FirebaseDemo>


    </View>
  );
};

// render it to the device
AppRegistry.registerComponent('start', () => App);
