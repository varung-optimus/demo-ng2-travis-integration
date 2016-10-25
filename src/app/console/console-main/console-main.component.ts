import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console-main',
  templateUrl: './console-main.component.html',
  styleUrls: ['./console-main.component.css']
})
export class ConsoleMainComponent implements OnInit {

  isSingleColumnMenu: boolean = false;
  isMultiColumnMenu: boolean = false;
  menuName: string = '';
  pageId: string = '';

  constructor() { }

  ngOnInit() {
  }

  dashboardsMenu() {
    this.showMultiColumnMenu();
  }

  trendsMenu() {
    this.showSingleColumnMenu();
    this.menuName = 'trends';
  }

  intervalStatsMenu() {
    this.showSingleColumnMenu();
    this.menuName = 'interval-stats';
  }

  transactionsMenu() {
    this.showMultiColumnMenu();
    this.menuName = 'transaction';

  }

  alertsMenu() {
    this.showSingleColumnMenu();
    this.menuName = 'alert';

  }

  onMenuClicked(selectedPageId) {
    this.closeMenu();
    this.pageId = selectedPageId;

  }

  showSingleColumnMenu() {
    this.closeMenu();
    this.isSingleColumnMenu = true;

  }

  showMultiColumnMenu() {
    this.closeMenu();
    this.isMultiColumnMenu = true;

  }

  closeMenu() {
    this.isMultiColumnMenu = false;
    this.isSingleColumnMenu = false;
  }

}
