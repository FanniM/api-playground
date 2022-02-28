import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { LocalWeatherModule } from '../local-weather/local-weather.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LocalWeatherModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
