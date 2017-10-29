import React, {Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

export class FirebaseDemo extends Component {
  //state = { title: '', tasks: [] };

  constructor(props, context) {
    super(props, context)
    this.state = {
      title: ''
      , tasks: []
    };
  }

  componentWillMount() {
    // load root
    let root = firebase.database().ref();
    const self = this;

    // root.on('value', function(snapshot) {
    //   //self.setState({title: snapshot.val()});
    //   console.log(snapshot.val());
    // });

    // load course
    let courses = firebase.database().ref('courses');
    courses.on('value', function(snapshot) {
      //console.log(snapshot.val());
    })
    const course = courses.push({
      'name': 'designer',
      'description': 'teach how to be a designer',
      'url': 'http://www.desinger.com'
    })
    // load lesson
    let lessons = firebase.database().ref('lessons');
    lessons.on('value', function(snapshot){
      //console.log(snapshot.val());
    })
    const lesson = lessons.push({
      'name': 'java programming'
    })

    // load course-lesson
    // const coursesLessons = firebase.database().ref('coursesLessons');
    // const courseLesson = coursesLessons.child(course.key);
    // const courseLessonValue = courseLesson.child(lesson.key);
    // courseLessonValue.set(true);
    // console.log(courseLesson);
    // console.log(courseLesson.key);

    //
    // console.log('load taskservice');
    // const taskService = new TaskService();
    // const task = new Task();
    // task.title = '找月嫂';
    // task.content = 'about 2000 sq';
    // task.address = 'downtown';
    // taskService.addTask(task, '123');

    const tasks = firebase.database().ref('task');
    this.bindAsArray(tasks, 'tasks');
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.title}
          {this.state.tasks.map(task => {
            return <Text key={task.key}>{task['.key']} - {task.title}</Text>;
          })}

        </Text>
      </View>
    )
  }
}

reactMixin(FirebaseDemo.prototype, ReactFireMixin);
