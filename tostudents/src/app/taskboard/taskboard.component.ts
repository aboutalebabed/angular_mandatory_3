import { Component } from '@angular/core';

import { TaskService } from '../task.service';
import { Task, StatusType } from '../constants';


@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {
  showForm = false;
  taskList: Task[] = [];
  statusTypes: StatusType[] = [
    StatusType.NotStarted, StatusType.InProgress, StatusType.Completed
  ];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks()
    .subscribe((tasks) => {
      this.taskList = tasks;
    });
  }

  filterTasks(statusType: StatusType, taskList: Task[]) {
    return this.taskService.filterTasks(statusType, taskList);
  }

/*  addMockTask() {
    return this.taskService.addTask('Mock task', 'mock description');
  } */

  newTask() {
  this.showForm = !this.showForm;
  console.log(this.showForm, "test");
}

close(obj) {
  this.showForm = false;
  console.log(obj)
  this.taskService.addTask
  console.log(this.showForm, "Close");
}
}
