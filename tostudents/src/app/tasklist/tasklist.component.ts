import { Component, Input } from '@angular/core';

import { Task, StatusType } from '../constants'



@Component({
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

  @Input() statusType: StatusType; // För att kunna skicka till taskboard.component.html
  @Input() tasks: Task[];

  constructor() {}

  ngOnInit() {
    console.error('on start:', this.statusType);
  }

  handleStatusChanged(ev) {

  }

}
