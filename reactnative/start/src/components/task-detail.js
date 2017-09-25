import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Styles from '../utils/styles';
import { Task } from '../models/task';

export class TaskDetail extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    //props.task = new Task();
  }

  render() {
    return (
      <View>
        <Text>
          {this.props.task.title}
        </Text>
      </View>
    )
  }
}
