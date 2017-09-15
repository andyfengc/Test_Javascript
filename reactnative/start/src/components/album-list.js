import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Styles from '../utils/styles';

export class AlbumList extends Component{
componentWillMount(){
  console.log('component will mount');
  // debugger;
}

  render(){
    return (
      <View>
        <Text style={Styles.bodyText}>
          album list
        </Text>
      </View>
    )
  }
}
