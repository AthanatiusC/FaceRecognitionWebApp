import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor(private http:HttpClient) { }

  Login(username, password): Observable<User> {
    return this.http.post<User>("http://localhost:8088/api/v1/auth/login?username="+username+"&password="+password,JSON.stringify({"data":"Login"}))
  }

  Logout() {
    localStorage.clear()
    location.reload()
  }
}
