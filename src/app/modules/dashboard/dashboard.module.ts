import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { LocalWeatherModule } from '../local-weather/local-weather.module';
import { RandomPasswordModule } from '../random-password/random-password.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LocalWeatherModule,
    RandomPasswordModule
  ],
  exports: [
    DashboardComponent,
    RouterModule
  ]
})
export class DashboardModule { }
