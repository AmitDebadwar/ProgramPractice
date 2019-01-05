import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-custom-panel',
  templateUrl: './custom-panel.component.html',
  styleUrls: ['./custom-panel.component.css'],
  animations: [
    trigger('expandCollapse', [
      state("collapsed", style({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        opacity: 0
      })),
      state('expanded', style({
        height: '*',
        padding: '*',
        overflow: 'auto'
      })),

      transition("collapsed => expanded", [
        animate('500ms ease-out', style({
          height: '*',
          paddingTop: '*',
          paddingBottom: '*',
        })),

        animate("1s", style({
          opacity : 1
        }))

      ]),
      transition("expanded => collapsed", animate('500ms ease-in'))

    ])
  ]
})
export class CustomPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
