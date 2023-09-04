import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions1 = {
  headers: new HttpHeaders ({
    'Content-Type' : 'application/json',
    // 'Access-Control-Allow-Origin': '*'
  }),
};
@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService  {
  lon:string = "105.8544441";
  lat:string = "21.0294498";
  appid:string = "162d33e81e7b23ab09650764116057a0"
  path:string = "https://api.openweathermap.org/data/2.5/weather?lat="+this.lat+"&lon="+this.lon+"&appid="+this.appid + "&units=metric";
// "http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric";
  constructor(private http: HttpClient) { }
  public getWeatherNow(): Observable<any> {
    return this.http.get<any>(this.path);
  }

}
