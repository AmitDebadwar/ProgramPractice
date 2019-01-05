import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reusable-like',
  templateUrl: './reusable-like.component.html',
  styleUrls: ['./reusable-like.component.css'] 
})
export class ReusableLikeComponent implements OnInit {
  @Input('myClassName') myClassNameNew;
  @Input ('count') count : number;
  @Output ('likeCmpChangeEvent') likeCmpChangeEvent = new EventEmitter();
   
 constructor() { }

  ngOnInit() {
 
     
     
  }

  upvote(){
    this.count++;
    this.likeCmpChangeEvent.emit({});
  }

}
