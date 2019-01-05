import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../common/data-service';




@Injectable({
  providedIn: 'root'
})
export class PostsService extends DataService{
    
  constructor(http : HttpClient) {
     super(environment.baseApiUrl +  environment.getAllPosts, http);
  }

  
}
