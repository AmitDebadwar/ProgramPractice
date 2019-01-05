import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aipipes',
  templateUrl: './aipipes.component.html',
  styleUrls: ['./aipipes.component.css']
})
export class AIPipesComponent implements OnInit {
  
  temUpperCase="{{ authorsName | uppercase }}";
  temLowerCase="{{ authorsName | lowercase }}";
  temCurrency1 = "{{ price | currency:'CAD' }}";
  temCurrency2 = "{{ price | currency:'USD':true: '3.4' }}";
  temJsonData = "{{ jsonData | json }}";
  

  price=  1224000.45;
  someDate = new Date();
  jsonData={
    id: 12312,
    name: "Xoriant Solutions",
    address: {
      street: "Baner",
      pincode: "411045",
      area: "Hinjewadi"
    }
  };

  authorsName = "Douglas Crockford";

  constructor() { }

  ngOnInit() {
  }

}
