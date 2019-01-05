import { DataService } from './../common/data-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService extends DataService{

  constructor(http : HttpClient) {
    super(environment.baseApiUrl + environment.getAllComments, http);
   }
}
