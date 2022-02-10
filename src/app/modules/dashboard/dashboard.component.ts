import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public temperature: any = null;
  public location: {
    city: string;
    latitude: number;
    longitude: number;
  } = null;

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.loadPlace();
  }

  private loadPlace(): void {
    this.apiService.getLocation().subscribe(locationResponse => this.setPlace(locationResponse));
  }

  private setPlace(locationResponse: any): void {
    this.location = locationResponse;
  }

  public getCurrentTemperature(): void {
    this.apiService.getCurrentTemperature(
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
