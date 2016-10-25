import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConsoleMainComponent } from './console-main/console-main.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '',
        component: ConsoleMainComponent
     },
      { path: 'console',
        component: ConsoleMainComponent
     }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ConsoleRoutingModule { }