import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  enteredTask;

  constructor() { }

  ngOnInit() {
  }

  tasks = [
    { id: "1", task: "Task 1", isCompleted: true },
    { id: "2", task: "Task 2", isCompleted: false },
    { id: "3", task: "Task 3", isCompleted: false }
  ];

  tasksCompleted = [];

  addTask() {
    if (this.enteredTask) {
      this.tasks.unshift({
        id: uuid(), task: this.enteredTask, isCompleted: false
      });
    }
  }

  deleteTask($event, task) {

    $event.stopPropagation();
    let idx = this.tasks.indexOf(task);

    if (idx >= 0) {
      this.tasks.splice(idx, 1);
    }

  }



}
