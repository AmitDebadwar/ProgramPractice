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
  userName : string;
  constructor(private service : MysamplepostService) { };

  ngOnInit() {
         console.log(this.isShow);     
  }


  txtChange(event){
       
  }


  getUsers(){
           this.service.getAllPosts().subscribe(res=> this.users = res);
    
     }


}
