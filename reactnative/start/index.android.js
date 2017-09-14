// import library
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';
import Footer from './src/components/footer';
import Nav from './src/components/nav';
import {Nav2} from './src/components/nav2';

// create a component
const App = () => {
  return (
    <Header />
  );
};

// render it to the device
AppRegistry.registerComponent('start', () => App);
