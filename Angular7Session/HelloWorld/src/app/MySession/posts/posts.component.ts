import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotFoundError } from '../common/errors/not-found-error';
import { AppError } from './../common/errors/app-error';
import { PostModel } from './Model/post-model';
import { PostsService } from './posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
  
})
export class PostsComponent implements OnInit {

   
  allUsers;
  allPosts: Array<PostModel> = [];
  postObject: PostModel;

  constructor(private service: PostsService, private route : Router) { }

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

  navigateToPostDetails(){
    this.route.navigate(['/home']);
  }


}
