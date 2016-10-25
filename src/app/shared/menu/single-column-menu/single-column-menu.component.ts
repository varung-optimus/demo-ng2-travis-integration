import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuService } from '../menu.service';

import { MenuItem } from '../menu-item'

@Component({
  selector: 'single-column-menu',
  templateUrl: './single-column-menu.component.html',
  styleUrls: ['./single-column-menu.component.css'],
  providers: [MenuService]
})
export class SingleColumnMenuComponent implements OnInit {

  menuItems: MenuItem[] = [{name: 'item1'}, {name: 'item2'}, {name: 'item3'}];
  error: any;

  @Input() menuName: string;
  @Output() menuClicked = new EventEmitter<string>();

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    //this.loadMenu();
  }

  loadMenu() {
    this.menuService.
    getMenu(this.menuName).
    then(menuItems => this.menuItems)
    .catch(error => this.error = error);
  }

  onClick(item) {
    console.log(item);
    this.menuClicked.emit(item);
  }

}
