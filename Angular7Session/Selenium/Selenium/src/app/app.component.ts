import { Component } from '@angular/core';
import { AppConstansts } from './MySession/common/constants/app-constansts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   navItems = AppConstansts.getRouterConfig();
}
