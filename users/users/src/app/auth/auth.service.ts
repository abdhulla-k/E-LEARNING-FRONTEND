import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

type signupData = { name: string, email: string, password: string, confirmPassword: string };
type loginDetails = { email: string, password: string };
type loginResponse = { token: string, message: string, loggedIn: boolean };

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = new EventEmitter();
  loggedInStatus = false;

  constructor(private http: HttpClient, private router: Router) { }

  signUp(signupData: signupData) {
    this.http.post<signupData>(
      'http://localhost:3000/user/signup',
      signupData).subscribe(
        data => {
          // console.log(data);
        }
      )
  }

  login(loginData: loginDetails) {
    this.http.post<loginResponse>(
      'http://localhost:3000/user/login',
      loginData
    ).subscribe(
      response => {
        console.log(response);
        if(response.loggedIn === true) {
          console.log('logged In')
          this.loggedInStatus = true;
          this.loggedIn.emit(true);
          this.router.navigate(["/user"])
        }
      }
    )
  }
}