import { BehaviorSubject } from 'rxjs';
import { Observable } from "rxjs/Observable";
import { Task, StatusType } from './constants';

export class TaskService {
  taskList: Task[];
  observer;

  constructor() {
    const mockData = [
      {
        id: 1,
        status: StatusType.NotStarted,
        title: 'Mocked not started',
        description: 'Mocked description',
      },
      {
        id: 2,
        status: StatusType.Completed,
        title: 'Mocked not started',
        description: 'Mocked description',
      },
      {
        id: 3,
        status: StatusType.InProgress,
        title: 'Mocked not started',
        description: 'Mocked description',
      }
    ];

    //FIXME mocked data.
    this.taskList = mockData;
  }


  // Takes arary of tasks and statusType, returns filteredArray
  filterTasks(statusType: StatusType, taskList: Task[] = []): Task[] {
    return taskList.filter((task) => {
      return task.status === statusType;
    });
  }
  getTasks(): Observable<Task[]> {
    // return an observable of a task array, filtered by the passed in status...
    return new Observable((observer) => {
      this.observer = observer;
      return this.observer.next(this.taskList);
    });
  }

  updateTask(id: number, status: StatusType) {
    // complete the code to update a task's status...
  }

  addTask(title: string, description: string) {
    // complete the code to add a task...
    this.taskList.push({
      id: this.taskList.length,
      title: title,
      description: description,
      status: StatusType.NotStarted,
    });

    return this.observer.next(this.taskList);
  }
}
