import { Component, Input } from '@angular/core';

import { Task, StatusType } from '../constants'



@Component({
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

  @Input() statusType: StatusType; // För att kunna skicka till taskboard.component.html

  tasks: Task[];

  constructor() {}

  ngOnInit() {
    console.error('on start:', this.statusType);
/*
    this.taskService.getTasks(this.statusType)
    .subscribe((tasks) => {
      this.tasks = tasks;
    });
*/
    this.tasks = [
      {
        id: 1,
        status: StatusType.InProgress,
        title: 'Test title',
        description: 'desc',
      }
    ];
  }

  handleStatusChanged(ev) {

  }

}
