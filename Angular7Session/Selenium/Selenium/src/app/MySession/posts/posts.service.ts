import { HttpClient } from '@angular/common/http';

import { Injectable, OnInit } from '@angular/core';
import { DataService } from '../common/data-service';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PostsService extends DataService{
    
  constructor(http : HttpClient) {
     super(environment.baseApiUrl +  environment.getAllPosts, http);
  }

  
}
