import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { trigger, transition, useAnimation, style, query, animate, animateChild, group, stagger } from '@angular/animations';
import { fadeInAnimation, fadeOutAnimation } from 'src/app/animations-custom';

@Component({
  selector: 'app-my-animations-implementations',
  templateUrl: './my-animations-implementations.component.html',
  styleUrls: ['./my-animations-implementations.component.css'],
  animations:[ 
    trigger('todosAnimations',[
      transition(":enter", [
        group([
          query("h1",[
            style({ transform: 'translateY(-20px)'}),
            animate(1000)
          ]),
          query('@toDoAnimation', [
           stagger("500ms", animateChild())
          ])
        ])
      ])
    ]),
    
    trigger('toDoAnimation', [
      transition(':enter', [
        useAnimation(fadeInAnimation, {
          params: {
            duration: '1000ms',
            easing : 'ease-out'
        }
        })
      ]),
      transition(':leave', [
        useAnimation(fadeOutAnimation, {
          params: {
            duration: '1000ms',
            easing : 'ease-in'
        }
        })
      ])
    ])
  ]
})
export class MyAnimationsImplementationsComponent implements OnInit {

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
