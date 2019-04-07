/**
 * Adapted from https://medium.com/@webdev_aaron/fab-speed-dial-with-angular-5-2-angular-material-be696fc14967
 */


import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  animate,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { FloatingButtonEvent } from './floating-button-event';

const speedDialFabAnimations = [
  trigger('fabToggler', [
    state('inactive', style({
      transform: 'rotate(0deg)'
    })),
    state('active', style({
      transform: 'rotate(225deg)'
    })),
    transition('* <=> *', animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  ]),
  trigger('speedDialStagger', [
    transition('* => *', [

      query(':enter', style({opacity: 0}), {optional: true}),

      query(':enter', stagger('40ms',
        [
          animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
            keyframes(
              [
                style({opacity: 0, transform: 'translateY(10px)'}),
                style({opacity: 1, transform: 'translateY(0)'}),
              ]
            )
          )
        ]
      ), {optional: true}),

      query(':leave',
        animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          keyframes([
            style({opacity: 1}),
            style({opacity: 0}),
          ])
        ), {optional: true}
      )

    ])
  ])
];

@Component({
  selector: 'app-floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss'],
  animations: speedDialFabAnimations
})
export class FloatingButtonComponent implements OnInit {
  @Output() buttonClick?: EventEmitter<FloatingButtonEvent> = new EventEmitter();


  fabButtons: FloatingButtonEvent[] = [
    {
      icon: 'check_box',
      type: 'todo'
    },
    {
      icon: 'category',
      type: 'category'
    }
  ];
  buttons = [];
  fabTogglerState = 'inactive';

  constructor() {
  }

  ngOnInit(): void {
  }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  clickItem(item) {
    this.buttonClick.emit(item);
    this.hideItems();
  }

}
