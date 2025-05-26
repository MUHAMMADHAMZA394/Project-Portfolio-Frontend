import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    const token = localStorage.getItem('access_token');

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    if (this.authService.isTokenExpired()) {
      console.log("Token expired. Redirecting to login.");
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
