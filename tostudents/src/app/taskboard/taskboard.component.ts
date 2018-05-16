import { Component } from '@angular/core';

import { StatusType } from '../constants';


@Component({
  selector: 'task-board',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.css']
})
export class TaskboardComponent {

showForm = false;
private statusList = ['NotStarted', 'InProgress', 'Completed'
];

  constructor() { }

  newTask() {
    this.showForm = !this.showForm;
    console.log(this.showForm, "test");
  }

  close() {
    this.showForm = false;
    console.log(this.showForm, "Close");
  }

  nogOnInit() {
      console.error('status', StatusType['NotStarted']);
  }

}
