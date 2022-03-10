import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationResponse } from '@models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getLocation(): Observable<LocationResponse> {
    const url = 'https://geolocation-db.com/json/api/location/local';
    return this.http.get(url) as Observable<LocationResponse>;
  }

  public getCurrentTemperature(latitude: string, longitude: string): Observable<any> {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true`;
    return this.http.get(url);
  }
}
