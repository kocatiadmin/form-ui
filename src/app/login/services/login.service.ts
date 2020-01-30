import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LoginDetailsModel } from '../models/login-details.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  isLoggedInUserValid(loginDetails: LoginDetailsModel) {
    return loginDetails.username === 'admin' && loginDetails.password === 'admin';
  }
}
