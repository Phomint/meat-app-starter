import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {MenuItem} from './menu-item.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-20px)'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();

  menuItemState = 'ready';
  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem);
  }
  addMenuItem(item: MenuItem) {
    console.log(item);
  }
}
