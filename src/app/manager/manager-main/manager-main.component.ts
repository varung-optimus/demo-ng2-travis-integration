import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-main',
  templateUrl: './manager-main.component.html',
  styleUrls: ['./manager-main.component.css']
})
export class ManagerMainComponent implements OnInit {

  isSingleColumnMenu: boolean = false;
  menuName: string;

  constructor() { }

  ngOnInit() {
  }


}
