import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

@Input() pageId: string = '';

  constructor() { }

  ngOnInit() {
  }

}
