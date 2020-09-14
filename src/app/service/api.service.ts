import { Injectable } from '@angular/core';
import { Logs } from '../models/logs.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }

  key = localStorage.getItem('auth_key')

  GetLogs(): Observable<Logs>{
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'auth_key':this.key
    }
    const httpOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get<Logs>("http://localhost:8088/api/v1/logs/",{headers:new HttpHeaders(headerDict)})
  }
}
