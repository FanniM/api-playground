import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class LocalWeatherService {

  constructor(
    private apiService: ApiService
  ) { }

  getCurrentTemperature(latitude: string, longitude: string) {
    return this.apiService.getCurrentTemperature(latitude, longitude);
  }
  getLocation() {
    return this.apiService.getLocation();
  }
}
