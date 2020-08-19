import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  public isAuthenticated = false

  constructor(private jwt:JwtHelperService,private route:Router) { }
  
  canActivate(): boolean {
    const key = localStorage.getItem('auth_key')
    if (key != null) {
      if (!this.jwt.isTokenExpired(key)) {
        this.isAuthenticated = true
        return true
      }
    }
    this.route.navigate(["login"])
    return false
  }
}
