import { CommentsService } from './comments.service';
import { Component, OnInit, Input } from '@angular/core';
import { CommentsModel } from '../posts/Model/comments-model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input("postId") postId;
  @Input("config") config;
  

  allComments=[];
  newComment : string;
  isCreatedNewComment : boolean;


  constructor(private service : CommentsService) { }

  ngOnInit() {
  }
   
  getAllComments() {
    let getCommentsOfPostId="?postId=" + this.postId;

    this.service.getAllById(getCommentsOfPostId)
      .subscribe((response: Array<CommentsModel>) => {
         this.allComments = response;
      });
  }

  clearMessage(){
     setTimeout(()=>{
      this.isCreatedNewComment = false;
     }, 3000);
  }
  createNewComment(){
    let comment = {
      name: "Amit D",
      body : this.newComment
    }; 

   this.service.create(comment)
    .subscribe((response : CommentsModel)=>{
      this.newComment="";
      this.isCreatedNewComment = true;
      this.clearMessage();
    });
  }

}
