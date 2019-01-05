import { FormControl, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form-for-my-app',
  templateUrl: './template-driven-form-for-my-app.component.html',
  styleUrls: ['./template-driven-form-for-my-app.component.css']
})
export class TemplateDrivenFormForMyAppComponent implements OnInit {
  firstName;
  middleName;
  userEmail;
  cellNumber
  lastName
  personalInfoFormModel: any = {};

  isShowPreview;

  cities: any = [
    {id : 1, name : 'Pune'},
    {id : 2, name : 'Nanded'},
    {id : 3, name : 'Nagpur'},
    {id : 4, name : 'Beed'},
    {id : 5, name : 'Latur'}
  ];


  states: any = [
    {id : 1, name : 'Maharashtra'},
    {id : 2, name : 'Utterpradesh'},
    {id : 3, name : 'Madhyapradesh'},
    {id : 4, name : 'Tamilnadu'},
    {id : 5, name : 'Punjab'}
  ];

  constructor() { }
  
  console = console;
  
  ngOnInit() {
  }

  log(e: Event,  x:FormControl){
   
  }

  chkChange(){
    //this.personalInfoFormModel.permanentAddress = this.personalInfoFormModel.isSameAddress ? this.personalInfoFormModel.currentAddress: '';

  }

  submit(form : Form){
    
    this.console.log(form);
  }

}
