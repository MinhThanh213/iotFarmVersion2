import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {
  private readonly interval = 60000;
  constructor(private http: HttpClient) { }
  // startAutoCall(): Observable<any> {
  //   return timer(0, this.interval).pipe(
  //     switchMap(() => {
  //
  //     })
  //   );
  // }
}
