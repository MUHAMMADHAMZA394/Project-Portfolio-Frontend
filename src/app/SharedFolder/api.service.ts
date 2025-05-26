import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl: string = environment.api.apiUrl;
  //gisbaseUrl: string = environment.gisApi.gisapiUrl;
  //gisSyncadminsUr: string = environment.gisApi.syncadminsUrl;

  //gispost(resource: string, request: any) {
  //  let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //  return this.http.post(`${this.gisbaseUrl}${resource}`, request);
  //}
  //gisget(endpoint: string) {
  //  let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //  return this.http.get(`${this.gisSyncadminsUr}/${endpoint}`);
  //}


  get(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`);
  }
  partiallyGet(endpoint: string, queryParams?: HttpParams): Observable<any> {
    const options = {
      params: queryParams
    };
    debugger;
    return this.http.get(`${this.baseUrl}/${endpoint}`, options);
  }
  post(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data);
  }
  put(endpoint: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${endpoint}`, data);
  }
  delete(endpoint: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${endpoint}`);
  }
  partiallyUpdate(endpoint: string, id: number, data: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${endpoint}/${id}`, data);
  }
}
