import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { trigger, transition, state, animate, style, useAnimation } from '@angular/animations';
import { myFade, removeSlide, removeSlideWithEase, removeSlideWithEaseAndKeyFrame, fadeInAnimation, fadeOutAnimation } from 'src/app/animations-custom';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  // animations:[
  //   myFade,
  //   removeSlide,removeSlideWithEase,removeSlideWithEaseAndKeyFrame
  // ]
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

 /**
  * Animation things start here
  */

 animationStarted(e){
   console.log('animation started');
 }
 
 animationDone(e){
   console.log('animation done');
 }

//Animation things end here 



}
