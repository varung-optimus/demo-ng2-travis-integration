import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsoleMainComponent } from './console/console-main/console-main.component';
import { ManagerMainComponent } from './manager/manager-main/manager-main.component';

//TODO - remove this array
const routes: Routes = [
  {path: '', component: ConsoleMainComponent},
  {path: 'console', component: ConsoleMainComponent},
  {path: 'manager', component: ManagerMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
