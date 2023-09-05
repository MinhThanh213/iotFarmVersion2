import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type' : 'application/json',
    // 'Access-Control-Allow-Origin': '*'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient) { }
  isLoggedIn: boolean = false;
  username : string = "";
  jwt : string = "";

  protected path :string = 'http://localhost:8080';
  //controller
  protected uriController = '/api/controller';
  protected uriControllerUpdateStage = '/updateStage';
  protected uriControllerGetAll = '/getAll';
  //sensors
  protected uriGetAllSensors = '/api/sensors/getAll';

  public getAllSensors(){
    return this.http.get<any>(this.path + this.uriGetAllSensors, httpOptions);
  }

  public updateStage(data : any){
    return this.http.post<any>(this.path + this.uriController + this.uriControllerUpdateStage, data, httpOptions);
  }

  public getAllController(){
    return this.http.get<any>(this.path + this.uriController + this.uriControllerGetAll, httpOptions);
  }
}
