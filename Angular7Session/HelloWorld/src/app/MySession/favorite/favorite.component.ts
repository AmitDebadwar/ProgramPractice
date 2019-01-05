import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  inputs:['isFavorite']
})
export class FavoriteComponent implements OnInit {

  isFavorite = false;
  likeCount = 0;

  constructor() { }
 
  ngOnInit() {
  }

  onClick (){
    this.isFavorite= this.isFavorite ? false : true;
    this.likeCount += this.isFavorite ? 1 : -1;
  }

}
