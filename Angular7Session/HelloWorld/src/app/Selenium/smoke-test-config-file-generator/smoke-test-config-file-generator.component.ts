import { ActionModel } from './../action-model';
import { TestScenariosModel } from './../test-scenarios-model';
import { SmokeTestMainModel } from './../smoke-test-main-model';
import { Component, OnInit } from '@angular/core';

 


@Component({
  selector: 'app-smoke-test-config-file-generator',
  templateUrl: './smoke-test-config-file-generator.component.html',
  styleUrls: ['./smoke-test-config-file-generator.component.css']
})
export class SmokeTestConfigFileGeneratorComponent implements OnInit {
  myForm : any;
  mainModel : SmokeTestMainModel;
  scena : TestScenariosModel;
  actionModel : ActionModel;
  title ;

  constructor() { }
  


  ngOnInit() {
    this.title="sai title";

     

    this.mainModel={
      applicationName:"sai app",
      applicationUrl:"saiurl",
      scenarios:[
        {
          testScenarioName: 'sai',
          actions:[{
            name: "sai"
          }]
        }
      ],
    };

  } 
}
