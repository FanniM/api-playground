import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getLocation(): Observable<any> {
    /**
     * {
          "country_code":"US",
          "country_name":"United States",
          "city":"Minneapolis",
          "postal":55455,
          "latitude":44.9733,
          "longitude":-93.2323,
          "IPv4":"126.101.76.251",
          "state":"Minnesota"
      }
     */
    const url = '/api/location/local';
    return this.http.get(url);
  }

  public getCurrentTemperature(latitude: string, longitude: string): Observable<any> {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current_weather=true`;
    return this.http.get(url);
  }
}
