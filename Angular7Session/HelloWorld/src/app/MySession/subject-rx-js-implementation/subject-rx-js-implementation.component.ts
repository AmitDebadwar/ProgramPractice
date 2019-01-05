import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject-rx-js-implementation',
  templateUrl: './subject-rx-js-implementation.component.html',
  styleUrls: ['./subject-rx-js-implementation.component.css']
})
export class SubjectRxJsImplementationComponent implements OnInit {

  subject  = new Subject();
  value : any;
  constructor() { }

  ngOnInit() {
  }

  push(){
    this.subject.next(Math.floor(Math.random() * 116) + 1  )
  }

  get params(){
    return this.subject.asObservable();
  }

  mySubscribe(){
    this.params.subscribe(res => this.value = res);
  }

}
