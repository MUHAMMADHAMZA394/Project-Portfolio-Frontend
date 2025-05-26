import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  constructor(private apiService: ApiService) { }
  getTokenExpirationDate(token: string): Date | null {
    debugger    
    if (!token) {
      return null;
    }
    try {
      const decodedToken: JwtPayload = jwtDecode(token);
      console.log('Decoded token:', decodedToken); 
      if (!decodedToken || !decodedToken.exp) return null;
      return new Date(decodedToken.exp * 1000);
    } catch (error) {
      return null;
    }
  }

  isTokenExpired(): boolean {
    const token = localStorage.getItem('access_token');

    if (!token) {
      return true;
    }

    const expirationDate = this.getTokenExpirationDate(token);
    if (!expirationDate) {
      return true;
    }

    return expirationDate.valueOf() < new Date().valueOf();
  }
}
