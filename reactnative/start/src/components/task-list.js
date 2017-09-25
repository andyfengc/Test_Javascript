import React, {Component} from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import Styles from '../utils/styles';
import { TaskDetail } from './task-detail';

export class TaskList extends Component {
  state = { tasks: [] };

  componentWillMount() {
    axios.get('http://quickhelperserver-andyfengc.rhcloud.com/quickhelper/api/tasks')
    .then(response => {
      this.setState({ tasks: response.data });
    });
  }

  renderTasks() {
    return this.state.tasks.map(task => <TaskDetail key={task.id} task={task} />)
  }

  render() {
    return (
      <View>
        <Text style={Styles.bodyText}>
        </Text>
        {this.renderTasks()}
      </View>
    )
  }
}
