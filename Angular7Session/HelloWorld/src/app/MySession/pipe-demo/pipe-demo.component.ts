import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  constructor() { }
  mobileNumber;
  temSummary = "{{ longText | summary }}";
  longText=`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.` ;

  users=[
    {firstName : 'Amit', lastName: 'Debadwar', mobileNumber: '9096174175'},
    {firstName : 'Nitin', lastName: 'Pawar', mobileNumber: '9891782376'},
    {firstName : 'Jagruti', lastName: 'Patil', mobileNumber: '8769765675'}
  ]


  ngOnInit() {
  }

}
