import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  constructor(private http: HttpClient) { }
  isLoggedIn: boolean = false;
  username: string = "";
  jwt: string = "";

  protected path: string = 'http://localhost:8080/api';
  // typeConfig
  private urlCheckCode = "/typeConfig/checkCode";
  private urlSave = "/typeConfig/save";
  private urlGetAll = "/typeConfig/getAll";
  private urlGetAllByNameWithouCode = "/typeConfig/getAllByNameWithoutCode";
  private urlGetAllByName = "/typeConfig/getAllByName";

  //config
  private urlGetModelMqtt = "/config/getModelMqttByCode";
  private urlGetModelStartTime = "/config/getModelStartTime";
  private urlGetModelCountDown = "/config/getModelCountDown";
  private urlSaveModel = "/config/saveModel";
  private urlDeleteModel = "/config/delete";

  public checkCode(code: string) {
    return this.http.get<any>(this.path + this.urlCheckCode + "?code=" + code, httpOptions);
  }

  public saveCode(data: any) {
    return this.http.post<any>(this.path + this.urlSave, data, httpOptions);
  }

  public getAllCode() {
    return this.http.get<any>(this.path + this.urlGetAll, httpOptions);
  }

  public getAllByNameWithoutCode(name: string, code: string) {
    return this.http.get<any>(this.path + this.urlGetAllByNameWithouCode + "?name=" + name +
      "&code=" + code, httpOptions);
  }

  public getAllByName(name: string) {
    return this.http.get<any>(this.path + this.urlGetAllByName + "?name=" + name, httpOptions);
  }

  public getModelMqtt(code: string) {
    return this.http.get<any>(this.path + this.urlGetModelMqtt + "?code=" + code, httpOptions);
  }

  public getModelStartTime(code: string) {
    return this.http.get<any>(this.path + this.urlGetModelStartTime + "?code=" + code, httpOptions);
  }

  public getModelCountDown(code: string) {
    return this.http.get<any>(this.path + this.urlGetModelCountDown + "?code=" + code, httpOptions);
  }

  public saveModel(data: any) {
    return this.http.post<any>(this.path + this.urlSaveModel, data, httpOptions);
  }

  public deleteModel(code: string) {
    return this.http.delete<any>(this.path + this.urlDeleteModel + "?code=" + code, httpOptions);
  }
}
