import firebase from 'firebase';
import { Task } from '../models/task';

export class TaskService {
  tasks;

  constructor() {
    this.tasks = firebase.database().ref('tasks');
  }

  getAllTasks() : Task[] {
    console.log('load tasks...');
    // this.tasks.on('value', function(data){
    //   return data.val();
    // });
    // this.tasks.once('value').then(function(data){
    //   console.log(data.val());
    // })
  }

  addTask(task : Task, authorKey: string) {
    task.authorKey = authorKey;
    const savedTask = this.tasks.push(task);
  }

  deleteTask(taskKey: string) {
    const deletedTask = this.tasks.remove(taskKey);
  }
}
