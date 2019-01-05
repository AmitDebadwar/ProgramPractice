import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from './navItem.interface';

@Component({
  selector: 'app-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.css']
})
export class DynamicMenuComponent implements OnInit {

  
  constructor() { }

  @Input() private navItems: NavItem[];
  
  ngOnInit() {
  }

}
