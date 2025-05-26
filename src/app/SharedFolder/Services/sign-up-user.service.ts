import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';


@Injectable({
  providedIn: 'root'
})
export class SignUpUserService {

  constructor(private apiService: ApiService) { }



  registerUser(data: any): Observable<any> {
    debugger;
    var body = {
      ...data
    }
    return this.apiService.post(`login/signup`, body);

  }


  LoginUser(data: any): Observable<any> {
    return this.apiService.post(`login/loginUser`, data); // Make sure endpoint matches backend
  }







}








