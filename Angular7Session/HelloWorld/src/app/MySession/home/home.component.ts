import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import { MysamplepostService } from '../mysamplepost.service';


export interface Hero {
  id: number;
  name: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users;
  isShow;
  userName: string;


  /**
   * Unit testing stuff here
   * 
   */

  totalVotes: number = 21;
 


  //Unit testing stuff ends here

  constructor(private service: MysamplepostService) { };

  ngOnInit() {
    console.log(this.isShow);
  }


  txtChange(event) {

  }

  twChangeEventOccured(value) {

  }

  getUsers() {
    this.service.getAllPosts().subscribe(res => this.users = res);

  }


   /**
   * Unit testing stuff here
   * 
   */

   upVote(){
     this.totalVotes++;
   }

   // unit testing stuff ends here

}
