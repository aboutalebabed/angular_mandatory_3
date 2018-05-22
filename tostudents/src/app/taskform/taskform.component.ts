import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Task, StatusType } from '../constants';

@Component({
  selector: 'task-form',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent {
  showForm = false;
  @Output() taskAdded = new EventEmitter<boolean>();

  constructor() {}

  obj = {
    title: '',
    description: '',
    id: null,
    status: StatusType.NotStarted,
  };

  saveTask() {
    console.error(this.obj, "No");

    this.showForm = false;
    this.taskAdded.emit(this.obj);
  }

}
