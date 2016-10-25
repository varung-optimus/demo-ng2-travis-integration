import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './devtmp/in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConsoleMainComponent } from './console/console-main/console-main.component';
import { ManagerMainComponent } from './manager/manager-main/manager-main.component';
import { SingleColumnMenuComponent } from './shared/menu/single-column-menu/single-column-menu.component';
import { MultiColumnMenuComponent } from './shared/menu/multi-column-menu/multi-column-menu.component';
import { ContainerComponent } from './shared/container/container.component';
import { AreaChartWidgetComponent } from './shared/widgets/area-chart/area-chart-widget/area-chart-widget.component';
import { AreaChartPropertiesComponent } from './shared/widgets/area-chart/area-chart-properties/area-chart-properties.component';
import { HealthCheckWidgetComponent } from './shared/widgets/health-check/health-check-widget/health-check-widget.component';
import { HealthCheckPropertiesComponent } from './shared/widgets/health-check/health-check-properties/health-check-properties.component';
import { HistogramWidgetComponent } from './shared/widgets/histogram/histogram-widget/histogram-widget.component';
import { HistogramPropertiesComponent } from './shared/widgets/histogram/histogram-properties/histogram-properties.component';
import { LineChartWidgetComponent } from './shared/widgets/line-chart/line-chart-widget/line-chart-widget.component';
import { LineChartPropertiesComponent } from './shared/widgets/line-chart/line-chart-properties/line-chart-properties.component';
import { SpeedometerWidgetComponent } from './shared/widgets/speedometer/speedometer-widget/speedometer-widget.component';
import { SpeedometerPropertiesComponent } from './shared/widgets/speedometer/speedometer-properties/speedometer-properties.component';
import { AlertsComponent } from './manager/alerts/alerts.component';
import { TopologyWidgetComponent } from './shared/widgets/topology/topology-widget/topology-widget.component';

import { ManagerRoutingModule } from './manager/manager-routing.module';
import { ConsoleRoutingModule } from './console/console-routing.module';
import { DecodersComponent } from './manager/decoders/decoders.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsoleMainComponent,
    ManagerMainComponent,
    SingleColumnMenuComponent,
    MultiColumnMenuComponent,
    ContainerComponent,
    AreaChartWidgetComponent,
    AreaChartPropertiesComponent,
    HealthCheckWidgetComponent,
    HealthCheckPropertiesComponent,
    HistogramWidgetComponent,
    HistogramPropertiesComponent,
    LineChartWidgetComponent,
    LineChartPropertiesComponent,
    SpeedometerWidgetComponent,
    SpeedometerPropertiesComponent,
    AlertsComponent,
    TopologyWidgetComponent,
    DecodersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    ConsoleRoutingModule,
    ManagerRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
