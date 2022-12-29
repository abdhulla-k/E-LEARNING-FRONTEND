import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type signupData = { name: string, email: string, password: string, confirmPassword: string }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(signupData: signupData) {
    this.http.post<signupData>(
      'http://localhost:3000/user/signup', 
      signupData).subscribe(
        data => {
          // console.log(data);
        }
      )
  }
}