import React, {Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

export class FirebaseDemo extends Component {
  state = { title: '' };

  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
      apiKey: "AIzaSyAa0fNiD75oUeC0OJuIjQaAKMSIUC1Pamg",
      authDomain: "development-2b97f.firebaseapp.com",
      databaseURL: "https://development-2b97f.firebaseio.com",
      projectId: "development-2b97f",
      storageBucket: "development-2b97f.appspot.com",
      messagingSenderId: "444642293096"
    });

    let root = firebase.database().ref();
    let self = this;
    root.on('value', function(snapshot) {
      self.setState({title: snapshot.val()});
    });
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.title}
        </Text>
      </View>
    )
  }
}
