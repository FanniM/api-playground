import { Component, OnInit } from '@angular/core';
import { LocationResponse } from '@models';
import { LocalWeatherService } from '../../local-weather.service';

@Component({
  selector: 'app-local-weather',
  templateUrl: './local-weather.component.html',
  styleUrls: ['./local-weather.component.sass']
})
export class LocalWeatherComponent implements OnInit {

  public temperature: any = null;
  public location: LocationResponse = null;

  constructor(
    private localWeatherService: LocalWeatherService
  ) {}

  ngOnInit(): void {
    this.loadPlace();
  }

  private loadPlace(): void {
    this.localWeatherService.getLocation().subscribe(
      locationResponse => this.setPlace(locationResponse)
    );
  }

  private setPlace(locationResponse: LocationResponse): void {
    this.location = locationResponse;
  }

  public getCurrentTemperature(): void {
    this.localWeatherService.getCurrentTemperature(
      this.location.latitude.toString(),
      this.location.longitude.toString()
    ).subscribe(
      weatherResponse => this.setTemperatureFromWeatherResponse(weatherResponse)
    );
  }

  private setTemperatureFromWeatherResponse(weatherResponse: any): void {
    if (
      !weatherResponse ||
      !weatherResponse.current_weather
    ) {
      return;
    }
    this.temperature = weatherResponse.current_weather.temperature
  }

}
