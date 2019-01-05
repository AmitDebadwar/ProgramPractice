import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MysamplepostService {

  constructor(private http : HttpClient) { }

  getAllPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}


