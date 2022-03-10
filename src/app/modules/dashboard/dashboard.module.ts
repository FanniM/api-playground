import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { LocalWeatherModule } from '../local-weather/local-weather.module';
import { RandomPasswordModule } from '../random-password/random-password.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    LocalWeatherModule,
    RandomPasswordModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
