import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ManagerMainComponent } from './manager-main/manager-main.component';
import { AlertsComponent } from './alerts/alerts.component';
import { DecodersComponent } from './decoders/decoders.component';
import { ContainerComponent } from '../shared/container/container.component';
import { TopologyWidgetComponent } from '../shared/widgets/topology/topology-widget/topology-widget.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'manager',
        component: ManagerMainComponent,
        children: [
            {
                path: '',
                component: TopologyWidgetComponent
            },
            {
                path: 'topology',
                component: TopologyWidgetComponent
            },
            {
                path: 'decoders',
                component: DecodersComponent
            },
            { path: 'alerts',
              component: AlertsComponent },
            { path: 'container/:id',
              component: ContainerComponent 
            }
        ]
     }
      
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ManagerRoutingModule { }