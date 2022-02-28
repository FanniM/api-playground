import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalWeatherComponent } from './components/local-weather.component';



@NgModule({
  declarations: [LocalWeatherComponent],
  imports: [
    CommonModule
  ],
  exports: [LocalWeatherComponent]
})
export class LocalWeatherModule { }
