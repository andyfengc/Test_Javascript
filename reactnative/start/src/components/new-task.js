import React, { Component } from 'react';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import { View, Text, Button } from 'react-native';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

export class NewTask extends Component {
  static taskService;
   constructor(props, context) {
    super(props, context);
    this.state = {
      tasks: []
    };
    NewTask.taskService = new TaskService();
  }

  componentWillMount() {
    const tasks = firebase.database().ref('tasks');
    this.bindAsArray(tasks, 'tasks');
    console.log(tasks);
  }

  render() {
    return (
      <View>
        <Text>
          tasks...
        </Text>

        <Button title='add task' onPress={this.addTask}>
        </Button>

        {this.state.tasks.map( (task, index) => {
                        return <Text key={index}>{task.title}</Text>;
                      })}
      </View>
    )
  }

  loadTasks() {
    this.state.tasks.map(task => {
      console.log(task);
      return <Text key={task.key}>{task.title}</Text>
    })
    //NewTask.taskService.getAllTasks();
    // this.setState({
    //   tasks: NewTask.taskService.getAllTasks()
    // });
    // return this.state.tasks.map(task => {
    //   <Text>task.title</Text>
    // })
  }

  addTask() {
    const task = new Task();
    task.address = '123 kennedy st';
    task.price = 20;
    task.title = '找接送2';
    NewTask.taskService.addTask(task, '1');
    console.log('added');
  }
}
reactMixin(NewTask.prototype, ReactFireMixin);
