import { AppError } from './../common/errors/app-error';
import { Component, OnInit } from '@angular/core';
import { PostModel } from './Model/post-model';

import { PostsService } from './posts.service';
import { CommentsModel } from './Model/comments-model';
import { NotFoundError } from '../common/errors/not-found-error';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
  
})
export class PostsComponent implements OnInit {

   

  allPosts: Array<PostModel>;
  postObject: PostModel;

  constructor(private service: PostsService) { }

  ngOnInit() {
    this.getAllPosts();
  }


  private getAllPosts() {

    this.service.getAll()
      .subscribe((response: Array<PostModel>) => {
        this.allPosts = response;

      },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert("not found");
          }
          else {
            throw error;
          }
        });

  }

 
  createPost(){
    let post =  {
      "userId": 1,
      "id": 103,
      "title": "sai",
      "body": "sai"
    };
    this.service.create({}).subscribe((res: PostModel)=>{
       this.allPosts.unshift(res);
    });
  }
}
