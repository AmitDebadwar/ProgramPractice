import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-and-two-way-data-binding',
  templateUrl: './interpolation-and-two-way-data-binding.component.html',
  styleUrls: ['./interpolation-and-two-way-data-binding.component.css']
})
export class InterpolationAndTwoWayDataBindingComponent implements OnInit {

  title = "Sample Heading";
  console = console;
  message;
  usersFromApi = [];
  imgUrl = "";//"https://cdn-images-1.medium.com/max/1200/1*juPyda3wq9uz_SNFRLuANg@2x.png";
  isShowUserDetails: boolean;

  constructor() { }

  ngOnInit() {
    this.isShowUserDetails = true;
  }


  getUsers() {
    this.usersFromApi  = [
      { id: 1, userName: 'Amit Debadwar' },
      { id: 2, userName: 'Niraj Burde' },
      { id: 3, userName: 'Renu Deshpande' },
      { id: 4, userName: 'Shashank Rathor' },
      { id: 5, userName: 'Aashay Saralkar' }
    ];
  
  }




  

  trackById(index: number, obj): number { 
    return obj.id; 
  }










}
